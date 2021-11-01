<template>
        <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">درباره من</span>
            </div>
            <div class="col-12 pb-3">
              <!-- edit -->
              <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i
                  class="fa-solid me-1 font-1 align-middle fa-pen-to-square"
                ></i>
                <span class="font-bd-is">ویرایش</span>
              </span>
              
              <!-- add : -->
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
                  <p>
                    سلام ، من علی ماستری فراهانی هستم . برنامه نویسی رو از
                    دانشگاه شروع کردم . علاقه ی خیلی زیادی به یادگیری در حوزه
                    های مختلف دارم
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
export default {
components:{
  addEditModal
},
data(){
  return {
    aboutMe:''
  }
}
}
</script>

<style>

</style>