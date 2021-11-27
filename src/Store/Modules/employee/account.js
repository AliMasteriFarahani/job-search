import axios from "axios";
import Vue from "vue";
import { router } from "../../../main";
const state = {
  registerStatus: "",
  username: "",
  employeeId: "",
  isUserAuthenticated: false,
  loginError: "",
};
const getters = {
  getloginError() {
    return state.loginError;
  },
  getIsUserAuthenticated() {
    return state.isUserAuthenticated;
  },
  getUsername() {
    return state.username;
  },
  getEmployeeId() {
    return state.employeeId;
  },
};
const mutations = {
  setRegisterStatus(state, st) {
    state.registerStatus = st;
  },
  setAuthCookie(state, info) {
    Vue.cookie.set("JSS_AUTH_TOKEN", info.token, { expires: 7 });
  },
  deleteAuthCookie() {
    Vue.cookie.delete("JSS_AUTH_TOKEN");
  },
  setUsername(state, username) {
    state.username = username;
  },
  setUserAuthenticated(state, isAuth) {
    state.isUserAuthenticated = isAuth;
  },
  setLoginError(state, msg) {
    state.loginError = msg;
  },
  setEmployeeId(state, id) {
    state.employeeId = id;
  },
};
const actions = {
  registerEmployeeInServer({ commit }, data) {
    axios
      .post("api/registerEmployee", data.registerInfo)
      .then((response) => {
        if (response.status == 200) {
          commit("setStatus", response.data);
        }
      })
      .then(() => {
        setTimeout(() => {
          router.push("/employee/login");
        }, 3000);
      });
  },
  loginEmployeeInServer({ commit }, loginEmployee) {
    axios
      .post("api/loginEmployee", loginEmployee)
      .then((response) => {
        if (response.status == 200) {
          commit("setStatus", "");
          commit("setAuthCookie", response.data.userInfo);
          commit("setUsername", response.data.userInfo.username);
          commit("setEmployeeId", response.data.userInfo.id);
          commit("setUserAuthenticated", true);
          commit("setLoginError", false);
          router.push("/");
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          commit("setStatus", null);
          commit("setLoginError", true);
        }
      });
  },
  async checkIsUserAuthenticated({ commit }) {
    await axios.get("api/isEmployeeAuthenticated").then((response) => {
      if (response.status == 200 && response.data.status) {
        commit("setUsername", response.data.userInfo.username);
        commit("setEmployeeId", response.data.userInfo.id);
        commit("setUserAuthenticated", true);
      }
    });
  },
  signOutUser({ commit, getters }) {
    axios.get("api/signOutUser").then(async (response) => {
      if (response.status != 401 && response.data.status) {
        if (getters.getRoute.name !== "Home") {
          await router.push("/");
        }
        commit("setUsername", "");
        commit("setEmployeeId", "");
        commit("setUserAuthenticated", false);
        commit("deleteAuthCookie");
      }
    });
  },
  changeEmployeePassword({ commit }, data) {
    axios
      .patch(`employee/changeEmployeePassword/${data.employeeId}`, data.pass)
      .then((response) => {
        if (response.status != 401 && response.status == 200) {
          commit("setStatus", "ok");
        }
      });
  },
  resetPasswordEmailRequestInServer({ commit }, email) {
    axios.post(`api/resetPasswordEmailRequest`, email).then((response) => {
      if (response.status != 401 && response.status == 200) {
        commit("setStatus", "ok");
      }
    });
  },
  async resetPasswordInServer({ commit }, data) {
      await axios
        .post(`api/resetPassword/${data.token}/${data.email}`, data.pass)
        .then((response) => {
          console.log(response, "reset password");
          if (response.status != 401 && response.status == 200) {
            commit("setStatus", response.data);
          }
    });
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
