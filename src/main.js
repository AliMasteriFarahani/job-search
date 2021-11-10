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


//==============================================
///axios.defaults.headers.common['Authorization'] = `Bearer gggg`;
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
// //config.headers.Authorization = 'Bearer '+'yeeeesss'
//   console.log(config,'conf');
//   return config;
// }, function (error) {
//   // Do something with request error
//   alert('hello')
//   console.log(error,'err');
//   return Promise.reject(error);
// });
// // //-----------
// axios.interceptors.response.use(function (response) {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   response.headers.Authorization = 'Bearer '+'yeeeesss'
//   console.log(response,'res');
//   return response;
// }, function (error) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   console.log(error.response,'errr');
//   console.log('-------------');

//   return Promise.reject(error);
// });

//===================================


import VueRouter from "vue-router";
import { store } from "./Store/Store.js";
import axios from "axios";
import VueCookie from "vue-cookie";
//import Vuelidate from 'vuelidate'
axios.defaults.baseURL = "http://job-search.test/";
import { Routes } from "./Routes/Routes.js";

Vue.use(VueRouter);
Vue.use(axios);
Vue.use(VueCookie);
axios.defaults.headers.common['Authorization'] =`Bearer ${Vue.cookie.get('JSS_AUTH_TOKEN')}`
// Vue.cookie.get('JSS_AUTH_TOKEN');
//Vue.use(Vuelidate);

Vue.use(VueMeta,{
 // refreshOnceOnNavigation: true
});

export const router = new VueRouter({
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
