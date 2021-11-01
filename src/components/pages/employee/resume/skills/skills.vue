<template>
  <div class="row m-0 p-5 px-4">
    <div class="col">
      <div class="row rounded-3 border-dashed">
        <div class="col-12">
          <span class="section-title">مهارت ها</span>
        </div>
        <div class="col-12 pb-3">
                      <template v-if="btnType == 'add'">
                        <span
                data-bs-toggle="modal"
                data-bs-target="#skills"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span>
            </template>
           <template v-if="btnType == 'edit'">
                       <span  @click="isEdit = { id: Math.random(), value: true }"
            data-bs-toggle="modal"
            data-bs-target="#skills"
            class="
              float-end
              font-90
              cursor-pointer
              color-sky
              text-underline
              font-md-is
            "
          >
            <i class="fa-solid me-1 font-1 align-middle fa-pen-to-square"></i>
            <span class="font-bd-is">ویرایش</span>
          </span>
           </template>

          <!-- modal -->
          <add-edit-modal :isEdit="isEdit"></add-edit-modal>
          <!-- modal end -->
        </div>
        <!--  -->
        <div v-if="Object.keys(getSkills).length > 0" class="col-12">
          <div class="row mt-2 ps-4">
            <div class="col-12 mb-4">
              <div
                v-for="(skill, i) in getSkills"
                :key="i"
                class="d-inline-flex mb-2 me-2"
              >
                <span class="skill font-90"
                  >{{ skill.skillTitle }}
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90">{{
                  skill.skillLevel
                }}</span>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import addEditModal from "./addEditModal.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    addEditModal,
  },
  data() {
    return {
      employeeId: 1,
      btnType:undefined,
      isEdit:{id:0,value:false}
    };
  },
  computed: {
    ...mapGetters(["getSkills"]),
  },
  methods: {
    ...mapActions(["getSkillsFromServer"]),
  },
  created() {
    this.getSkillsFromServer(this.employeeId);
  },
  watch: {
    getSkills(v) {
      if (v == "") {
        this.btnType = "add";
      } else if (Object.keys(v).length > 0) {
        this.btnType = "edit";
      }
    },
  },
};
</script>

<style>
</style>