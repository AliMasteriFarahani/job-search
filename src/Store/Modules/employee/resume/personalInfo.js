import axios from "axios";

const state = {
  personalInfo: {},
  personalInfoById: "",
};
const getters = {
  getPersonalInfo() {
    return state.personalInfo;
  },
  getPersonalInfoById() {
    return state.personalInfoById;
  },
};

const mutations = {
  setPersonalInfo(state, personalInfo) {
    state.personalInfo = personalInfo;
  },
  setPersonalInfoById(state, personalInfo) {
    state.personalInfoById = personalInfo;
  },
};

const actions = {
  getPersonalInfoFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios.get(`employee/getPersonalInfo/${employeeId}`).then((response) => {
        commit("setPersonalInfo", response.data);
        console.log(response,'lloopp');
        resolve();
      }).catch((error) => {
        console.log(error.response, "ppp");
        if (error.response.status == 401) {
          console.log(error.response, "ppp");
        }
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

};

export default {
  state,
  getters,
  mutations,
  actions,
};
