<template>
        <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">سوابق شغلی</span>
            </div>
            <div class="col-12">
              <!-- modal -->
                          <add-edit-modal :isEdit="isEdit"></add-edit-modal>
          <delete-modal :jobExpId="jobExpId"></delete-modal>
              <!-- modal end -->
            </div>
            <!--  -->
            <div class="col-12">
              <div class="row ps-4">
                <div class="col-12" v-if="Object.keys(getAllJobExperience).length > 0">
                  <div v-for="(jobExp,i) in getAllJobExperience" :key="i" class="row mt-3 me-2 border-bm-c">
                    <div class="col">
                      <p class="font-bd-is d-inline-block">
                        {{jobExp.jobTitle}}
                      </p>
                      <p>
                        <span class="font-1 me-3">{{jobExp.orgTitle}}</span>
                        <span dir="ltr" class="font-1 d-inline-block font-num-is"
                          >از
                      {{ jobExp.startYear }} تا {{ jobExp.endYear=='now' ? 'اکنون': jobExp.endYear}}
                          
                          </span
                        >
                      </p>
                    </div>
                    <div class="col-12 col-md-2">
                      <span
                      @click="jobExpId = jobExp.id"
                        data-bs-toggle="modal"
                        data-bs-target="#remove-job-exp"
                        class="float-end font-102 cursor-pointer text-underline font-md-is"
                      >
                        <i class="fa-solid fa-trash-can color--danger"></i>
                      </span>
                      <span
                               @click="
                      isEdit = { uniq: Math.random(), id: jobExp.id, value: true }
                    "
                        data-bs-toggle="modal"
                        data-bs-target="#job-experience"
                        class="float-end font-102 me-2 cursor-pointer color-sky text-underline font-md-is"
                      >
                        <i
                          class="fa-solid me-1 color-sky  fa-pen-to-square"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
            <template v-if="Object.keys(this.getAllJobExperience).length == 0">
              <div :class="['col-12', 'pb-3']">
                <span
                  @click="
                    isEdit = { uniq: Math.random(), id: null, value: false }
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#job-experience"
                  class="
                    float-end
                    font-90
                    cursor-pointer
                    text-underline
                    font-md-is
                  "
                >
                  <i class="fa-solid font-2 color--success fa-circle-plus"></i>
                </span>
              </div>
            </template>
            <template v-if="Object.keys(this.getAllJobExperience).length > 0">
              <div :class="['col-12', 'pt-1 pb-1']">
                <span
                  @click="
                    isEdit = { uniq: Math.random(), id: null, value: false }
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#job-experience"
                  class="
                    float-end
                    font-90
                    cursor-pointer
                    me-3
                    text-underline
                    font-md-is
                  "
                >
                  <i class="fa-solid font-2 color--success fa-circle-plus"></i>
                </span>
              </div>
            </template>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
</template>

<script>
import addEditModal from "./addEditModal.vue";
import deleteModal from "./deleteModal.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components:{
    addEditModal,
    deleteModal
  },
  data(){
    return{
      employeeId: 1,
      isEdit: { uniq: Math.random(), id: null, value: false },
      jobExpId:null,
    }
  },
    computed: {
    ...mapGetters(["getAllJobExperience", "getStatus",'getEmployeeId']),
  },
  methods: {
    ...mapActions(["getAllJobExperienceFromServer"]),
  },
  async created() {
    await this.getAllJobExperienceFromServer(this.getEmployeeId)
  },
  watch: {
    getStatus(v) {
      if (v == "ok" || v == "failed" || v == "deleted") {
        document
          .querySelectorAll("button[data-bs-dismiss='modal']")
          .forEach((el) => {
            el.click();
          });
      }
    },
  },


}
</script>

<style>

</style>