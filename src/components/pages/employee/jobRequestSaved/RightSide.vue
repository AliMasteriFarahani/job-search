<template>
          <div class="col-12 col-lg-9 col-lg-72">
          <div class="border-r bg-white">
            <div class="row px-lg-5 px-4 mt-4">
              <div class="col-12">
                <span :class="['font-80 job-sa me-3 d-inline-block',{'active' : this.$route.path === '/job/requests'}]">
                  <router-link :to="{name:'Requests'}">درخواست های من</router-link>
                </span>
                <span :class="['font-80 job-sa me-3 d-inline-block',{'active' : this.$route.path === '/job/saved'}]">
                  <router-link :to="{name:'Saved'}">ذخیره شده ها</router-link>
                </span>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div class="border-dashed"></div>
              </div>
            </div>
            <router-view></router-view>
            <!-- <div class="row px-lg-5 px-4">
              
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
          
           
            </div> -->
          </div>
        </div>
</template>

<script>
export default {
}
</script>

<style>

.job-sa{
    border-bottom: 2px solid transparent;
    padding: .2rem .2rem .4rem .5rem;
    margin-bottom: -.12rem;
    position: relative;
}
.job-sa a{
 color: #000 !important;
 font-family: "iransanse-md" !important;
}
.job-sa.active{
  border-bottom: 2px solid #4dbcf0 !important;
  color: #4dbcf0 !important;
}
.job-sa.active a{
 color: #4dbcf0 !important;
  font-family: "iransanse-md" !important;
}
</style>