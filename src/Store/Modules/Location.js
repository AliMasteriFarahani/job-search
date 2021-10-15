import axios from "axios";

//import Vue from 'vue'
const state = {
    provinces: {},
    cities: {}
};
const getters = {
    getProvinces() {
        return state.provinces;
    },
    getCities() {
        return state.cities;
    },
};
const mutations = {
    setProvinces(state, provinces) {
        state.provinces = provinces;
    },
    setCities(state, cities) {
        state.cities = cities;
    },
};
const actions = {
    getProvincesFromServer(context) {
        axios.get('api/getProvinces').then((response) => {
            context.commit('setProvinces', response.data)
        })
    },
    getCitiesFromServer() {
        axios.get('api/getCities').then((response) => {
            console.log(response);
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};