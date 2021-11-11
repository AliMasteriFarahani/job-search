import axios from "axios";

//import Vue from 'vue'
const state = {
  companyLogoFolder: "http://job-search.test/public/images/companies-logo/",
  immediateJobs: {},
  newJobs: {},
  jobDetails: [],
  similarPositions: {},
  companyJobPositions:{},
  companySummaryInfo:[],
  allPagesCompanyJob:null,
  companyJobPageId:1
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
  getSimilarPositions() {
    return state.similarPositions;
  },
  getCompanyJobPositions(){
    return state.companyJobPositions;
  },
  getCompanySummaryInfo(){
    return state.companySummaryInfo;
  },
  getAllPagesCompanyJob(){
    return state.allPagesCompanyJob;
  },
  getCompanyJobPageId(){
    return state.companyJobPageId
  }
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
  setSimilarPositions(state, similarPositions) {
    state.similarPositions = similarPositions;
  },
  setCompanyJobPositions(state,jobPositions){
    state.companyJobPositions = jobPositions;
  },
  setCompanySummaryInfo(state,companyInfo){
    state.companySummaryInfo = companyInfo;
  },
  setAllPagesCompanyJob(state,pages){
      state.allPagesCompanyJob = pages;
  },
  setCompanyJobPageId(state,pageId){
      state.companyJobPageId = pageId;
  }
};
const actions = {
  // for home page :
  getNewJobsFromServer(context) {
    axios.get("api/getNewJobs").then((response) => {
      context.commit("setNewJobs", response.data);
    });
  },
  getImmediateJobsFromServer(context) {
    axios
      .get("api/getImmediateJobs")
      .then((response) => {
        context.commit("setImmediateJobs", response.data);
      });
  },
  // for job-description page :
   getJobDetailsFromServer(context, data) {
    return new Promise((resolve)=>{
          axios
      .get(`api/getJobDetails/${data.id}/${data.empId}`)
      .then((response) => {
        context.commit("setJobDetails", response.data);
        resolve()
      });
    })

  },
  getSimilarPositionsFromServer({ commit },data) {
    axios
      .get(`api/getSimilarPositions/${data.jobId}/${data.empId}`)
      .then((response) => {
        commit("setSimilarPositions", response.data);
      });
  },
  getCompanyJobPositionsFromServer({commit},data){
    axios
      .get(`api/getCompanyJobPositions/${data.companyId}/${data.empId}/${data.pageId}`)
      .then((response) => {
        commit("setCompanyJobPositions", response.data.result);
        commit("setAllPagesCompanyJob", response.data.allPages);
        commit("setCompanyJobPageId", response.data.pageId);
      });
  },
  getCompanySummaryInfoFromServer({commit},data){
    axios
      .get(`api/getCompanySummaryInfo/${data.companyId}`)
      .then((response) => {
        commit("setCompanySummaryInfo", response.data[0]);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
