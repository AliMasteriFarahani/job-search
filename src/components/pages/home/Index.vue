<template>
  <div>
    <div class="container-fluid p-0">
      <!-- top-menu -->
      <app-header></app-header>
      <!-- start landing layer : -->
      <app-landing-layer></app-landing-layer>
      <!--  end of landing layer -->
      <!-- job advertisment : -->
      <section class="container mt-5">
        <div class="row">
          <!-- right side -->
          <app-home-right-side></app-home-right-side>
          <!-- left side : -->
          <app-home-left-side></app-home-left-side>
        </div>
        <!-- end of left and right for jobsection -->

        <!-- blog articles : -->
        <app-blog-articles></app-blog-articles>
      </section>
      <!-- footer  -->
      <app-footer ></app-footer>
    </div>
  </div>
</template>
<script>

 import { customSelectMixin } from "@/Mixins/customSelectMixin";
import AppHeader from "../shared/Header.vue";
import AppLandingLayer from "./LandingLayer.vue";
import AppHomeRightSide from "./NewJobs.vue";
import AppHomeLeftSide from "./InstantJob.vue";
import AppBlogArticles from "./Blog.vue";
import AppFooter from "../shared/Footer.vue";
export default {
  mixins: [customSelectMixin],
  components: {
    AppFooter,
    AppHeader,
    AppLandingLayer,
    AppHomeRightSide,
    AppHomeLeftSide,
    AppBlogArticles,
  },
};
</script>
<style scoped >
 @import url("../../../assets/plugins/custom-select/css/custom-select.css"); 
</style>
