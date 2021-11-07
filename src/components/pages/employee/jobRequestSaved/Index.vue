<template>
  <div class="container-fluid p-0">
    <!-- top-menu -->
    <app-header></app-header>
    <!-- job advertisment : -->
    <section class="container mt-5">
      <div class="row">
        <!-- right-side -->
        <app-right-side ></app-right-side>
        <!-- :pageIdChanged="pageIdChanged" -->
        <!-- left side : -->
        <app-resume-left-side :showBtn="false"></app-resume-left-side>
      </div>
      <!-- end of left side  -->
      <!-- end of left and right for jobsection -->

      <!-- pagination : -->
      <app-pagination
        :getPageId="pageId"
        @pageChanged="pageIdChanged = $event"
        :allPages="allpeges"
      ></app-pagination>
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
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AppFooter,
    AppHeader,
    AppPagination,
    AppResumeLeftSide,
    AppRightSide,
  },
  data() {
    return {
      employeeId: 1,
      pageIdChanged: 1,
    //  pageId: 1,
      //  allPages:1
    };
  },
  computed: {
    ...mapGetters(["getAllPagesSaved", "getSavedPageId",'getAppliedPageId','getAllAppliedPages']),
    allpeges() {
      let all;
      if (this.$route.name == "Saved") {
        all = this.getAllPagesSaved;
      } else if (this.$route.name == "Requests") {
        all = this.getAllAppliedPages;
      }
      return all;
    },
     pageId(){

      let id;
      if (this.$route.name == "Saved") {
        id = this.getSavedPageId;
      } else if (this.$route.name == "Requests") {
        id = this.getAppliedPageId;
      }
      return id;
      
     }
  },
  methods: {
    ...mapActions(["getEmployeeSavedJobsFromServer",'getAppliedJobsFromServer']),
  },
  // created() {
  //   this.getEmployeeSavedJobsFromServer({
  //     empId: this.employeeId,
  //     pageId: 1,
  //   })
  // },
  watch: {
    $route() {
        this.pageIdChanged = 1
    },
    pageIdChanged(v) {
      if (this.$route.name == "Saved") {
        this.getEmployeeSavedJobsFromServer({
          empId: this.employeeId,
          pageId: v,
        });
      }else if (this.$route.name == "Requests") {
        this.getAppliedJobsFromServer({
          empId: this.employeeId,
          pageId: v,
        });
      }
    },
  },
};
</script>

<style scoped>
</style>
