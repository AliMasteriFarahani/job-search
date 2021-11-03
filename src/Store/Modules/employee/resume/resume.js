import personalInfo from "./personalInfo";
import aboutMe from "./aboutMe";
import skills from "./skills";
import education from "./education";
import jobExperience from "./jobExperience";
import languageSkills from "./languageSkills";
const state = {
  status: "",
};
const getters = {
  getStatus() {
    return state.status;
  },
};

const mutations = {
  setStatus(state, status) {
    state.status = status;
  },
};

const actions = {

};
const modules={
personalInfo,
aboutMe,
skills,
education,
jobExperience,
languageSkills
}
export default {
  state,
  getters,
  mutations,
  actions,
  modules
};
