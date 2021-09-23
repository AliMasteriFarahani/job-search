<template>
  <div class="container-fluid p-0">
    <!-- top-menu -->
    <app-header></app-header>
    <!-- start header : -->
    <app-search-filter-layer></app-search-filter-layer>
    <!--  end of header -->
    <!-- job advertisment : -->
    <section class="container mt-5">
      <div class="row">
          <!-- right-side -->
          <app-job-search-result></app-job-search-result>
        <!-- left side : -->
        <app-resume-left-side :showBtn="false"></app-resume-left-side>
      </div>
      <!-- end of left side  -->
      <!-- end of left and right for jobsection -->

      <!-- pagination : -->
      <app-pagination></app-pagination>
      <!-- end of pagination  -->
    </section>
    <!-- footer  -->
    <app-footer></app-footer>
  </div>
  <!--  end of main container  -->
</template>

<script>
import { customSelectMixin } from "@/Mixins/customSelectMixin";
import AppHeader from "../shared/Header.vue";
import AppSearchFilterLayer from "./SearchFilterLayer.vue";
import AppJobSearchResult from "./JobSearchResultRightSide.vue";
import AppResumeLeftSide from "../shared/ResumeSectionLeft.vue";
import AppPagination from "./Pagination.vue";
import AppFooter from "../shared/Footer.vue";
export default {
  mixins: [customSelectMixin],
  components: {
    AppFooter,
    AppHeader,
    AppPagination,
    AppResumeLeftSide,
    AppSearchFilterLayer,
    AppJobSearchResult
  },


};
</script>

<style scoped>
@import url("../../../assets/plugins/custom-select/css/custom-select.css"); 
</style>
