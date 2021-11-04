<template>
  <div>
    <router-view></router-view>
    <!-- <app-home></app-home> -->
  </div>
</template>

<script>
//import AppHome from './components/pages/index/Home.vue'

export default {
  //components: { AppHome },
  name: "App",
    metaInfo() {
      return {
          titleTemplate: '%s | jobroob.ir جابروب'   
      }

  },

};
</script>

<style>

</style>
