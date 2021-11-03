import axios from "axios";

const state = {
  allEducations:[],
  education:[],
};
const getters = {
  getAllEducations(){
    return state.allEducations;
  },
  getEducation(){
    return state.education;
  },

};

const mutations = {
  setAllEducations(state,edu){
    state.allEducations = edu;
},
setEducation(state,edu){
  state.education = edu;
},
};

const actions = {
  getAllEducationsFromServer({commit},employeeId){
    return new Promise((resolve) => {
      axios.get(`employee/getAllEducations/${employeeId}`).then((response) => {
        commit("setAllEducations", response.data);
        resolve();
      });
    });
  },
  getEducationFromServer({commit},data){
    return new Promise((resolve) => {
      axios.get(`employee/getEducation/${data.employeeId}/${data.id}`).then((response) => {
        commit("setEducation", response.data);
        resolve();
      });
    });
  },
  sendEducationToServer({ commit }, data) {
    return new Promise((resolve) => {
      axios
        .put(`employee/saveEducation/${data.employeeId}`,data.education)
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  updateEducationInServer({ commit }, data){
    return new Promise((resolve) => {
      axios
        .patch(`employee/updateEducation/${data.employeeId}/${data.id}`,data.education)
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  removeEducationFromServer({commit},id){
    return new Promise((resolve)=>{
      axios.delete(`employee/removeEducationResume/${id}`).then(response=>{
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
