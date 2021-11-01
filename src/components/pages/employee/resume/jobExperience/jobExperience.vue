<template>
        <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">سوابق شغلی</span>
            </div>
            <div class="col-12">
              <!-- modal -->
                <add-edit-modal></add-edit-modal>
              <!-- modal end -->
            </div>
            <!--  -->
            <div class="col-12">
              <div class="row ps-4">
                <div class="col-12">
                  <div class="row mt-3 me-2 border-bm-c">
                    <div class="col">
                      <p class="font-bd-is">
                        برنامه نویس وب
                      </p>
                      <p>
                        <span class="font-1 me-3">شرکت داده گستر عصر جدید</span>
                        <span dir="ltr" class="font-1 font-num-is"
                          >از 1380 تا 1400</span
                        >
                      </p>
                    </div>
                    <div class="col-12 col-md-2">
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#job-experience"
                        class="float-end font-102 cursor-pointer text-underline font-md-is"
                      >
                        <i class="fa-solid fa-trash-can color--danger"></i>
                      </span>
                      <span
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
                <div class="col-12 py-2">
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#job-experience"
                    class="float-end font-90 cursor-pointer me-3 text-underline font-md-is"
                  >
                    <i
                      class="fa-solid font-2 color--success fa-circle-plus"
                    ></i>
                  </span>
                  <!-- modal -->

                  <!-- modal end -->
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
export default {
  components:{
    addEditModal
  }

}
</script>

<style>

</style>