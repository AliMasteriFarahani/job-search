<template>
  <div class="row m-0 p-5 px-4">
    <app-notification :getStatus="getStatus"></app-notification>
    <div class="col">
      <div class="row rounded-3 border-dashed">
        <div class="col-12">
          <span class="section-title">درباره من</span>
        </div>
        <div class="col-12 pb-3">
          <!-- add : -->
          <template v-if="btnType == 'add'">
          <span
            data-bs-toggle="modal"
            data-bs-target="#about-me"
            class="
              float-end
              font-90
              cursor-pointer
              color-sky
              text-underline
              font-md-is
            "
          >
            <i class="fa-solid font-2 color--success fa-circle-plus"></i>
          </span>
          </template>
          <!-- edit -->
           <template v-if="btnType == 'edit'">
          <span
            @click="isEdit = { id: Math.random(), value: true }"
            data-bs-toggle="modal"
            data-bs-target="#about-me"
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
        <div class="col-12">
          <div               v-if="
                getAboutMe != '' &&
                getAboutMe != null &&
                getAboutMe != undefined 
              " class="row mt-2 ps-4">
            <div
              class="col-12 mb-4"
            >
              <p>
                {{ getAboutMe.aboutMe }}
              </p>
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
import appNotification from "@/components/pages/shared/notification.vue";
export default {
  components: {
    addEditModal,
    appNotification,
  },
  data() {
    return {
      aboutMe: "",
      employeeId: 1,
      isEdit: { id: 1, value: false },
      btnType: undefined,
    };
  },
  computed: {
    ...mapGetters(["getAboutMe", "getStatus",'getEmployeeId']),
  },
  methods: {
    ...mapActions(["getAboutMeFromServer"]),
  },
 async created() {
    await this.getAboutMeFromServer(this.getEmployeeId);
  },
  watch: {
    getAboutMe(v) {
      if (v == '') {
        this.btnType = "add";
      } else if ( Object.keys(v).length > 0) {
        this.btnType = "edit";
      }
    },
  },
};
</script>

<style>
</style>