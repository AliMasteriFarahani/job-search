import axios from "axios";

const state = {
    aboutMe: {},
};
const getters = {
    getAboutMe() {
        return state.aboutMe;
      },

};

const mutations = {
    setAboutMe(state, text) {
        state.aboutMe = text;
      },
};

const actions = {
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
