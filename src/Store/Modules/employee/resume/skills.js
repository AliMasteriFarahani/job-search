import axios from "axios";

const state = {
  skills:[],
};
const getters = {
  getSkills(){
    return state.skills;
  },

};

const mutations = {
  setSkills(state,skills){
    state.skills = skills;
  },
};

const actions = {
  getSkillsFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios.get(`employee/getSkills/${employeeId}`).then((response) => {
        commit("setSkills", response.data);
        resolve();
      });
    });
  },
  sendSkillsToServer({ commit }, data) {
    return new Promise((resolve) => {
      axios
        .patch(`employee/saveSkills/${data.employeeId}`, {
          skills: data.skills,
        })
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  updateSkillsInServer({ commit }, data) {
    return new Promise((resolve) => {
      axios
        .patch(`employee/updateSkills/${data.employeeId}`, {
          skills: data.skills,
        })
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
