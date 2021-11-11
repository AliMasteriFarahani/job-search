<template>
  <div>
    <router-view></router-view>
    <!-- <app-home></app-home> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
//import AppHome from './components/pages/index/Home.vue'

export default {
  //components: { AppHome },
  name: "App",
    metaInfo() {
      return {
          titleTemplate: '%s | jobroob.ir جابروب'   
      }

  },
  methods:{
    ...mapActions(['checkIsUserAuthenticated']),
  },
  created(){
    this.checkIsUserAuthenticated();
    console.log('oooooooooooooooooooooooooo');
  }

};
</script>

<style>

</style>
