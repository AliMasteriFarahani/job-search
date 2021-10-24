import axios from "axios";

//import Vue from 'vue'
const state = {
    categories: {}
};
const getters = {
    getCategories() {
        return state.categories;
    },
};
const mutations = {
    setCategories(state, categories) {
        state.categories = categories;
    },
};
const actions = {
    getCategoriesFromServer(context) {
        axios.get('api/getCategories').then(response => {
                return response.data
            })
            .then((data) => {
                context.commit('setCategories', data)
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};