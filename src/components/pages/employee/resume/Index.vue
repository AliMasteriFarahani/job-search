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
import AppHeader from "../../shared/Header.vue";
import AppRightSide from "./RightSide.vue";
import AppResumeLeftSide from "../../shared/ResumeSectionLeft.vue";
import AppFooter from "../../shared/Footer.vue";
import { mapGetters,mapActions } from 'vuex';
export default {
  data(){
    return{
      employeeId:55,
      sty:''
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
  created(){
    console.log(this,'this1');
  },
  beforeRouteEnter(to,from,next){
   // alert(this.$store.getters.getIsUserAuthenticated,'pp');
       // console.log(vm=>vm);
      //  alert(this.employeeId);
        //  this.checkIsUserAuthenticated().then(()=>{
        //    next()
        //  })
        next(vm=>{
          //let u = vm.$store.getters
          vm.sss = 'sss'
          vm._data.employeeId=111
          let y = JSON.parse(JSON.stringify(vm._data.employeeId))
          console.log(y,'iio')
          });
     // alert('sss');
       next();

  }


};
</script>

<style scoped>

</style>
