import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);
import Jobs from "./Modules/Jobs";
import jobSearch from "./Modules/jobSearch";
import emloyeeJob from "./Modules/employee/job";
import Categories from "./Modules/Categories";
import Resume from "./Modules/employee/resume/resume";
import searchOptions from "./Modules/searchOptions";
export const store = new Vuex.Store({
    state: {
    
    },
    getters: {


    },
    mutations: {

    },
    actions: {

    },
    modules: {
        Jobs,
        jobSearch,
        Categories,
        Resume,
        emloyeeJob,
        searchOptions
    }
});