import axios from "axios";

const state = {
  personalInfo: {},
  personalInfoById: "",
  aboutMe: {},
  skills:[],
  status: "",
};
const getters = {
  getPersonalInfo() {
    return state.personalInfo;
  },
  getPersonalInfoById() {
    return state.personalInfoById;
  },
  getStatus() {
    return state.status;
  },
  getAboutMe() {
    return state.aboutMe;
  },
  getSkills(){
    return state.skills;
  }
};

const mutations = {
  setPersonalInfo(state, personalInfo) {
    state.personalInfo = personalInfo;
  },
  setPersonalInfoById(state, personalInfo) {
    state.personalInfoById = personalInfo;
  },
  setStatus(state, status) {
    state.status = status;
  },
  setAboutMe(state, text) {
    state.aboutMe = text;
  },
  setSkills(state,skills){
    state.skills = skills;
  }
};

const actions = {
  getPersonalInfoFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios.get(`employee/getPersonalInfo/${employeeId}`).then((response) => {
        commit("setPersonalInfo", response.data);
        resolve();
      });
    });
  },
  getPersonalInfoByIdFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios
        .get(`employee/getPersonalInfoById/${employeeId}`)
        .then((response) => {
          commit("setPersonalInfoById", response.data);
          resolve();
        });
    });
  },
  sendPersonalInfoToserver({ commit }, data) {
    return new Promise((resolve) => {
      axios
        .patch(
          `employee/savePersonalInfo/${data.employeeId}`,
          data.personalInfo
        )
        .then(
          (response) => {
            if (response.status == 200) {
              commit("setStatus", response.data);
              resolve();
            }
          },
          (error) => {
            commit("setStatus", error.data);
            resolve();
          }
        );
    });
  },
  getAboutMeFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios.get(`employee/getAboutMe/${employeeId}`).then((response) => {
        commit("setAboutMe", response.data);
        resolve();
      });
    });
  },
  sendAboutMeToServer({ commit }, data) {
    return new Promise((resolve) => {
      axios
        .patch(`employee/saveAboutMe/${data.employeeId}`, {
          aboutMe: data.aboutMe,
        })
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  getSkillsFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios.get(`employee/getSkills/${employeeId}`).then((response) => {
        commit("setSkills", response.data);
        resolve();
      });
    });
  },
  sendSkillsToServer({ commit }, data) {
    console.log("data:", data);
    return new Promise((resolve) => {
      axios
        .patch(`employee/saveSkills/${data.employeeId}`, {
          skills: data.skills,
        })
        .then((response) => {
          commit("setStatus", response.data);
          console.log("res", response);
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
