import axios from "axios";

const state = {
  personalInfo: {},
  personalInfoById: "",
  aboutMe: {},
  skills:[],
  allEducations:[],
  education:[],
  allJobExperience:[],
  jobExperience:[],
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
  },
  getAllEducations(){
    return state.allEducations;
  },
  getEducation(){
    return state.education;
  },
  getAllJobExperience(){
    return state.allJobExperience;
  },
  getJobExperience(){
    return state.jobExperience
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
  },
  setAllEducations(state,edu){
      state.allEducations = edu;
  },
  setEducation(state,edu){
    state.education = edu;
  },
  setAllJobExperience(state,jobExp){
    state.allJobExperience = jobExp;
  },
  setJobExperience(state,job){
    state.jobExperience = job;
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
      console.log(data,'dataaa');
      axios.get(`employee/getEducation/${data.employeeId}/${data.id}`).then((response) => {
        console.log('ll',response);
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
          console.log("res", response);
          resolve();
        });
    });
  },
  removeEducationFromServer({commit},id){
    return new Promise((resolve)=>{
      axios.delete(`employee/removeEducationResume/${id}`).then(response=>{
        console.log(response,'deleted');
        commit('setStatus',response.data)
        resolve()
      })
    })
  },
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
        console.log(response,'js one');
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
          console.log(response,'js');
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  updateJobExperienceInServer({ commit }, data){
    return new Promise((resolve) => {
      console.log(data,'dararara');
      axios
        .patch(`employee/updateJobExperience/${data.employeeId}/${data.id}`,data.jobExperience)
        .then((response) => {
          commit("setStatus", response.data);
          console.log("res", response);
          resolve();
        });
    });
  },
  removeJobExperienceFromServer({commit},id){
    return new Promise((resolve)=>{
      axios.delete(`employee/removeJobExperience/${id}`).then(response=>{
        console.log(response,'deleted');
        commit('setStatus',response.data)
        resolve()
      })
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
