import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta"

import "./assets/css/bootstrap.rtl.min.css";
import "./assets/css/bootstrap-reboot.rtl.min.css";
import "./assets/css/all.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom.css";

//import "./assets/js/bootstrap.min.js";
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/js/all.min.js";
Vue.config.productionTip = false;

import VueRouter from "vue-router";
import { store } from "./Store/Store.js";
import axios from "axios";
//import Vuelidate from 'vuelidate'
axios.defaults.baseURL = "http://job-search.test/";

import { Routes } from "./Routes/Routes.js";

Vue.use(VueRouter);
Vue.use(axios);
//Vue.use(Vuelidate);

Vue.use(VueMeta,{
 // refreshOnceOnNavigation: true
});

const router = new VueRouter({
  mode: "history",
  routes: Routes,
  scrollBehavior(to,from,savePosition){
    if(to.hash){
      if (savePosition) {
        return savePosition
      }
       return {
         selector:to.hash
       };
    }
}
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
