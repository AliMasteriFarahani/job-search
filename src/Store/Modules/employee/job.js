//import axios from "axios";

import axios from "axios";

const state = {
  employeeSavedJobs: [],
  isJobSaved: "",
  isCurrentJobSaved: "",
  allPagesSaved:1,
  savedPageId:1
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
  getAllPagesSaved(){
    return state.allPagesSaved;
  },
  getSavedPageId(){
    return state.savedPageId;
  }
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
  setAllPagesSaved(state,pages){
    state.allPagesSaved = pages;
  },
  setSavedPageId(state,id){
    state.savedPageId = id;
  }
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
  getEmployeeSavedJobsFromServer({ commit }, data) {
    console.log('object');
    axios.get(`employee/getSavedJobs/${data.empId}/${data.pageId}`).then((response) => {
      console.log('ttttt',response);
      commit("setEmployeeSavedJobs", response.data.result);
      commit("setAllPagesSaved", response.data.allPages);
      commit("setSavedPageId", response.data.pageId);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
