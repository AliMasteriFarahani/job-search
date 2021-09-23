<template>
          <div class="col-12 col-lg-9 col-lg-72">
          <div class="border-r bg-white">
            <div class="row filters my-3 px-md-4 ">
              <div class="col-12 col-md-9 ps-4 ps-md-2 order-1 order-md-0">
                <span class="font-85"
                  >نتایج جست و جو :
                  <span class="ms-2 font-1 me-1 font-num-bd-is">23</span> مورد
                  یافت شد</span
                >
                <span class="vertical-line mx-3 d-none d-md-inline"></span>
                <span
                  @click="removeAllFilter()"
                  class="font-80 text-danger cursor-pointer d-block d-md-inline mt-2 mt-md-0"
                  >حذف فیلتر ها</span
                >
              </div>
              <div
                class="pe-4 col-6 col-md-3 mb-3 mb-lg-0 order-first order-md-1 offset-6  offset-md-0  position-relative"
              >
                <div
                  class="custom-select"
                  title="جدیدترین"
                  data-search-box="false"
                >
                  <select>
                    <option value="0">جدیدترین</option>
                    <option value="1">بیشترین حقوق</option>
                  </select>
                </div>
              </div>
              <div
                ref="filterWrapper"
                class="col-12 mt-3 d-flex flex-wrap px-4 order-last"
              >
                <span
                  class="filter-done font-num-is me-2 mb-2  animate__animated"
                >
                  <input type="hidden" value="0" />
                  <span>رنامه نویسی وب</span>
                  <span
                    @click="removeFilter"
                    class="close-icon d-inline-flex align-middle cursor-pointer ms-1"
                  >
                    <i class="font-1 align-middle fa-solid fa-circle-xmark"></i>
                  </span>
                </span>

                <span class="filter-done me-2 mb-2">
                  <input type="hidden" value="0" />
                  <span>پاره وقت</span>
                  <span
                    @click="removeFilter"
                    class="close-icon d-inline-flex align-middle cursor-pointer ms-1"
                  >
                    <i class="font-1 align-middle fa-solid fa-circle-xmark"></i>
                  </span>
                </span>
                <span class="filter-done me-2 mb-2">
                  <input type="hidden" value="0" />
                  <span>تهران</span>
                  <span
                    @click="removeFilter"
                    class="close-icon d-inline-flex align-middle cursor-pointer ms-1"
                  >
                    <i class="font-1 align-middle fa-solid fa-circle-xmark"></i>
                  </span>
                </span>
                <span @click="removeFilter" class="filter-done me-2 mb-2">
                  <input type="hidden" value="0" />
                  <span>بیشتر از 10 میلیون</span>
                  <span
                    class="close-icon d-inline-flex align-middle cursor-pointer ms-1"
                  >
                    <i class="font-1 align-middle fa-solid fa-circle-xmark"></i>
                  </span>
                </span>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div class="border-dashed"></div>
              </div>
            </div>
            <div class="row px-lg-5 px-4">
              <!-- result of job search : -->
              <div v-for="n in 10" :key="n" class="col-12 mb-3">
                <div
                  class="float-start w-100 job-adv position-relative  similar-job d-flex p-2"
                >
                  <span class="job-logo-palce flex-none align-self-center">
                    <img
                      src="/images/hex-lab-5.png"
                      class="img-fluid figure-img"
                      alt=""
                    />
                  </span>
                  <span class="float-start ms-3">
                    <a href="">
                      <h3 class="font-90 mt-1 d-inline">
                        استخدام کارشناس بازاریابی
                      </h3>
                    </a>
                    <span
                      class="text-dark font-73 d-block d-md-inline font-num-is"
                      >( 3 روز پیش )</span
                    >
                    <div
                      class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap"
                    >
                      <span class="me-3 mb-2 mb-md-0">
                        <i class="fa-solid fa-building font-80"></i>
                        <span class="ms-1">شرکت داده پرداز</span>
                      </span>
                      <span class="me-3 mb-2 mb-md-0">
                        <i class="fa-solid fa-location-dot font-80"></i>
                        <span class="ms-1">تهران</span>
                      </span>
                      <span class="me-3">
                        <i class="fa-solid fa-money-check  align-middle font-80"></i>
                        <span class="ms-1">حقوق</span>
                        <span class="ms-1 font-num-is">(7000000 تومان)</span>
                      </span>
                      <span class="position-absolute similar-bookmark">
                        <i class="fa-regular fa-bookmark font-105"></i>
                      </span>
                      <button
                        class="btn btn-success btn-similar-position bg-green border-radius-05 px-3 py-2 shadow-c border-0 d-none d-lg-block font-80 text-white"
                      >
                        ارسال رزومه
                      </button>
                    </div>
                  </span>
                </div>
              </div>
              <!-- end of result of job search  -->
           
            </div>
          </div>
        </div>
</template>

<script>
export default {
    methods: {
    // remove filter from filters in search
    removeFilter(event) {
      event.target.closest(".filter-done").remove();
    },
    // remove all filter from search
    removeAllFilter() {
      this.$refs.filterWrapper
        .querySelectorAll(".filter-done")
        .forEach((element) => {
          element.remove();
        });
    }
  }, // method end
}
</script>

<style>
.filter-done{
  font-size: .8rem;
  background-color: #efb102;
  padding: .3rem .5rem .3rem .5rem;
  border-radius: .5rem;
}
.filter-done .icon{
transition: all 300ms;
}
.filter-done .close-icon:hover{
color: #f00 !important;
}
.filters .custom-option-selected{
  height: 2rem !important;
}

</style>