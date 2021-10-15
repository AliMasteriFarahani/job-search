//import axios from "axios";

import axios from "axios";

const state = {
savedJobs:[],

}
const getters={
getSavedJobs(){
    return state.savedJobs;
}
}

const mutations = {
setSavedJobs(state,jobs){
    state.savedJobs = jobs;
}
}

const actions={
getSavedJobsFromServer({commit},employeeId){
axios.get(`employee/getSavedJobs/${employeeId}`).then(response=>{
    commit('setSavedJobs',response.data)
})
}
}

export default{
state,
getters,
mutations,
actions
}