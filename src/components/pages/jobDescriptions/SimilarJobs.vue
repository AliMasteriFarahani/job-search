<template>
  <div class="row mt-5">
    <div class="col-12 col-lg-72">
      <div class="border-r bg-white">
        <div class="row pt-4 pb-3 px-lg-5 px-4">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <h3 class="font-102">آگهی های مشابه</h3>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row pt-4">
              <!-- job similar item : -->
              <div
                class="col-12 mb-3"
                v-for="(simJob, index) in getSimilarPositions"
                :key="index"
              >
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
                      src="/images/aven.png"
                      class="img-fluid figure-img"
                      alt=""
                    />
                  </span>
                  <span class="float-start ms-3">
                    <router-link
                      :to="{
                        name: 'JobDescriptions',
                        params: { id: simJob.jobId },
                      }"
                      ><h3 class="font-90 mt-1 d-inline">
                        {{ simJob.jobTitle }}
                      </h3></router-link
                    >
                    {{ simJob.jobId }} ---
                    <span
                      class="text-dark font-73 d-block d-md-inline font-num-is"
                      >( 3 روز پیش )</span
                    >
                    <div
                      class="
                        mt-4
                        color-73
                        font-xs-73 font-sm-80
                        d-flex
                        flex-wrap
                      "
                    >
                      <span class="me-3 mb-2 mb-md-0">
                        <i class="fa-solid fa-building font-80"></i>
                        <span class="ms-1">{{ simJob.companyName }}</span>
                      </span>
                      <span class="me-3 mb-2 mb-md-0">
                        <i class="fa-solid fa-location-dot font-80"></i>
                        <span class="ms-1">{{ simJob.provinceName }}</span>
                      </span>
                      <span class="me-3">
                        <i class="fa-solid fa-money-check font-80"></i>
                        <span class="ms-1 d-inline-block">حقوق</span>
                        <span class="ms-1 d-inline-block font-num-is"
                          >({{
                            simJob.salary == "حقوق پایه (وزارت کار)"
                              ? `حقوق پایه - وزارت کار`
                              : `${simJob.salary} تومان `
                          }})</span
                        >
                      </span>
                      <span
                        class="position-absolute similar-bookmark"
                        @click="
                          changeSaveStatus(
                            simJob.jobId,
                            simJob.isSaved,
                            index
                          )
                        "
                      >
                        <span v-html="saveIcon(index, simJob)"></span>
                        <div
                          v-if="getIsJobSaved === -1 && key == index"
                          class="spinner-border spinner-save spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </span>
                      <button
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
                      </button>
                    </div>
                  </span>
                </div>
              </div>
              <!-- end of  job similar item  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  //--------------------
  data() {
    return {
      employeeId:1,
      oldClass: '',
      key: null,
    };
  },
  methods: {
    ...mapActions(["getSimilarPositionsFromServer"]),

    changeSaveStatus(jobId, isSaved, key) {
      this.$store.dispatch("changeJobSaveStatusInServer", {
        jobId,
        empId:this.employeeId,
        isSaved,
        isCurrent: 0,
      });
      this.$store.commit("setIsJobSaved", -1);
      this.key = key;
      if (isSaved == 1) {
        this.oldClass = "fa-solid";
      } else {
        this.oldClass = "fa-regular";
      }
    },
  },

  computed: {
    ...mapGetters(["getSimilarPositions", "getIsJobSaved"]),
    saveIcon() {
      return (index, simJob) => {
        if (this.key == index) {
          simJob.isSaved = this.getIsJobSaved;
        }

        let className;
        if (simJob.isSaved == 1) {
          className = "fa-solid";
        } else if (simJob.isSaved == 0) {
          className = "fa-regular";
        } else {
          className = this.oldClass;
        }

        return `<i class='fa-bookmark ${className} font-105'></i>`;
      };
    },
  },
  created() {
    this.getSimilarPositionsFromServer({
      jobId: this.$route.params.id,
      empId: this.employeeId,
    });
  },
};
</script>

<style>
</style>