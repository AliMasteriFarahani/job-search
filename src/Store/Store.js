import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);
import Jobs from "./Modules/Jobs";
import emloyeeJob from "./Modules/employee/job";
import Categories from "./Modules/Categories";
import Location from "./Modules/Location";
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
        Categories,
        Location,
        emloyeeJob
    }
});