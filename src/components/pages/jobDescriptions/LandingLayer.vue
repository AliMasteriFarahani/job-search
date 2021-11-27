<template>
          <section class="row p-0 m-0 header-bg position-relative">
            <div class="col-12 align-self-end top-15 position-relative">
                <div class="row">
                    <div class="col-10 offset-1 col-md-8 offset-md-2 z-index-lv4">
                        <div class="float-start w-100 job-description-card py-lg-3 d-flex p-2">
                            <div class="row w-md-auto w-sm-100 align-self-center">
                                <div class="col-3">
                                    <span class="job-logo-palce align-self-center">
                                        <img :src="getCompanyLogoFolder+'/'+getJobDetails.logo" class="img-fluid figure-img" alt="">
                                    </span>
                                </div>
                            </div>
                            <div class="row ms-lg-2">
                                <div class="col-12 col-md-6">
                                    <span class="float-start ms-3">
                                        <span class="font-90 mt-1 d-none d-md-inline">نام شرکت : </span>
                                        <span class="font-90 mt-1"><strong>{{getJobDetails.companyName}}</strong></span>
                                    </span>
                                </div>
                                <div class="col-12 col-md-6">
                                    <span class="float-start ms-3">
                                        <span class="font-90 mt-1 d-none d-md-inline">آدرس سایت : </span>
                                        <span class="font-xs-80 font-bd-is font-sm-90 mt-1">{{getJobDetails.site_address}}</span>
                                    </span>
                                </div>
                                <div class="col-6 col-md-6">
                                    <span class="float-start ms-3">
                                        <span class="font-xs-80 font-sm-90 mt-1"> تاسیس : </span>
                                        <span class="font-xs-80 font-num-bd-is font-sm-90 mt-1">{{getJobDetails.date_of_establishment}}</span>

                                    </span>
                                </div>
                                <div class="col-6 col-md-6">
                                    <span class="float-start ms-0 ms-md-3">
                                        <span class="font-xs-80 font-sm-90 mt-1">تعداد پرسنل : </span>
                                        <span class="font-xs-80 font-num-bd-is font-sm-90 mt-1">{{getJobDetails.num_of_staff}}</span>
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
computed:{
     ...mapGetters(['getJobDetails','getCompanyLogoFolder']),
}
}
</script>

<style>

</style>