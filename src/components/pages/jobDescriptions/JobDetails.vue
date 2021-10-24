<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
      <div class="row">
        <div class="col-12">
          <div class="px-md-3 py-md-3 p-2 px-3 bg-c1 float-start w-100">
            <h3 class="m-0 mt-2 float-start font-xs-95 font-md-102">
              استخدام {{ getJobDetails.jobTitle }}
            </h3>
            <span
              class="
                float-end
                position-relative
                font-105
                save
                fw-bold
                cursor-pointer
              "
              @click="changeSaveStatus($route.params.id)"
              > 
              <span v-html="saveIcon()">

              </span>
              <div
                v-if="getIsCurrentJobSaved === -1 && job == getJobDetails.jobId"
                class="spinner-border spinner-save spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </span>
            {{ getIsCurrentJobSaved }}
          </div>
        </div>
      </div>
      <div class="row my-3 px-md-4">
        <div class="col-12">
          <div class="row ms-3 ms-md-2 vertical-dashed-line">
            <!-- moshakhasat forsat shoghli  -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">مشخصات فرصت شغلی</h3>
              </div>
              <div class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                  >
                    دسته بندی شغلی</span
                  >
                  <span
                    class="job-desc-item p-1 px-md-2 font-bd-is flex-grow-5"
                    >{{ getJobDetails.catTitle }}</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                    >نوع همکاری</span
                  >
                  <span
                    class="job-desc-item p-1 px-md-2 font-bd-is flex-grow-5"
                    >
                    {{ getJobDetails.contract_type }}
                    </span
                  >
                </div>

                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                    >موقعیت مکانی</span
                  >
                  <span class="job-desc-item p-1 px-md-2 font-bd-is flex-grow-5"
                    >{{ getJobDetails.provinceName }} -
                    {{ getJobDetails.cityName }}</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                    >تعداد افراد مورد نیاز</span
                  >
                  <span
                    class="
                      job-desc-item
                      p-1
                      px-md-2
                      font-bd-is
                      flex-grow-5
                      font-num-bd-is
                    "
                    >{{ getJobDetails.workforce_num }}</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                    >حقوق</span
                  >
                  <span
                    class="
                      job-desc-item
                      p-1
                      px-md-2
                      font-bd-is
                      flex-grow-5
                      font-num-bd-is
                    "
                    >{{ getJobDetails.salary }}</span
                  >
                </div>
              </div>
            </div>
            <!-- end of moshakhasat forsat shoghli  -->
            <!-- sharayete ehraze shoghl -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">شرایط احراز شغل</h3>
              </div>
              <div class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                  >
                    وضعیت نظام وظیفه</span
                  >
                  <span
                    class="job-desc-item p-1 px-md-2 font-bd-is flex-grow-5"
                    >{{ getJobDetails.military_status }}</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                    >سابقه کار</span
                  >
                  <span
                    class="job-desc-item p-1 px-md-2 font-bd-is flex-grow-5"
                    >{{ getJobDetails.work_experience }}</span
                  >
                </div>

                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                  >
                    مدرک تحصیلی</span
                  >
                  <span
                    class="job-desc-item p-1 px-md-2 font-bd-is flex-grow-5"
                    >{{ getJobDetails.degree_of_education }}</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                    >جنسیت
                  </span>
                  <span
                    class="job-desc-item p-1 px-md-2 font-bd-is flex-grow-5"
                    >{{ getJobDetails.gender }}</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="
                      job-desc-item
                      me-2
                      p-1
                      px-md-2
                      font-bd-is
                      flex-bases-40 flex-grow-0
                    "
                    >بازه سنی</span
                  >
                  <span
                    class="
                      job-desc-item
                      p-1
                      px-md-2
                      font-bd-is
                      flex-grow-5
                      font-num-bd-is
                    "
                    >{{ getJobDetails.age_range }}</span
                  >
                </div>
              </div>
            </div>
            <!-- end of sharayete ehraze shoghl -->
            <!-- needed skills  -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">مهارت های مورد نیاز</h3>
              </div>
              <div class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex flex-wrap">
                  <span
                    v-for="(skill, index) in getJobDetails.needed_skills"
                    :key="index"
                    class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is"
                  >
                    {{ skill }}</span
                  >
                  <!-- <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >javascript</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >bootstrap</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >jquery</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >sass</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >vuejs</span
                  > -->
                </div>
              </div>
            </div>
            <!-- end of needed skills -->
            <!-- explain job oppertunity  -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">شرح موقعیت شغلی</h3>
              </div>
              <div class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex flex-wrap font-bd-is">
                  <p>{{ getJobDetails.job_descriptions }}</p>
                  <!-- <ul>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                  </ul>
                  <p>
                    مهارت‌های عمومی : آشنایی کافی به زبان انگلیسی · روحیه کار
                    تیمی و یادگیری ابزارهای جدید · منظم و متعهد · مدیریت زمان و
                    در دسترس بودن علاقه‌مند به یادگیری مفاهیم جدید و حل مسائل
                    چالشی · علاقه‌مند به تولید کدهای تمیز، قابل توسعه و با
                    توضیحات کافی
                  </p> -->
                </div>
              </div>
            </div>
            <!-- end of explain job oppertunity -->
            <!-- introduce company :  -->
            <div class="col-12 bullet mb-3 mb-md-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">معرفی شرکت</h3>
              </div>
              <div class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex flex-wrap font-bd-is">
                  <p>{{ getJobDetails.company_intro }}</p>
                </div>
               
              </div>
            </div>
            <!-- end of introduce company -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    metaInfo() {
      return {
          title: this.getMeta,
      }
  },
  data() {
    return { 
         defaultClass: 'fa-regular',
         employeeId:1,
         job:null
    };
  },
  computed: {
    ...mapGetters(["getJobDetails", "getIsCurrentJobSaved"]),
    saveIcon(){
      return ()=>{
        if (this.job==this.getJobDetails.jobId) {
          this.getJobDetails.isSaved = this.getIsCurrentJobSaved;
        }
        return `<i class="fa-bookmark align-middle  ${this.saveClass} "></i>`;
      }
    },
    saveClass(){
      let className ;
      if (this.getJobDetails.isSaved == 1) {
        className = 'fa-solid';
      }else if(this.getJobDetails.isSaved == 0){
        className = 'fa-regular';
      }else{
        className = this.defaultClass
      }
      return className;
    },
    getMeta(){
      return this.getJobDetails.jobTitle
    }
  },
  methods: {
      changeSaveStatus(jobId) {
        console.log(this.getJobDetails.isSaved);
        if (this.saveClass === 'fa-solid') {
          this.defaultClass = 'fa-solid'
        }else if(this.saveClass === 'fa-regular'){
          this.defaultClass = 'fa-regular'
        }
       this.$store.dispatch("changeJobSaveStatusInServer", { jobId, empId:this.employeeId ,isSaved:this.getJobDetails.isSaved,isCurrent:1});
       this.$store.commit("setIsCurrentJobSaved", -1);
       this.job = this.getJobDetails.jobId 
    },

  },

};
</script>

<style>
.spinner-save {
    position: absolute;
    left: 0.1rem;
    top: 0.5rem;
    border-color: #6bf9c5;
    border-left-color: transparent;
}
.spinner-border-sm {
   border-width: .14em;
}
</style>
