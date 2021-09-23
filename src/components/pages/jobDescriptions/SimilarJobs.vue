<template>
              <div class="row mt-5">
                <div class="col-12 col-lg-72">
                    <div class="border-r bg-white">
                        <div class="row pt-4 pb-3 px-lg-5 px-4">
                            <div class="col-12">
                                <div class="row ">
                                    <div class="col-12">
                                        <h3 class="font-102">آگهی های مشابه </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row pt-4">
                                    <!-- job similar item : -->
                                    <div class="col-12 mb-3" v-for="n in 4" :key="n">
                                            <div
                                                class="float-start w-100 job-adv position-relative  similar-job d-flex p-2">
                                                <span class="job-logo-palce flex-none align-self-center">
                                                    <img src="/images/aven.png" class="img-fluid figure-img"
                                                        alt="">
                                                </span>
                                                <span class="float-start ms-3">
                                                    <router-link to="/"><h3 class="font-90 mt-1 d-inline"> استخدام کارشناس بازاریابی</h3></router-link>
                                                    <span class="text-dark font-73 d-block d-md-inline font-num-is">( 3 روز پیش )</span>
                                                    <div class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap">
                                                        <span class="me-3 mb-2 mb-md-0">
                                                            <i class="fa-solid fa-building font-80"></i>
                                                            <span class="ms-1">شرکت داده پرداز</span>
                                                        </span>
                                                        <span class="me-3 mb-2 mb-md-0">
                                                            <i class="fa-solid fa-location-dot font-80"></i>
                                                            <span class="ms-1">تهران</span>
                                                        </span>
                                                        <span class="me-3">
                                                            <i class="fa-solid fa-money-check font-80"></i>
                                                            <span class="ms-1">حقوق</span>
                                                            <span class="ms-1 font-num-is">(7000000 تومان)</span>
                                                        </span>
                                                        <span class="position-absolute similar-bookmark">
                                                            <i class="fa-regular fa-bookmark font-105"></i>
                                                        </span>
                                                        <button
                                                        class="btn btn-success btn-similar-position bg-green border-radius-05 px-3 py-2 shadow-c border-0 d-none d-lg-block font-80 text-white">ارسال
                                                        رزومه</button>
                                                    </div>

                                                </span>
                                            </div>
                                       

                                    </div>
                                    <!-- end of  job similar item  -->

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>