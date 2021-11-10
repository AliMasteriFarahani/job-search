<template>
  <section class="container-fluid landing-layer bg-sky pb-4 pb-md-5">
    <div class="row">
      <div class="col-10 offset-1 mt-4 bg-white rounded-3 px-3 py-5 p-lg-5">
        <form action="">
          <div class="row">
            <div class="col-lg-10 col-12">
              <div class="row">
                <div
                  class="
                    col-md-12 col-lg-5
                    mb-2 mb-lg-0
                    col-12
                    position-relative
                  "
                >
                  <input
                    v-model="filters.searchText"
                    type="text"
                    class="form-control input-textbox"
                    placeholder="عنوان شغلی یا ..."
                  />
                </div>
                <div
                  class="
                    col-12 col-md-6 col-lg-col
                    mb-2 mb-lg-0
                    position-relative
                  "
                >
                  <div
                    class="custom-select"
                    title="انتخاب استان ..."
                    data-search-box="true"
                  >
                    <select class="p2" id="province" v-model="filters.province">
                      <option value="0">انتخاب همه استان ها</option>
                      <option
                        v-for="(province, index) in getProvinces"
                        :key="index"
                        :value="province.id"
                      >
                        {{ province.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  class="
                    col-md-6 col-lg-col col-12
                    mb-2 mb-lg-0
                    position-relative
                  "
                >
                  <div
                    class="custom-select"
                    title="دسته بندی شغلی"
                    data-search-box="true"
                  >
                    <select class="p2" id="category" v-model="filters.category">
                      <option value="0">همه دسته بندی ها</option>
                      <option
                        v-for="(cat, index) in getCategories"
                        :key="index"
                        :value="cat.id"
                      >
                        {{ cat.title }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <transition
                appear
                enter-active-class="animate__animated animate__fadeIn"
              >
                <div
                  v-show="showAdvancedFilterItems"
                  class="row advanced-filter-items row mt-lg-3"
                >
                  <div
                    class="
                      col-12 col-md-6 col-lg-3
                      mb-2 mb-lg-0
                      position-relative
                    "
                  >
                    <div class="custom-select z-index-lv2" title="جنسیت">
                      <select v-model="filters.gender">
                        <option value="0">مهم نیست</option>
                        <option value="1">آقا</option>
                        <option value="2">خانم</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="
                      col-md-6 col-lg-3 col-12
                      mb-2 mb-lg-0
                      position-relative
                    "
                  >
                    <div
                      class="custom-select"
                      title="حقوق"
                      data-search-box="false"
                    >
                      <select v-model="filters.salary">
                        <option value="0">فرقی ندارد</option>
                        <option
                          v-for="(salary, index) in getSalary"
                          :value="salary.id"
                          :key="index"
                        >
                          {{ salary.id == 1 || salary.id == 2 ? "" : "از " }}
                          {{
                            salary.id == 1 || salary.id == 2
                              ? salary.fee
                              : salary.fee | toCurrency()
                          }}
                          <!-- {{salary.id == 1 || salary.id == 2 ? '':salary.fee | toCurrency()}} -->
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="
                      col-md-6 col-lg-3 col-12
                      mb-2 mb-lg-0
                      position-relative
                    "
                  >
                    <div
                      class="custom-select"
                      title="سابقه کار"
                      data-search-box="false"
                    >
                      <select v-model="filters.workExperience">
                        <option
                          v-for="(work, index) in getWorkExperince"
                          :key="index"
                          :value="work.id"
                        >
                          {{ work.id == 1 ? "فرقی ندارد" : work.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="
                      col-md-6 col-lg-3 col-12
                      mb-2 mb-lg-0
                      position-relative
                    "
                  >
                    <div
                      class="custom-select"
                      title="نوع قرارداد"
                      data-search-box="false"
                    >
                      <select v-model="filters.contractType">
                        <option value="0">فرقی ندارد</option>
                        <option
                          v-for="(contract, index) in getContract"
                          :key="index"
                          :value="contract.id"
                        >
                          {{ contract.contract_type }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </transition>
              <div class="row mt-3 mb-3 mb-lg-0">
                <div class="col">
                  <span
                    @click="showAdvancedFilterItems = !showAdvancedFilterItems"
                    id="advanced-filter-btn"
                    class="cursor-pointer color-sky"
                  >
                    <span class="font-80"
                      ><i class="fa-solid fa-filters"></i
                    ></span>
                    <span class="font-73 mx-1">جست و جوی پیشرفته</span>
                    <span>
                      <i class="angle align-middle fa-solid fa-angle-down"></i>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-12">
              <div class="row">
                <div class="col-12">
                  <button
                    @click.prevent="searchJob()"
                    class="btn btn-warning h-100 w-100 font-95"
                  >
                    جست و جو
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { toCurrency } from "@/Mixins/toCurrency";
export default {
  mixins: [toCurrency],
  props: {
    sortStatus: {
      Number,
      default: 1,
    },
    pageIdChanged: {
      Number,
      default: 1,
    },
    removeFilter: {
      String,
    },
  },
  data() {
    return {
      filters: {
        searchText: "",
        province: "",
        category: "",
        gender: "",
        salary: "",
        workExperience: "",
        contractType: "",
        sortStatus: 1,
      },
      fff: "",
      filtersTmp: [],
      employeeId: 1,
      showAdvancedFilterItems: false,
    };
  },
  computed: {
    ...mapGetters([
      "getProvinces",
      "getCategories",
      "getSalary",
      "getWorkExperince",
      "getContract",
      "getWhatSearch",
      'getEmployeeId'
    ]),
  },
  methods: {
    ...mapActions([
      "getProvincesFromServer",
      "getCategoriesFromServer",
      "getSalaryFromServer",
      "getWorkExperienceFromServer",
      "getContractFromServer",
      "getSearchJobsFromServer",
    ]),
    searchJob() {
      this.getSearchJobsFromServer({
        filters: this.filters,
        employeeId: this.getEmployeeId,
        pageId: 1,
      });
      this.filtersTmp = Object.assign({}, this.filters);
    },
  },
  created() {
    this.filtersTmp = Object.assign({}, this.filters);
    if (this.$route.params["filters"] !== undefined) {
      this.filters = this.$route.params.filters;
      this.filtersTmp = Object.assign({}, this.filters);
     // this.fff = this.$route.params.filters;
    }
    this.getProvincesFromServer();
    this.getCategoriesFromServer();
    this.getSalaryFromServer();
    this.getWorkExperienceFromServer();
    this.getContractFromServer();
    this.getSearchJobsFromServer({
      filters: this.filters,
      employeeId: this.getEmployeeId,
      pageId: 1,
    });
  },
  watch: {
    filters() {
      let clickEvent = new Event("change");
      document.querySelectorAll(".custom-select .p2").forEach((element) => {        
          if (element.id == "province") {
            if (this.filters.province != "" && this.filters.province !=0 && this.filters.province != undefined) {
            let option = element.querySelector(
              `option[value='${this.filters.province}']`
            );
            let text = option.innerText;
            option.setAttribute("selected", "selected");
            element
              .closest(".custom-select")
              .querySelector(".custom-option-selected").innerText = text;
          }
        }

          if (element.id == "category") {
            if (this.filters.category != "" && this.filters.category !=0 && this.filters.category != undefined) {
            let option = element.querySelector(
              `option[value='${this.filters.category}']`
            );
            let text = option.innerText;
            option.setAttribute("selected", "selected");
            element
              .closest(".custom-select")
              .querySelector(".custom-option-selected").innerText = text;
          }
        }
        element.dispatchEvent(clickEvent);
      });
    },
    sortStatus(v) {
      this.filters.sortStatus = v;
      this.filtersTmp.sortStatus = v;
      this.getSearchJobsFromServer({
        filters: this.filtersTmp,
        employeeId: this.getEmployeeId,
        pageId: 1,
      });
    },
    pageIdChanged(v) {
      this.getSearchJobsFromServer({
        filters: this.filtersTmp,
        employeeId: this.getEmployeeId,
        pageId: v,
      });
    },
    removeFilter(v) {
      if (v.value != null && v.value != "all") {
        this.filtersTmp[v.value] = "";
        this.getSearchJobsFromServer({
          filters: this.filtersTmp,
          employeeId: this.getEmployeeId,
          pageId: 1,
        });
      } else if (v.value != null && v.value == "all") {
        for (let x in this.filtersTmp) {
          this.filtersTmp[x] = "";
        }
        this.getSearchJobsFromServer({
          filters: this.filtersTmp,
          employeeId: this.getEmployeeId,
          pageId: 1,
        });
      }
    },

  }, // watch

};
</script>

<style>
</style>