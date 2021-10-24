import axios from "axios";

const state = {
    salary:{},
    workExperience:{},
    contract:{},
}
const getters={
    getSalary(){
        return state.salary;
    },
    getWorkExperince(){
        return state.workExperience;
    },
    getContract(){
        return state.contract;
    }
}
const mutations = {
    setSalary(state,salary){
        state.salary = salary;
    },
    setWorkExperience(state,workExperience){
        state.workExperience = workExperience;
    },
    setContract(state,contract){
        state.contract = contract;
    }
}
const actions = {
    getSalaryFromServer({commit}){
        axios.get('api/getSalary')
        .then(response=>{
            commit('setSalary',response.data);
        })
    },
    getWorkExperienceFromServer({commit}){
        axios.get('api/getWorkExperience')
        .then(response=>{
            commit('setWorkExperience',response.data);
        })
    },
    getContractFromServer({commit}){
        axios.get('api/getContract')
        .then(response=>{
            commit('setContract',response.data);
        })
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}