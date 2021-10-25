<template>
  <div class="container-fluid p-0">
    <!-- top-menu -->
    <app-header></app-header>
    <!-- job advertisment : -->
    <section class="container mt-5">
      <div class="row">
          <!-- right-side -->
        <app-right-side :pageIdChanged="pageIdChanged"></app-right-side>
        <!-- left side : -->
        <app-resume-left-side :showBtn="false"></app-resume-left-side>
      </div>
      <!-- end of left side  -->
      <!-- end of left and right for jobsection -->

      <!-- pagination : -->
          <app-pagination :getPageId="getSavedPageId" @pageChanged="pageIdChanged = $event" :allPages="getAllPagesSaved"></app-pagination>
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
import AppPagination from "../../shared/PaginationSimple.vue";
import AppFooter from "../../shared/Footer.vue";
import { mapGetters,mapActions } from "vuex";
export default {
  components: {
    AppFooter,
    AppHeader,
    AppPagination,
    AppResumeLeftSide,
    AppRightSide
  },
  data(){
    return {
      employeeId:1,
        pageIdChanged:1,
    }
  },
  computed:{
    ...mapGetters(['getAllPagesSaved','getSavedPageId'])
  },
  methods:{
  ...mapActions(['getEmployeeSavedJobsFromServer'])
  },
};
</script>

<style scoped>

</style>
