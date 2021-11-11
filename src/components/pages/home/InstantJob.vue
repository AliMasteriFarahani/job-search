<template>
  <div class="col-12 col-lg-3 col-lg-28 mt-3 mt-lg-0">
    <div class="border-r bg-white">
      <div class="row">
        <div class="col-12">
          <div class="bg-warning bg-c1 p-3 float-start w-100">
            <h3 class="m-0 float-start font-1">فرصت های شغلی فوری</h3>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="row">
        <!-- job items -->
        <div class="col-12" v-for="(job,index) in getImmediateJobs" :key="index">
          <router-link 
                      target="_blank"
            :to="{
              name: 'JobDescriptions',
              params: {
                id: job.id,
                slug: sanitizeTitleSlug(job.title),
              },
            }"
          >
            <div class="float-start w-100 job-adv-imd p-2">
              <span class="float-start ms-2 w-100">
                <div>
                  <h3 class="font-85 d-inline m-0">
                    {{job.title}}
                  </h3>
                  <span class="badge rounded-pill bg-danger float-end me-1"
                    >فوری</span
                  >
                </div>
                <div class="mt-3 color-73">
                  <span class="me-2">
                    <i class="fa-solid fa-building font-80"></i>
                    <span class="font-73 ms-1">{{job.companyName}}</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-location-dot font-80"></i>
                    <span class="font-73 ms-1">{{job.provinceName}}</span>
                  </span>
                </div>
              </span>
            </div>
          </router-link>
        </div>
        <!-- end on job - items -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { makeSlug } from "@/Mixins/makeSlug";
export default {
  mixins:[makeSlug],
data(){
  return{
  
  }
},
computed:{
  ...mapGetters(['getCompanyLogoFolder','getImmediateJobs'])
},
created(){
   if (this.getImmediateJobs.length == null) {
     this.$store.dispatch('getImmediateJobsFromServer')
   }
}
};
</script>

<style scoped>
.job-adv-imd {
  border: 1px dashed #a2a2a2;
  color: #0f0f0f;
  border-right: 1px dashed transparent;
  border-left: 1px dashed transparent;
}
.job-adv-imd:hover {
  background-color: #e3e3e3;
  color: #ff7700 !important;
  border-right: 1px dashed #a2a2a2;
  border-left: 1px dashed #a2a2a2;
}
.job-adv-imd:first-child {
  border-top: none !important;
}
</style>
