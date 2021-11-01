import axios from "axios";

const state = {
  personalInfo:{},
  personalInfoById:'',
  aboutMe:'',
  status:'',
};
const getters = {
  getPersonalInfo(){
    return state.personalInfo;
  },
  getPersonalInfoById(){
    return state.personalInfoById;
  },
  getStatus(){
    return state.status
  },
  getAboutMe(){
    return state.aboutMe;
  }
};

const mutations = {
  setPersonalInfo(state,personalInfo){
    state.personalInfo = personalInfo
  },
  setPersonalInfoById(state,personalInfo){
    state.personalInfoById = personalInfo
  },
  setStatus(state,status){
    state.status = status;
  },
  setAboutMe(state,text){
    state.aboutMe = text
  }
};

const actions = {
  getPersonalInfoFromServer({commit},employeeId){
      return new Promise((resolve)=>{
        axios.get(`employee/getPersonalInfo/${employeeId}`).then(response=>{
          commit('setPersonalInfo',response.data);
          resolve();
        })
      })
  },
  getAboutMeFromServer({commit},employeeId){
      axios.get(`employee/getAboutMe/${employeeId}`).then(response=>{
        commit('setAboutMe',response.data)
      }) 
  },
   getPersonalInfoByIdFromServer({commit},employeeId){
    return new Promise((resolve)=>{
      axios.get(`employee/getPersonalInfoById/${employeeId}`).then(response=>{
          commit('setPersonalInfoById', response.data)
          resolve()
      })
    })
  },
  sendPersonalInfoToserver({commit},data){
return new Promise((resolve)=>{
  axios.patch(`employee/savePersonalInfo/${data.employeeId}`,data.personalInfo).then(response=>{
    console.log('sss',response);
    if (response.status == 200) {
      commit('setStatus',response.data);
      resolve()
    }
  },error=>{
    commit('setStatus',error.data);
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
