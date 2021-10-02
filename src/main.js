import Vue from 'vue'
import App from './App.vue'

import './assets/css/bootstrap.rtl.min.css'
import './assets/css/bootstrap-reboot.rtl.min.css'
import './assets/css/all.css'
import './assets/css/animate.min.css'
import './assets/css/custom.css'

import './assets/js/bootstrap.min.js' 
import './assets/js/all.min.js'


import VueRouter from "vue-router";
import { Routes } from "./Routes/Routes.js";

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes:Routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
