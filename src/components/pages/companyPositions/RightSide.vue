<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="shadow-c border-radius-05 min-h-100vh overflow-hidden bg-white">
      <div class="row px-lg-5 px-4 mt-4">
        <div class="col-12">
          <h3 class="font-1 mb-3">موقعیت های شغلی</h3>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div class="border-dashed"></div>
        </div>
      </div>
      <div class="row px-lg-5 px-4">
        <div
          v-for="(job, index) in getCompanyJobPositions"
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
                :src="getCompanyLogoFolder + job.logo"
                class="img-fluid figure-img"
                alt=""
              />
            </span>
            <span class="float-start ms-3">
              <router-link
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
                }}
              </span>
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
                  <span class="ms-1 font-num-is"
                    >({{
                      job.salary == "حقوق پایه (وزارت کار)"
                        ? `حقوق پایه - وزارت کار`
                        : `${job.salary} تومان `
                    }})</span
                  >
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
      </div>
    </div>
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
      // employeeId: 1,
    };
  },
  computed: {
    ...mapGetters([
      "getCompanyJobPositions",
      "getIsJobSaved",
      "getCompanyLogoFolder",
      'getEmployeeId',
      'getIsUserAuthenticated'
    ]),
  },
  methods:{
      ...mapActions(['getCompanyJobPositionsFromServer'])
  },
  async created() {
    await this.$store.dispatch("getCompanyJobPositionsFromServer", {
      companyId: this.$route.params.id,
      empId: this.getEmployeeId,
      pageId: 1,
    });
  },
  watch: {
    pageIdChanged(v) {
      this.getCompanyJobPositionsFromServer({
        companyId: this.$route.params.id,
        empId: this.getEmployeeId,
        pageId: v,
      });
    },
  },
};
</script>

<style>
.job-sa {
  border-bottom: 2px solid transparent;
  padding: 0.2rem 0.2rem 0.4rem 0.5rem;
  margin-bottom: -0.12rem;
  position: relative;
}
.job-sa a {
  color: #000 !important;
  font-family: "iransanse-md" !important;
}
.job-sa.active {
  border-bottom: 2px solid #4dbcf0 !important;
  color: #4dbcf0 !important;
}
.job-sa.active a {
  color: #4dbcf0 !important;
  font-family: "iransanse-md" !important;
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