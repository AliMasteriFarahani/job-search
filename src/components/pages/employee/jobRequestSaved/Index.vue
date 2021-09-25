<template>
  <div class="container-fluid p-0">
    <!-- top-menu -->
    <app-header></app-header>
    <!-- job advertisment : -->
    <section class="container mt-5">
      <div class="row">
          <!-- right-side -->
        <app-right-side></app-right-side>
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
import AppHeader from "../../shared/Header.vue";
import AppRightSide from "./RightSide.vue";
import AppResumeLeftSide from "../../shared/ResumeSectionLeft.vue";
import AppPagination from "./Pagination.vue";
import AppFooter from "../../shared/Footer.vue";
export default {
  components: {
    AppFooter,
    AppHeader,
    AppPagination,
    AppResumeLeftSide,
    AppRightSide
  },


};
</script>

<style scoped>

</style>
