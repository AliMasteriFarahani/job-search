import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";

//import "./assets/css/bootstrap.rtl.min.css";
//import "./assets/css/bootstrap-reboot.rtl.min.css";
//import "./assets/css/all.css";
//import "./assets/css/animate.min.css";
//import "./assets/css/custom.css";

//import "./assets/js/bootstrap.min.js";
//import "./assets/js/bootstrap.bundle.min.js";
//import "./assets/js/all.min.js";
Vue.config.productionTip = false;

//==============================================
//axios.defaults.headers.common['Authorization'] = `Bearer gggg`;
axios.interceptors.request.use(
  function(config) {
    config.headers["Authorization"] =
      "Bearer " + Vue.cookie.get("JSS_AUTH_TOKEN");
    //config.headers['Access-Control-Allow-Origin'] = '*';
    //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
  },
  function(error) {
    //  console.log(error,'err');
    return Promise.reject(error);
  }
);
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
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios.defaults.baseURL = "http://job-search.test/";
axios.defaults.baseURL = "https://api.jobout.ir/";
import { Routes } from "./Routes/Routes.js";

Vue.use(VueRouter);
Vue.use(axios);
Vue.use(VueCookie);
//axios.defaults.headers.common['Authorization'] ='Bearer '+Vue.cookie.get('JSS_AUTH_TOKEN')
// Vue.cookie.get('JSS_AUTH_TOKEN');
//Vue.use(Vuelidate);

Vue.use(VueMeta, {
  // refreshOnceOnNavigation: true
});

export const router = new VueRouter({
  mode: "history",
  routes: Routes,
  scrollBehavior(to, from, savePosition) {
    if (to.hash) {
      if (savePosition) {
        return savePosition;
      }
      return {
        selector: to.hash,
      };
    }
  },
});

let publicPath = [
  "Home",
  "JobSearch",
  "JobDescriptions",
  "CompanyPositions",
  // "Login",
  // "Register",
  // "ResetPassword",
  // 'EmailResetPassword',
  // 'ResetPassword'
];
let publicAut =[
  "Login",
  "Register",
  "ResetPassword",
  'EmailResetPassword',
  'ResetPassword'
]
router.beforeEach(async (to, from, next) => {
  store.commit("setRoute", to);
  await store.dispatch("checkIsUserAuthenticated");
  //console.log(store.getters.getIsUserAuthenticated);
  if (publicAut.includes(to.name) && store.getters.getIsUserAuthenticated) {
   // router.push("/");
  }
  let pathes = publicPath.concat(publicAut);
  if (!pathes.includes(to.name) && !store.getters.getIsUserAuthenticated) {
  // router.push("/");
  }
  next();
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
