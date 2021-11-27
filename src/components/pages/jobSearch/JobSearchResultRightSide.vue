<template>
  <div class="col-12 col-lg-9 col-lg-72" id="search">
    <div class="shadow-c border-radius-05 overflow-hidden bg-white min-h-100vh">
      <div class="row filters my-3 px-md-4">
        <div class="col-12 col-md-9 ps-4 ps-md-2 order-1 order-md-0">
          <template v-if="Object.keys(getWhatSearch).length > 0">
            <span class="font-85"
              >نتایج جست و جو :
              <span class="ms-2 font-1 me-1 font-num-bd-is">{{
                getTotalJobs
              }}</span>
              مورد یافت شد</span
            >
            <span class="vertical-line mx-3 d-none d-md-inline"></span>
            <span
              @click="removeFilter({ id: Math.random(0, 1), value: 'all' })"
              class="
                font-80
                text-danger
                cursor-pointer
                d-block d-md-inline
                mt-2 mt-md-0
              "
              >حذف فیلتر ها</span
            >
          </template>
          <template v-else>
            <span class="font-85"
              >مشاغل موجود :
              <span class="ms-2 font-1 me-1 font-num-bd-is">{{
                getTotalJobs
              }}</span>
              مورد شغل فعال</span
            >
          </template>
        </div>
        <div
          class="
            pe-4
            col-6 col-md-3
            mb-3 mb-lg-0
            order-first order-md-1
            offset-6 offset-md-0
            position-relative
          "
        >
          <div class="custom-select" title="جدیدترین" data-search-box="false">
            <select v-model="sortStatus">
              <option value="1">جدیدترین</option>
              <option value="2">بیشترین حقوق</option>
            </select>
          </div>
        </div>
        <div
          ref="filterWrapper"
          class="col-12 mt-3 d-flex flex-wrap px-4 order-last"
        >
          <span
            v-for="(search, i) in getWhatSearch"
            :key="i"
            class="filter-done font-num-is me-2 mb-2 animate__animated"
          >
            <input type="hidden" value="0" />
            <span class="font-num-is">{{ handleSearch(search) }} </span>
            <span
              @click="
                removeFilter({ id: Math.random(0, 1), value: search.name })
              "
              class="close-icon d-inline-flex align-middle cursor-pointer ms-1"
            >
              <i class="font-1 align-middle fa-solid fa-circle-xmark"></i>
            </span>
          </span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div class="border-dashed"></div>
        </div>
      </div>
      <div class="row px-lg-5 px-4">
        <!-- result of job search : -->
        <div class="col">
          <div v-if="getJobs.length == 0" class="text-center">
            هیچ شغلی یافت نشد
          </div>
        </div>
        <div v-for="(job, index) in getJobs" :key="index" class="col-12 mb-3">
          <div
            class="
              float-start
              w-100
              job-adv
              position-relative
              similar-job
              d-flex
              p-2
            "
          >
            <span class="job-logo-palce flex-none align-self-center">
              <img
                :src="getCompanyLogoFolder+'/'+job.logo"
                class="img-fluid figure-img"
                alt=""
              />
            </span>
            <span class="float-start ms-3">
              <router-link
                target="_blank"
                :to="{
                  name: 'JobDescriptions',
                  params: { id: job.jobId, slug: sanitizeTitleSlug(job.jobTitle) },
                }"
              >
                <h3 class="font-90 mt-1 d-inline">
                  {{ job.jobTitle }}
                </h3>
              </router-link>
              <span class="text-dark font-73 d-block d-md-inline font-num-is">
                {{
                  job.created_at == "yesterday" || job.created_at == 1
                    ? "( دیروز )"
                    : ""
                }}
                {{ job.created_at == "today" ? "( امروز )" : "" }}
                {{
                  job.created_at != "yesterday" &&
                  job.created_at != "today" &&
                  job.created_at != 1
                    ? `( ${job.created_at} روز پیش )`
                    : ""
                }}</span
              >
              <div class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap">
                <span class="me-3 mb-2 mb-md-0">
                  <i class="fa-solid fa-building font-80"></i>
                  <span class="ms-1">{{ job.companyName }}</span>
                </span>
                <span class="me-3 mb-2 mb-md-0">
                  <i class="fa-solid fa-location-dot font-80"></i>
                  <span class="ms-1">{{ job.provinceName }}</span>
                </span>
                <span class="me-3">
                  <i class="fa-solid fa-money-check align-middle font-80"></i>
                  <span class="ms-1">حقوق</span>
                  <span class="ms-1 font-num-is">
                    ({{
                      job.salary == "حقوق پایه (وزارت کار)"
                        ? `حقوق پایه - وزارت کار`
                        : job.salary | toCurrency()
                    }}{{
                      job.salary == "حقوق پایه (وزارت کار)" ||
                      job.salary == "توافقی"
                        ? ""
                        : " تومان"
                    }})
                  </span>
                </span>
                <span v-if="getIsUserAuthenticated"
                  class="position-absolute similar-bookmark"
                  @click="changeSaveStatus(job.jobId, job.isSaved, index)"
                >
                  <span v-html="saveIcon(index, job)"></span>
                  <div
                    v-if="getIsJobSaved === -1 && key == index"
                    class="spinner-border spinner-save spinner-border-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </span>
                <!-- <button
                  class="
                    btn btn-success btn-similar-position
                    bg-green
                    border-radius-05
                    px-3
                    py-2
                    shadow-c
                    border-0
                    d-none d-lg-block
                    font-80
                    text-white
                  "
                >
                  ارسال رزومه
                </button> -->
              </div>
            </span>
          </div>
        </div>
        <!-- end of result of job search  -->
      </div>
    </div>
  </div>
</template>

<script>
//import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { saveJobCollectMixin } from "@/Mixins/saveJobCollectMixin";
import { toCurrency } from "@/Mixins/toCurrency";
import { makeSlug } from "@/Mixins/makeSlug";
export default {
  mixins: [saveJobCollectMixin, toCurrency,makeSlug],
  data() {
    return {
      employeeId: 1,
      sortStatus: 1,
    };
  },
  computed: {
    ...mapGetters([
      "getJobs",
      "getIsJobSaved",
      "getCompanyLogoFolder",
      "getWhatSearch",
      "getTotalJobs",
      'getEmployeeId',
      'getIsUserAuthenticated'
    ]),
    handleSearch() {
      return (itam) => {
        if (itam.name == "salary") {
          if (itam.value != "توافقی" && itam.value != "حقوق پایه (وزارت کار)") {
            return "از " + this.$options.filters.toCurrency(itam.value);
          } else {
            return itam.value;
          }
        }
        return itam.value;
      };
    },
  },
  methods: {
    removeFilter(val) {
      this.$emit("removeFilter", val);
    },
  },
  watch: {
    sortStatus(v) {
      this.$emit("sortChanged", v);
    },
  },
};
</script>

<style>
.filter-done {
  font-size: 0.8rem;
  background-color: #efb102;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  border-radius: 0.5rem;
}
.filter-done .icon {
  transition: all 300ms;
}
.filter-done .close-icon:hover {
  color: #f00 !important;
}
.filters .custom-option-selected {
  height: 2rem !important;
}
.spinner-border-sm {
  border-width: 0.16em;
}
.spinner-save {
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
  border-color: #ffcc12;
  border-left-color: transparent;
}
</style>