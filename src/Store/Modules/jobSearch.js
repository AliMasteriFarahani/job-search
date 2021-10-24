import axios from "axios";

const state = {
    jobs:{},
    allPages:null,
    totalJobs:null,
    pageId:1,
    whatSearch:[]
};
const getters = {
    getJobs(){
        return state.jobs;
    },
    getAllPages(){
        return state.allPages;
    },
    getTotalJobs(){
        return state.totalJobs;
    },
    getPageId(){
        return state.pageId;
    },
    getWhatSearch(){
        return state.whatSearch;
    }
};

const mutations = {
    setJobs(state,jobs){
        state.jobs = jobs;
    },
    setAllPages(state,num){
        state.allPages = num;
    },
    setTotalJobs(state,jobs){
        state.totalJobs = jobs;
    },
    setPageId(state,id){
        state.pageId = id;
    },
    setWhatSearch(state,searches){
        state.whatSearch = searches;
    }
};
const actions = {
    // getJobsFromServer({commit},data){
    //     axios.get(`api/jobs/${data.employeeId}/${data.pageId}`)
    //     .then(response=>{
    //         commit('setJobs',response.data.result)
    //         commit('setAllPages',response.data.allPages)
    //     })
    // },
    getSearchJobsFromServer({commit},data){
    //  let info={id:1,name:'ali'}
     // let params = new URLSearchParams();
     // params.append('name','Ali')
     console.log('sent data',data);
        axios.post(`api/getSearchJobs/${data.employeeId}/${data.pageId}`,data.filters)
        .then(response=>{
            commit('setJobs',response.data.result);
            commit('setAllPages',response.data.allPages);
            commit('setTotalJobs',response.data.totalJobs);
            commit('setPageId',response.data.pageId);
           console.log(response);
            commit('setWhatSearch',response.data.whatSearch);
        })
    },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
