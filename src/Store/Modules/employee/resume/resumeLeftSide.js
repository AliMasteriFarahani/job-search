import axios from "axios";

const state = {
  avatarFileName: [],
  resumeAttach: [],
  employeeFolder: "http://job-search.test/public/employee",
  resumeLeftSideInfo: {},
};
const getters = {
  getAvatar() {
    return state.avatarFileName;
  },
  getResumeAttach() {
    return state.resumeAttach;
  },
  getEmployeeFolder() {
    return state.employeeFolder;
  },
  getResumeLeftSideInfo() {
    return state.resumeLeftSideInfo;
  },
};

const mutations = {
  setAvatar(state, file) {
    state.avatarFileName = file;
  },
  setResumeAttach(state, file) {
    state.resumeAttach = file;
  },
  setResumeLeftSideInfo(state, info) {
    state.resumeLeftSideInfo = info;
  },
};

const actions = {
  setEmployeeAvatarInServer({ commit }, data) {
    return new Promise((resolve) => {
      let formData = new FormData();
      formData.append("avatar", data.avatar);
      axios
        .post(`employee/saveEmployeeAvatar/${data.employeeId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  getEmployeeAvatarFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios.get(`employee/getEmployeeAvatar/${employeeId}`).then((response) => {
        commit("setAvatar", response.data);
        resolve();
      });
    });
  },
  removeAvatarFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios
        .delete(`employee/removeEmployeeAvatar/${employeeId}`)
        .then((response) => {
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  uploadResumeAttachToServer({ commit }, data) {
    console.log(data, "data");
    return new Promise((resolve) => {
      let formData = new FormData();
      formData.append("resumeAttach", data.resumeAttach);
      axios
        .post(
          `employee/saveEmployeeResumeAttach/${data.employeeId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response, "res");
          commit("setStatus", response.data);
          resolve();
        });
    });
  },
  getResumeAttachFileNameFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios
        .get(`employee/getEmployeeResumeAttach/${employeeId}`)
        .then((response) => {
          commit("setResumeAttach", response.data);
          resolve();
        });
    });
  },
  getResumeLeftSideInfoFromServer({ commit }, employeeId) {
    return new Promise((resolve) => {
      axios
        .get(`employee/getResumeLeftSideInfo/${employeeId}`)
        .then((response) => {
          console.log(response.data,'lll');
          commit("setResumeLeftSideInfo", response.data);
          resolve();
        });
    });
    //
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
