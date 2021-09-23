<template>
  <div class="container-fluid p-0">
    <!-- top-menu -->
    <app-header></app-header>
    <!-- start header landing : -->
    <app-landing-layer></app-landing-layer>
    <!--  end of header -->
    <!-- job advertisment : -->
    <section class="container mt-5">
      <div class="row">
        <!-- top section for saved and another oppertunity -->
        <app-top-section-so></app-top-section-so>
        <!-- right side : -->
        <app-job-details></app-job-details>
        <!-- left side : -->
        <app-resume-section :showBtn="true"></app-resume-section>
      </div>
      <!-- end of left side  -->
      <!-- end of left and right for jobsection -->

      <!-- similar jobs : -->
      <app-similar-jobs></app-similar-jobs>
      <!-- end of similar jobs  -->
    </section>
    <!-- footer  -->
    <app-footer></app-footer>
  </div>
  <!--  end of main container  -->
</template>

<script>
import AppHeader from "../shared/Header.vue";
import AppLandingLayer from "./LandingLayer.vue";
import AppTopSectionSo from "./TopSection.vue";
import AppJobDetails from "./JobDetails.vue";
import AppResumeSection from "../shared/ResumeSectionLeft.vue";
import AppSimilarJobs from "./SimilarJobs.vue";
import AppFooter from "../shared/Footer.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
    AppLandingLayer,
    AppTopSectionSo,
    AppSimilarJobs,
    AppJobDetails,
    AppResumeSection,
  },
};
</script>

<style>

.header-bg {
  background: url("/images/job-banner.jpg");
  max-width: 100%;
  height: auto;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: content-box;
  background-size: cover;
}
section.header-bg::after {
  content: "";
  display: block;
  background-color: #000;
  opacity: 0.5;
  position: absolute;
  height: 100%;
  width: 100%;
}

.job-description-card {
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 1px 1px 10px #ccc;
}
.vertical-dashed-line {
  background-image: linear-gradient(#ccc 33%, #fff 0%);
  background-position: right;
  background-size: 2px 16px;
  background-repeat: repeat-y;
}
.horizontal-dashed-line {
  background-image: linear-gradient(#ccc 33%, #fff 0%);
  background-position: right;
  background-size: 2px 16px;
  background-repeat: repeat-x;
}

.col-12.bullet::before {
  content: "";
  display: block;
  width: 1.3rem;
  height: 1.3rem;
  float: right;
  background-color: #ccc;
  position: relative;
  border-radius: 50%;
  right: -1.33rem;
}
.job-desc-item {
  border: 1px dashed #ccc;
  border-radius: 5px;
  background: #eee;
}
</style>
