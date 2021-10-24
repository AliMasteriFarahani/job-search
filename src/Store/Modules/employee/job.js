//import axios from "axios";

import axios from "axios";

const state = {
  employeeSavedJobs: [],
  isJobSaved: "",
  isCurrentJobSaved: "",
 // allPages:1,
 // pageId:1
};
const getters = {
  getEmployeeSavedJobs() {
    return state.employeeSavedJobs;
  },
  getIsJobSaved() {
    return state.isJobSaved;
  },
  getIsCurrentJobSaved(state) {
    return state.isCurrentJobSaved;
  },
  // getAllPages(){
  //   return state.allPages;
  // },
  // getPageId(){
  //   return state.pageId;
  // }
};

const mutations = {
  setEmployeeSavedJobs(state, jobs) {
    state.employeeSavedJobs = jobs;
  },
  setIsJobSaved(state, isJobSaved) {
    state.isJobSaved = isJobSaved;
  },
  setIsCurrentJobSaved(state, isSaved) {
    state.isCurrentJobSaved = isSaved;
  },
  // setAllPages(state,pages){
  //   state.allPages = pages;
  // },
  // setPageId(state,id){
  //   state.pageId = id;
  // }
};

const actions = {
  getIsJobSavedFromServer(context, data) {
    axios.get(`api/isJobSaved/${data.jobId}/${data.empId}`).then((response) => {
      if (data.isCurrent == 1) {
        context.commit("setIsCurrentJobSaved", response.data["isJobSaved"]);
      } else {
        context.commit("setIsJobSaved", response.data["isJobSaved"]);
      }
    });
  },
  changeJobSaveStatusInServer({ dispatch }, data) {
    if (data.isSaved == 1) {
      // if job was saved (delete it):
      axios
        .delete(`api/removeJobFromSaved/${data.jobId}/${data.empId}`)
        .then((response) => {
          if (response.status === 200) {
            dispatch("getIsJobSavedFromServer", data);
          }
        });
    } else if (data.isSaved == 0) {
      // if job wasn't saved (add it):
      axios
        .post(`api/addJobToSaved/${data.jobId}/${data.empId}`)
        .then((response) => {
          if (response.status === 200) {
            dispatch("getIsJobSavedFromServer", data);
          }
        });
    }
  },
  getEmployeeSavedJobsFromServer({ commit }, employeeId) {
    console.log('object');
    axios.get(`employee/getSavedJobs/${employeeId}/1`).then((response) => {
      console.log('ttttt',response);
      commit("setEmployeeSavedJobs", response.data.result);
      commit("setAllPages", response.data.allPages);
      commit("setPageId", response.data.pageId);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
