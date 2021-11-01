<template>
        <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">مهارت ها</span>
            </div>
            <div class="col-12 pb-3">
              <span
                data-bs-toggle="modal"
                data-bs-target="#skills"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i
                  class="fa-solid me-1 font-1 align-middle fa-pen-to-square"
                ></i>
                <span class="font-bd-is">ویرایش</span>
              </span>
              <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
              <!-- modal -->
              <add-edit-modal></add-edit-modal>
              <!-- modal end -->
            </div>
            <!--  -->
            <div class="col-12">
              <div class="row mt-2 ps-4">
                <div class="col-12 mb-4">
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >مقدماتی</span
                    >
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >php
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >متوسط</span
                    >
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >پیشرفته</span
                    >
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >مقدماتی</span
                    >
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >javascrip mvvvvv
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >مقدماتی</span
                    >
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >متوسط</span
                    >
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >مقدماتی</span
                    >
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90"
                      >مقدماتی</span
                    >
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
export default {
  components:{
    addEditModal
  }

}
</script>

<style>

</style>