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
  deleteAuthCookie(){
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
    console.log("ppppaaa");
    axios
      .post("api/registerEmployee", data.registerInfo)
      .then((response) => {
        console.log(response,'ddd');
        if (response.status == 200) {
          commit("setStatus", response.data);
          console.log(response);
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
        console.log(response, "objectppppp");
        if (response.status == 200) {
          commit("setStatus", response.data.status);
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
          console.log(error.response, "ppp");
          commit("setLoginError", true);
        }
      });
  },
  async checkIsUserAuthenticated({commit}){
   await axios
    .get("api/isEmployeeAuthenticated")
    .then((response) => {
      console.log(response, "isAuth");
      if (response.status == 200 && response.data.status) {
        commit("setUsername", response.data.userInfo.username);
        commit("setEmployeeId", response.data.userInfo.id);
        commit("setUserAuthenticated", true);
      }
    }).catch((error) => {
      
        console.log(error, "ppp");
    });
  },
  signOutUser({commit}){
    axios.get('api/signOutUser').then(response=>{
      console.log(response);
      if (response.status !=401 && response.data.status) {
        commit("setUsername", '');
        commit("setEmployeeId", '');
        commit("setUserAuthenticated", false);
        commit("deleteAuthCookie");
        router.push("/");
      }
    })
  }
};
export default {
  state,
  getters,
  mutations,
  actions,
};
