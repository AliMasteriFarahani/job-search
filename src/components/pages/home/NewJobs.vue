<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
      <div class="row">
        <div class="col-12">
          <div class="bg-warning p-3 bg-c1 float-start w-100">
            <h3 class="m-0 float-start font-1">فرصت های شغلی امروز</h3>
            <!-- <span class="float-end font-80 fw-bold">1400-11-11</span> -->
          </div>
        </div>
      </div>
      <div class="row my-3 px-4 justify-content-evenly">
        <!-- job advertisment right : -->
        <div
          class="col-12 col-lg-6 mb-3"
          v-for="(newJobs, index) in getNewJobs"
          :key="index"
        >
          <router-link
            target="_blank"
            :to="{
              name: 'JobDescriptions',
              params: {
                id: newJobs.id,
                slug: sanitizeTitleSlug(newJobs.title),
              },
            }"
          >
            <div class="float-start w-100 job-adv d-flex p-2">
              <span class="job-logo-palce align-self-center">
                <img
                  :src="getCompanyLogoFolder + newJobs.logo"
                  class="img-fluid figure-img"
                  :alt="newJobs.title"
                />
              </span>
              <span class="float-start ms-3">
                <h3 class="font-90 mt-1">{{ newJobs.title }}</h3>
                <div class="mt-4 color-73">
                  <span class="me-3">
                    <i class="fa-solid fa-building font-80"></i>
                    <span class="font-80 ms-1">{{ newJobs.companyName }}</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-location-dot font-80"></i>
                    <span class="font-80 ms-1">{{ newJobs.provinceName }}</span>
                  </span>
                </div>
              </span>
            </div>
          </router-link>
        </div>
        <!-- end of  job advertisment  -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { makeSlug } from "@/Mixins/makeSlug";
export default {
  mixins: [makeSlug],
  computed: {
    getNewJobs() {
      return this.$store.getters.getNewJobs;
    },
    ...mapGetters(["getCompanyLogoFolder"]),
  },
  created() {
    if (this.getNewJobs.length == null) {
      this.$store.dispatch("getNewJobsFromServer");
    }
  },
};
</script>

<style scoped>
</style>
