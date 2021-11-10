<template>
  <div class="row px-lg-5 min-h-70vh align-content-start px-4">
    <!-- result of job search : -->
    <div
      v-for="(applied, i) in geEmployeeAppliedJob"
      :key="i"
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
                id: applied.jobId,
                slug: sanitizeTitleSlug(applied.jobTitle),
              },
            }" 
          >
            <h3 class="font-90 mt-1 d-inline">{{ applied.jobTitle }}</h3>
          </router-link>
          <div class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap">
            <span class="me-3 mb-2 mb-md-0">
              <i class="fa-solid fa-building font-80"></i>
              <span class="ms-1">{{ applied.companyName }}</span>
            </span>
            <span class="me-3 mb-2 mb-md-0">
              <i class="fa-solid fa-location-dot font-80"></i>
              <span class="ms-1">{{ applied.province }}</span>
            </span>
            <span class="me-3 mb-2 mb-md-0">
              <i class="fa-solid fa-calendar-check align-middle font-80"></i>
              <span class="ms-1">تاریخ ارسال :</span>
              <span dir="ltr" class="ms-1 font-num-is">1400-01-01</span>
            </span>
            <span class="me-3">
              <i
                class="fa-solid fa-circle-half-stroke align-middle font-80"
              ></i>
              <span class="ms-1">وضعیت :</span>
              <span
                :class="[
                  'ms-1 d-inline-block font-bd-is',
                  statusClass(applied.status),
                ]"
                >{{ applied.status }}</span
              >
            </span>
          </div>
        </span>
      </div>
    </div>
    <!-- end of result of job search  -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { makeSlug } from "@/Mixins/makeSlug";
export default {
  mixins: [makeSlug],
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
      "getAllAppliedPages",
      "getAppliedPageId",
      "geEmployeeAppliedJob",
      'getEmployeeId'
    ]),
    statusClass() {
      return (st) => {
        let status = "";
        if (st == "درانتظار بررسی") {
          status = "text-warning";
        } else if (st == "تایید شده") {
          status = "text-success";
        } else if (st == "رد شده") {
          status = "text-danger";
        }
        return status;
      };
    },
  },
  methods: {
    ...mapActions(["getAppliedJobsFromServer"]),
  },
  created() {
    this.getAppliedJobsFromServer({
      empId: this.getEmployeeId,
      pageId: 1,
    });
  },
  watch: {
    // pageIdChanged(v) {
    //   this.getAppliedJobsFromServer({
    //     empId: this.employeeId,
    //     pageId: v,
    //   });
    // },
  },
};
</script>

<style>
</style>