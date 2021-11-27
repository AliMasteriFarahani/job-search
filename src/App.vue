<template>
  <div>
    <div class="main-status" v-if="getStatus=='main-pending'">
      <div class="--spinner">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- <app-home></app-home> -->
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
//import AppHome from './components/pages/index/Home.vue'

export default {
  //components: { AppHome },
  name: "App",
  metaInfo() {
    return {
      titleTemplate: "%s | jobout.ir جاباوت",
    };
  },
  computed:{
      ...mapGetters(['getStatus'])
  },
  methods: {
    ...mapActions(["checkIsUserAuthenticated"]),
  },
  created() {
    this.checkIsUserAuthenticated();
  },
  watch:{
    getStatus(){

    }
  }
};
</script>

<style>
.main-status {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(250, 250, 250, 0.5);
  z-index: 100000000;
  top: 0;
  right: 0;
}
.--spinner {
  position: fixed;
  top: 30%;
  right: 50%;
  transform: translateX(50%);
}
.--spinner .spinner-border {
  width: 3rem;
  height: 3rem;
  border: 0.2em solid #ffa500;
  border-left-color: transparent;
}
</style>
