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
    getCitiesFromServer({commit},provinceId) {
        axios.get(`api/getCities/${provinceId}`).then((response) => {
            console.log(response);
            commit('setCities',response.data);
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};