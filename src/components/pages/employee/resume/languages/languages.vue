<template>
        <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">زبان ها</span>
            </div>
            <div class="col-12">
              <!-- modal -->
                                      <add-edit-modal :isEdit="isEdit"></add-edit-modal>
          <delete-modal :langId="langId"></delete-modal>
              <!-- modal -->
   
              <!-- modal end -->
            </div>
            <!--  -->
            <div class="col-12">
              <div class="row ps-4">
                <div class="col-12">
                  <div v-for="(lang,i) in getAllLanguageSkills" :key="i" class="row mt-3 me-2 border-bm-c">
                    <div class="col">
                      <p class="font-bd-is">
                       {{lang.title}}
                      </p>
                      <p>
                        <span class="font-1 me-3">{{lang.level}}</span>
                      </p>
                    </div>
                    <div class="col-12 col-md-2">
                      <span
                       @click="langId = lang.id"
                        data-bs-toggle="modal"
                        data-bs-target="#remove-lang"
                        class="float-end font-102 cursor-pointer text-underline font-md-is"
                      >
                        <i class="fa-solid fa-trash-can color--danger"></i>
                      </span>
                      <span
                                         @click="
                      isEdit = { uniq: Math.random(), id: lang.id, value: true }
                    "
                        data-bs-toggle="modal"
                        data-bs-target="#language"
                        class="float-end font-102 me-2 cursor-pointer color-sky text-underline font-md-is"
                      >
                        <i
                          class="fa-solid me-1 color-sky  fa-pen-to-square"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
            <template v-if="Object.keys(this.getAllLanguageSkills).length == 0">
              <div :class="['col-12', 'pb-3']">
                <span
                  @click="
                    isEdit = { uniq: Math.random(), id: null, value: false }
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#language"
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
            <template v-if="Object.keys(this.getAllLanguageSkills).length > 0">
              <div :class="['col-12', 'pt-1 pb-1']">
                <span
                  @click="
                    isEdit = { uniq: Math.random(), id: null, value: false }
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#language"
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
      langId:null,
    }
  },
    computed: {
    ...mapGetters(["getAllLanguageSkills", "getStatus"]),
  },
    methods: {
    ...mapActions(["getAllLanguageSkillsFromServer"]),
  },
  created() {
    this.getAllLanguageSkillsFromServer(this.employeeId)
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