import axios from "axios";

//import Vue from 'vue'
const state = {
  companyLogoFolder: "http://job-search.test/public/images/companies-logo/",
  immediateJobs: {},
  newJobs: {},
  jobDetails: [],
  isJobSaved: '',
  isCurrentJobSaved:'',
  similarPositions: {},
};
const getters = {
  getNewJobs() {
    return state.newJobs;
  },
  getImmediateJobs() {
    return state.immediateJobs;
  },
  getCompanyLogoFolder() {
    return state.companyLogoFolder;
  },
  getJobDetails() {
    return state.jobDetails;
  },
  getIsJobSaved() {
    return state.isJobSaved;
  },
  getIsCurrentJobSaved(state){
      return state.isCurrentJobSaved
  },
  getSimilarPositions() {
    return state.similarPositions;
  },
};
const mutations = {
  setNewJobs(state, newJobs) {
    state.newJobs = newJobs;
  },
  setImmediateJobs(state, immediateJobs) {
    state.immediateJobs = immediateJobs;
  },
  setJobDetails(state, jobDetails) {
    state.jobDetails = jobDetails;
  },
  setIsJobSaved(state, isJobSaved) {
    state.isJobSaved = isJobSaved;
  },
  setIsCurrentJobSaved(state,isSaved){
      state.isCurrentJobSaved = isSaved;
  },
  setSimilarPositions(state, similarPositions) {
    state.similarPositions = similarPositions;
  },
};
const actions = {
  // for home page :
  getNewJobsFromServer(context) {
    axios.get("http://job-search.test/api/getNewJobs").then((response) => {
      context.commit("setNewJobs", response.data);
    });
  },
  getImmediateJobsFromServer(context) {
    axios
      .get("http://job-search.test/api/getImmediateJobs")
      .then((response) => {
        context.commit("setImmediateJobs", response.data);
      });
  },
  // for job-description page :
  getJobDetailsFromServer(context, data) {
    axios
      .get(`http://job-search.test/api/getJobDetails/${data.id}/${data.empId}`)
      .then((response) => {
        context.commit("setJobDetails", response.data[0]);
      });
  },
  // getNumOfCompanyJobPositions(){
  //     axios
  //     .get(`http://job-search.test/api/isJobSaved/${data.jobId}/${data.empId}`)
  //     .then((response) => {
  //         context.commit("setIsJobSaved", response.data["isJobSaved"]);
  //     });
  // },
  getIsJobSavedFromServer(context, data) {
    console.log('heyyy',data);
    axios
      .get(`http://job-search.test/api/isJobSaved/${data.jobId}/${data.empId}`)
      .then((response) => {
        console.log('reponse',response.data);
        if (data.isCurrent == 1) {
          context.commit("setIsCurrentJobSaved", response.data["isJobSaved"]);
        }else{

          context.commit("setIsJobSaved", response.data["isJobSaved"]);
        }
      });
  },
  changeJobSaveStatusInServer({ dispatch }, data) {
    if (data.isSaved == 1) { 
      // if job was saved (delete it):
      axios
        .delete(
          `http://job-search.test/api/removeJobFromSaved/${data.jobId}/${data.empId}`
        )
        .then((response) => {
          console.log("data.isJobSaved", response);
          if (response.status === 200) {
              dispatch("getIsJobSavedFromServer", data)
          }
        });
    } else if (data.isSaved == 0) {
      // if job wasn't saved (add it):
      axios
        .post(
          `http://job-search.test/api/addJobToSaved/${data.jobId}/${data.empId}`
        )
        .then((response) => {
          if (response.status === 200) {
            dispatch("getIsJobSavedFromServer", data);
          }
        });
    }
  },
  getSimilarPositionsFromServer({ commit },data) {
    axios
      .get(`http://job-search.test/api/getSimilarPositions/${data.jobId}/${data.empId}`)
      .then((response) => {
        commit("setSimilarPositions", response.data);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};