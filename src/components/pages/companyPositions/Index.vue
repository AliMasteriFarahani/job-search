<template>
  <div class="container-fluid p-0">
    <!-- top-menu -->
    <app-header></app-header>
    <!-- job advertisment : -->
    <app-landing-layer></app-landing-layer>
    <section class="container mt-5">
      <div class="row">
        <div class="col-12 my-4">
            <div class="bg-white rounded-3 shadow-c py-3 px-4">
                 <h3 class="font-1 font-bd-is mb-3">معرفی شرکت</h3>
                 <p>
                    {{getCompanySummaryInfo.introduce}}
                 </p>
            </div>
        </div>
      </div>
      <div class="row">
          <!-- right-side -->
        <app-right-side :pageIdChanged="pageIdChanged" ></app-right-side>
        <!-- left side : -->
        <app-resume-left-side :showBtn="false"></app-resume-left-side>
      </div>
      <!-- end of left side  -->
      <!-- end of left and right for jobsection -->

      <!-- pagination : -->
      <app-pagination :getPageId="getCompanyJobPageId" @pageChanged="pageIdChanged = $event" :allPages="getAllPagesCompanyJob"></app-pagination>
      <!-- end of pagination  -->
    </section>
    <!-- footer  -->
    <app-footer></app-footer>
  </div>
  <!--  end of main container  -->
</template>

<script>
import AppHeader from "../shared/Header.vue";
import AppLandingLayer from "./LandingLayer.vue";
import AppRightSide from "./RightSide.vue";
import AppResumeLeftSide from "../shared/ResumeSectionLeft.vue";
import AppPagination from "../shared/PaginationSimple.vue";
import AppFooter from "../shared/Footer.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data(){
    return {
            pageIdChanged:1,
    }
  },
  components: {
    AppFooter,
    AppHeader,
    AppLandingLayer,
    AppPagination,
    AppResumeLeftSide,
    AppRightSide
  },
  computed:{
    ...mapGetters(['getCompanySummaryInfo','getAllPagesCompanyJob','getCompanyJobPageId'])
  },
  methods:{
    ...mapActions(['getCompanySummaryInfoFromServer'])

  },
  created(){
    if(Object.keys(this.getCompanySummaryInfo).length == 0){
      this.getCompanySummaryInfoFromServer({companyId:this.$route.params.id})
    }
  },
  watch:{
    getPageId(v){
      this.pageIdChanged = v;
    },

  },

};
</script>

<style scoped>

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
