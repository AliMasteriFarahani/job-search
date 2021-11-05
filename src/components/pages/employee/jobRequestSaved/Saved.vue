<template>
  <div class="row min-h-70vh px-lg-5 px-4">
    <!-- result of job search : -->
    <div
      v-for="(job, index) in getEmployeeSavedJobs"
      :key="index"
      class="col-12 mb-3"
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
            src="/images/hex-lab-5.png"
            class="img-fluid figure-img"
            alt=""
          />
        </span>
        <span class="float-start ms-3">
          <router-link
            target="_blank"
            :to="{
              name: 'JobDescriptions',
              params: {
                id: job.jobId,
                slug: sanitizeTitleSlug(job.jobTitle),
              },
            }"
          >
            <h3 class="font-90 mt-1 d-inline">
              {{ job.jobTitle }}
            </h3>
          </router-link>
          <span class="text-dark font-73 d-block d-md-inline font-num-is"
            >( 3 روز پیش )</span
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
              <span class="ms-1 font-num-is">(7000000 تومان)</span>
            </span>
            <span
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
</template>
<script>
import { mapGetters,mapActions } from "vuex";
import { saveJobCollectMixin } from "@/Mixins/saveJobCollectMixin";
import { makeSlug } from "@/Mixins/makeSlug";
export default {
  mixins: [saveJobCollectMixin, makeSlug],
  props: {
    pageIdChanged: {
      Number,
      default: 1,
    },
  },
  data() {
    return {
      employeeId: 1,
    };
  },
  computed: {
    ...mapGetters([
      "getEmployeeSavedJobs",
      "getIsJobSaved",
      "getCompanyLogoFolder",
    ]),
  },
  methods: {
    ...mapActions(["getEmployeeSavedJobsFromServer"]),
  },
  created() {
    this.getEmployeeSavedJobsFromServer({
      empId: this.employeeId,
      pageId: 1,
    });
  },
  watch: {
    pageIdChanged(v) {
      this.getEmployeeSavedJobsFromServer({
        empId: this.employeeId,
        pageId: v,
      });
    },
  },
};
</script>

<style>
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