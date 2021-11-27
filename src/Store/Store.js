import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import Jobs from "./Modules/Jobs";
import jobSearch from "./Modules/jobSearch";
import emloyeeJob from "./Modules/employee/job";
import Categories from "./Modules/Categories";
import Resume from "./Modules/employee/resume/resume";
import searchOptions from "./Modules/searchOptions";
import account from "./Modules/employee/account";
export const store = new Vuex.Store({
  state: {
    route:null
  },
  getters: {
    getRoute(state){
      return state.route;
    }
  },
  mutations: {
    setRoute(state,route){
      state.route = route;
    }
  },
  actions: {},
  modules: {
    Jobs,
    jobSearch,
    Categories,
    Resume,
    emloyeeJob,
    searchOptions,
    account
  },
});
