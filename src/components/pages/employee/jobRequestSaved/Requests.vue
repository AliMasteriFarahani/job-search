<template>
              <div class="row px-lg-5 min-h-70vh align-content-start px-4">
              <!-- result of job search : -->
              <div v-for="n in 1" :key="n" class="col-12 mb-3">
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
                      <span class="me-3 mb-2 mb-md-0">
                        <i class="fa-solid fa-calendar-check align-middle font-80"></i>
                        <span class="ms-1">تاریخ ارسال :</span>
                        <span dir="ltr" class="ms-1 font-num-is">1400-01-01</span>
                      </span>
                      <span class="me-3">
                        <i class="fa-solid fa-circle-half-stroke align-middle font-80"></i>
                        <span class="ms-1">وضعیت :</span>
                        <span class="ms-1 d-inline-block text-success font-bd-is">تائید شده</span>
                      </span>
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