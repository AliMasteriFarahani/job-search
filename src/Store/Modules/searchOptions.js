import axios from "axios";

const state = {
  salary: {},
  workExperience: {},
  contract: {},
  provinces: {},
  cities: {},
  militaryStatus: {},
};
const getters = {
  getSalary() {
    return state.salary;
  },
  getWorkExperince() {
    return state.workExperience;
  },
  getContract() {
    return state.contract;
  },
  getProvinces() {
    return state.provinces;
  },
  getCities() {
    return state.cities;
  },
  getMilitaryStatus() {
    return state.militaryStatus;
  },
};
const mutations = {
  setSalary(state, salary) {
    state.salary = salary;
  },
  setWorkExperience(state, workExperience) {
    state.workExperience = workExperience;
  },
  setContract(state, contract) {
    state.contract = contract;
  },
  setProvinces(state, provinces) {
    state.provinces = provinces;
  },
  setCities(state, cities) {
    state.cities = cities;
  },
  setMilitaryStatus(state,status){
      state.militaryStatus = status;
  }

};
const actions = {
  getSalaryFromServer({ commit }) {
    axios.get("api/getSalary").then((response) => {
      commit("setSalary", response.data);
    });
  },
  getWorkExperienceFromServer({ commit }) {
    axios.get("api/getWorkExperience").then((response) => {
      commit("setWorkExperience", response.data);
    });
  },
  getContractFromServer({ commit }) {
    axios.get("api/getContract").then((response) => {
      commit("setContract", response.data);
    });
  },
  getProvincesFromServer(context) {
    axios.get("api/getProvinces").then((response) => {
      context.commit("setProvinces", response.data);
    });
  },
  getCitiesFromServer({ commit }, provinceId) {
    axios.get(`api/getCities/${provinceId}`).then((response) => {
      commit("setCities", response.data);
    });
  },
  getMilitaryStatusFromServer({ commit }) {
    axios.get(`api/getMilitaryStatus/`).then((response) => {
      commit("setMilitaryStatus", response.data);
    });
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
