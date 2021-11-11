import axios from "axios";

const state = {
  allJobExperience:[],
  jobExperience:[],
};
const getters = {
  getAllJobExperience(){
    return state.allJobExperience;
  },
  getJobExperience(){
    return state.jobExperience
  },

};

const mutations = {
  setAllJobExperience(state,jobExp){
    state.allJobExperience = jobExp;
  },
  setJobExperience(state,job){
    state.jobExperience = job;
  },
};

const actions = {
  getAllJobExperienceFromServer({commit},employeeId){
    return new Promise((resolve)=>{
      axios.get(`employee/getAllJobExperience/${employeeId}`).then(response=>{
        commit('setAllJobExperience',response.data)
        resolve();
      })
    })
  },
  getJobExperienceFromServer({commit},data){
    return new Promise((resolve) => {
      axios.get(`employee/getJobExperience/${data.employeeId}/${data.id}`).then((response) => {
        commit("setJobExperience", response.data);
        resolve();
      });
    });
  },
  sendJobExperienceToServer({ commit }, data){
    return new Promise((resolve) => {
      axios
        .put(`employee/saveJobExperience/${data.employeeId}`,data.jobExperience)
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  updateJobExperienceInServer({ commit }, data){
    return new Promise((resolve) => {
      axios
        .patch(`employee/updateJobExperience/${data.employeeId}/${data.id}`,data.jobExperience)
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  removeJobExperienceFromServer({commit},id){
    return new Promise((resolve)=>{
      axios.delete(`employee/removeJobExperience/${id}`).then(response=>{
        commit('setStatus',response.data)
        resolve()
      })
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
