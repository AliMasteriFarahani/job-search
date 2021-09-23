<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
      <div class="row">
        <div class="col-12">
          <div class="bg-warning p-3 bg-c1 float-start w-100">
            <h3 class="m-0 float-start font-1">فرصت های شغلی امروز</h3>
            <span class="float-end font-80 fw-bold">1400-11-11</span>
          </div>
        </div>
      </div>
      <div class="row my-3 px-4 justify-content-evenly">
        <!-- job advertisment right : -->
          <div class="col-12 col-lg-6 mb-3" v-for="n in 14" :key="n">
          <router-link to="/job-descriptions/1">
            <div class="float-start w-100 job-adv d-flex p-2">
              <span class="job-logo-palce align-self-center">
                <img
                  src="/images/hex-lab-5.png"
                  class="img-fluid figure-img"
                  alt=""
                />
              </span>
              <span class="float-start ms-3">
                <h3 class="font-90 mt-1">استخدام کارشناس بازاریابی</h3>
                <div class="mt-4 color-73">
                  <span class="me-3">
                    <i class="fa-solid fa-building font-80"></i>
                    <span class="font-80 ms-1">شرکت داده پرداز</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-location-dot font-80"></i>
                    <span class="font-80 ms-1">تهران</span>
                  </span>
                </div>
              </span>
            </div>
          </router-link>
        </div>
        <!-- end of  job advertisment  -->


      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
