import axios from "axios";

const state = {
  allLanguageSkills:[],
  languageSkill:[],
};
const getters = {
  getAllLanguageSkills(){
    return state.allLanguageSkills;
  },
  getLanguageSkill(){
    return state.languageSkill;
  }

};

const mutations = {
  setAllLanguageSkills(state,langs){
    state.allLanguageSkills = langs;
      },
      setLanguageSkill(state,lang){
        state.languageSkill = lang;
      }
};

const actions = {
  getAllLanguageSkillsFromServer({commit},employeeId){
    return new Promise((resolve)=>{
      axios.get(`employee/getAllLanguageSkills/${employeeId}`).then(response=>{
        commit('setAllLanguageSkills',response.data)
        resolve();
      })
    })
  },
  sendLanguageToServer({ commit }, data){
    return new Promise((resolve) => {
      axios
        .put(`employee/saveLanguageSkill/${data.employeeId}`,data.languageSkill)
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  getLanguageSkillFromServer({commit},data){
    return new Promise((resolve) => {
      axios.get(`employee/getLanguageSkill/${data.employeeId}/${data.id}`).then((response) => {
        commit("setLanguageSkill", response.data);
        resolve();
      });
    });
  },
  updateLanguageSkillInServer({commit},data){
    return new Promise((resolve) => {
      axios
        .patch(`employee/updateLanguageSkill/${data.employeeId}/${data.id}`,data.languageSkill)
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  removeLanguageSkillFromServer({commit},id){
    return new Promise((resolve)=>{
      axios.delete(`employee/removeLanguageSkill/${id}`).then(response=>{
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
