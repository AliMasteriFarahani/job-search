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
        <app-resume-left-side :showBtn="false" :resumeEdit='true'></app-resume-left-side>
      </div>
      <!-- end of left side  -->
      <!-- end of left and right for jobsection -->
    </section>
    <!-- footer  -->
    <app-footer></app-footer>
  </div>
  <!--  end of main container  -->
</template>

<script>
// import Vue from "vue";
// import axios from "axios";
// axios.defaults.headers.common['Authorization'] =`Bearer ${Vue.cookie.get('JSS_AUTH_TOKEN')}`
import AppHeader from "../../shared/Header.vue";
import AppRightSide from "./RightSide.vue";
import AppResumeLeftSide from "../../shared/ResumeSectionLeft.vue";
import AppFooter from "../../shared/Footer.vue";
import { mapGetters,mapActions } from 'vuex';
export default {
  data(){
    return{

    }
  },
  components: {
    AppFooter,
    AppHeader,
    AppResumeLeftSide,
    AppRightSide
  },
  computed:{
      ...mapGetters(['getIsUserAuthenticated'])
  },
  methods:{
    ...mapActions(['checkIsUserAuthenticated']),
  },
};
</script>

<style scoped>

</style>
