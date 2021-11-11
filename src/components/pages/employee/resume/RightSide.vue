<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
      <!-- personal information : -->
      <app-personal-info></app-personal-info>
      <!-- about me : -->
      <app-about-me></app-about-me>
      <!-- skills : -->
      <app-skills></app-skills>
      <!-- Educational records :  -->
      <app-educational></app-educational>
      <!-- job experience : -->
      <app-job-experience></app-job-experience>
      <!-- langueges : -->
      <app-languages></app-languages>
    </div>
  </div>
</template>

<script>
import appPersonalInfo from "./personalInfo/personalInfo.vue";
import appAboutMe from "./aboutMe/aboutMe.vue";
import appSkills from "./skills/skills.vue";
import appEducational from "./education/educational.vue";
import appJobExperience from "./jobExperience/jobExperience.vue";
import appLanguages from "./languages/languages.vue";
import { customSelectMixin } from "@/Mixins/customSelectMixin";
export default {
  components: {
    appPersonalInfo,
    appAboutMe,
    appSkills,
    appEducational,
    appJobExperience,
    appLanguages,
  },
  mixins: [customSelectMixin],
};
</script>

<style>
@import url("../../../../assets/plugins/custom-select/css/custom-select.css");
.section-title {
  background: #eee;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  position: relative;
  top: -0.7rem;
}
/* width */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar {
  width: 0.4rem;
}

/* Track */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-track {
  background: #c9c9c9;
  border-radius: 0;
}

/* Handle */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-thumb {
  background: rgb(121, 120, 120);
  border-radius: 5px;
}

/* Handle on hover */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.modal-header {
  border-bottom: 1px dashed #dee2e6 !important;
}
.custom-option-item,
.custom-option-selected {
  font-family: "iransanse-num" !important;
}

.skill,
.skill-level {
  padding: 0.5rem 1rem;
  text-align: center;
  display: inline-block;
  font-family: "iransanse-bd";
}
.skill {
  background-color: #fcc45c;
  border-radius: 0 0.5rem 0.5rem 0;
  border-left: 1px solid #fff;
  position: relative;
}
.skill-level {
  background-color: #74d4f4;
  border-radius: 0.5rem 0 0 0.5rem;
  border-right: 1px solid #fff;
}
.login-register-active-btn {
  color: #fff !important;
  background-color: #1e6fcf !important;
  font-family: "iransanse-md" !important;
}
.circle-middle {
  display: inline-block;
  background: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -0.55rem;
  transform: translate(0, -50%);
}
</style>
