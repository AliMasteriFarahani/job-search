<template>
  <div class="row m-0 p-5 px-4">
    <div class="col">
      <div class="row rounded-3 border-dashed">
        <div class="col-12">
          <span class="section-title">سوابق تحصیلی</span>
        </div>
        <div class="col-12">
          <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
          <!-- modal -->
          <add-edit-modal :isEdit="isEdit"></add-edit-modal>
          <delete-modal :eduId="eduId"></delete-modal>
          <!-- modal end -->
        </div>
        <!--  -->
        <div class="col-12">
          <div class="row ps-4">
            <!-- Object.keys(getAllEducations).length >  -->
            <div v-if="Object.keys(getAllEducations).length > 0" class="col-12">
              <div
                v-for="(edu, i) in getAllEducations"
                :key="i"
                class="row mb-1 mt-3 me-2 border-bm-c"
              >
                <div class="col">
                  <p class="font-bd-is">
                    {{ edu.grade }} - {{ edu.majorTitle }}
                  </p>
                  <p>
                    <span class="font-1 d-inline-block me-3">{{ edu.uniTitle }}</span>
                    <span class="font-1 d-inline-block font-num-is"
                      >از
                      {{ edu.startYear }} تا {{ edu.endYear=='now' ? 'اکنون': edu.endYear}}</span
                    >
                  </p>
                </div>
                <div class="col-12 col-md-2">
                  <span
                    @click="eduId = edu.id"
                    data-bs-toggle="modal"
                    data-bs-target="#remove-edu"
                    class="
                      float-end
                      font-102
                      cursor-pointer
                      text-underline
                      font-md-is
                    "
                  >
                    <i class="fa-solid fa-trash-can color--danger"></i>
                  </span>
                  <span
                    @click="
                      isEdit = { uniq: Math.random(), id: edu.id, value: true }
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#educational-records"
                    class="
                      float-end
                      font-102
                      me-2
                      cursor-pointer
                      color-sky
                      text-underline
                      font-md-is
                    "
                  >
                    <i class="fa-solid me-1 color-sky fa-pen-to-square"></i>
                  </span>
                </div>
              </div>
            </div>
            <!-- add btn -->
            <template v-if="Object.keys(this.getAllEducations).length == 0">
              <div :class="['col-12', 'pb-3']">
                <span
                  @click="
                    isEdit = { uniq: Math.random(), id: null, value: false }
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#educational-records"
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
            <template v-if="Object.keys(this.getAllEducations).length > 0">
              <div :class="['col-12', 'pt-1 pb-1']">
                <span
                  @click="
                    isEdit = { uniq: Math.random(), id: null, value: false }
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#educational-records"
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
  components: { addEditModal, deleteModal },
  data() {
    return {
      employeeId: 1,
      isEdit: { uniq: Math.random(), id: null, value: false },
      eduId: null,
    };
  },
  computed: {
    ...mapGetters(["getAllEducations", "getStatus",'getEmployeeId']),
  },
  methods: {
    ...mapActions(["getAllEducationsFromServer"]),
  },
  created() {
    this.getAllEducationsFromServer(this.getEmployeeId)
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
};
</script>

<style>
</style>