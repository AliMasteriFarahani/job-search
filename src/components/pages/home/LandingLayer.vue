<template>
  <section class="position-relative w-100 container-fluid pb-4 pb-md-5">
    <div class="row text-center">
      <div class="col mt-3 mt-md-5 pt-3">
        <h3>سامانه کاریابی آنلاین</h3>
      </div>
    </div>
    <div class="row text-center">
      <div class="col mt-4">
        <h4>دانش ،مهارت = استخدام</h4>
      </div>
    </div>
                        <transition
          appear
          enter-active-class="animate__animated animate__pulse"
        >
            <div class="row w-100">
      <div class="col-10 bg-alpha-8 offset-1 mt-4  rounded-3 py-5 px-3 p-lg-5">
        <form action="">
          <div class="row">
            <div
              class="col-md-12 col-lg-4 mb-2 mb-lg-0 col-12 position-relative"
            >
              <input v-model="filters.searchText"
                type="text"
                class="form-control input-textbox"
                placeholder="عنوان شغلی یا ..."
              />
            </div>
            <div
              class="col-12 col-md-6 col-lg-3 mb-2 mb-lg-0 position-relative"
            >
              <div
                class="custom-select z-index-lv2"
                title="انتخاب استان ..."
                data-search-box="true"
              >
                <select v-model="filters.province">
                  <option value="0">همه شهر ها</option>
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
              class="col-md-6 col-lg-3 col-12 mb-2 mb-lg-0 position-relative"
            >
              <div
                class="custom-select"
                title="دسته بندی شغلی"
                data-search-box="true"
              >
                <select v-model="filters.category">
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
            <div class="col-md-6 col-lg-2 col-12 offset-md-3 offset-lg-0">
              <router-link
                :to="{
                  name: 'JobSearch',
                  params: {'filters':filters},
                }"
                class="btn btn-warning h-100 w-100 font-95"
              >
                جست و جو
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
                        </transition>

        <img class="search-bg-img d-none d-md-block"
      src="/images/New Project.jpg"
      alt=""
      sizes=""
      srcset=""
    />
        <img class="search-bg-img  d-sm-block d-md-none"
      src="/images/New Project (1).jpg"
      alt=""
      sizes=""
      srcset=""
    />
        <img class="search-bg-img  d-block d-sm-none"
      src="/images/New Project (2).jpg"
      alt=""
      sizes=""
      srcset=""
    />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
    };
  },
  computed: {
    ...mapGetters(["getCategories","getProvinces"]),
  },
  async created() {
    if (Object.keys(this.getCategories).length == 0) {
     await this.$store.dispatch("getCategoriesFromServer");
     await this.$store.dispatch("getProvincesFromServer");
    }
  },
};
</script>

<style>
.search-bg-img{
      width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

</style>
