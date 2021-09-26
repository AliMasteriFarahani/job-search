<template>
              <div class="row min-h-70vh px-lg-5 px-4">
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
                        <i class="fa-solid fa-bookmark font-105"></i>
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
</template>

<script>
export default {

}
</script>

<style>

</style>