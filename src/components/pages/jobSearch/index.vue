<template>
  <div class="container-fluid p-0">
    <!-- top-menu -->
    <app-header></app-header>
    <!-- start header : -->
    <app-search-filter-layer :removeFilter="removeFilter" :pageIdChanged="pageIdChanged" :sortStatus="sortStatus"></app-search-filter-layer>
    <!--  end of header -->
    <!-- job advertisment : -->
    <section class="container mt-5">
      <div class="row">
          <!-- right-side -->
          <app-job-search-result @removeFilter="removeFilter = $event"  @sortChanged="sortStatus = $event"></app-job-search-result>
        <!-- left side : -->
        <app-resume-left-side :showBtn="false"></app-resume-left-side>
      </div>
      <!-- end of left side  -->
      <!-- end of left and right for jobsection -->

      <!-- pagination : -->
      <app-pagination :getPageId="getPageId" @pageChanged="pageIdChanged = $event" :allPages="getAllPages"></app-pagination>
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
import { mapGetters } from "vuex";
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
  data(){
    return{
      employeeId:1,
      sortStatus:1,
      pageIdChanged:1,
      removeFilter:null
    }
  },
  computed:{
    ...mapGetters(['getAllPages','getPageId'])
  },
  methods:{
  //  ...mapActions(['getJobsFromServer']),
    // pageChanged(pageId){
    //   console.log('dddddd',pageId);
    //   this.getJobsFromServer({employeeId:this.employeeId,pageId})
    // }
  },
  watch:{
    getPageId(v){
      this.pageIdChanged = v;
    }
  }


};
</script>

<style scoped>
@import url("../../../assets/plugins/custom-select/css/custom-select.css"); 
</style>
