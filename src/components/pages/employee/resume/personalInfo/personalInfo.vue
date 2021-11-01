<template>
  <div class="row m-0 p-5 px-4">
    <app-notification :getStatus="getStatus"></app-notification>
    <div class="col">
      <div class="row rounded-3 border-dashed">
        <div class="col-12">
          <span class="section-title">اطلاعات فردی</span>
        </div>
        <div class="col-12 pb-3">
          <template v-if="btnType == 'add'">
            <span
              data-bs-toggle="modal"
              data-bs-target="#personal-informations"
              class="
                float-end
                font-90
                cursor-pointer
                color-sky
                text-underline
                font-md-is
              "
            >
              <i class="fa-solid font-2 color--success fa-circle-plus"></i>
            </span>
          </template>
          <template v-if="btnType=='edit'">
           
            <span  @click="isEdit={id:Math.random(),value:true}"
              data-bs-toggle="modal"
              data-bs-target="#personal-informations"
              class="
                float-end
                font-90
                cursor-pointer
                color-sky
                text-underline
                font-md-is
              "
            >
              <i class="fa-solid me-1 font-1 align-middle fa-pen-to-square"></i>
              <span class="font-bd-is">ویرایش</span>
            </span>
          </template>

          <!-- modal -->
          <app-add-edit-modal :isEdit="isEdit" :getPersonalInfo="getPersonalInfo"></app-add-edit-modal>
          <!-- modal end -->
        </div>
        <!--  -->
        <div class="col-12" v-if="Object.keys(getPersonalInfo).length != 0">
          <div class="row mt-2 ps-4">
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">نام :</div>
              <div class="mt-2">{{ getPersonalInfo.name }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">نام خانوادگی :</div>
              <div class="mt-2">{{ getPersonalInfo.family }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">تاریخ تولد :</div>
              <div class="mt-2 font-num-is">
                {{ getPersonalInfo.birthdate }}
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">شماره موبایل :</div>
              <div class="mt-2 font-num-is">{{ getPersonalInfo.mobile }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">استان :</div>
              <div class="mt-2">{{ getPersonalInfo.province }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">آدرس محل سکونت :</div>
              <div class="mt-2">{{ getPersonalInfo.address }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">وضعیت تاهل</div>
              <div class="mt-2">{{ getPersonalInfo.maritalStatus }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">جنسیت :</div>
              <div class="mt-2">{{ getPersonalInfo.gender }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">وضعیت خدمت سربازی :</div>
              <div class="mt-2">{{ getPersonalInfo.militaryStatus }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">آدرس ایمیل :</div>
              <div class="mt-2">{{ getPersonalInfo.emailAddress }}</div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="font-bd-is">حقوق درخواستی :</div>
              <div class="mt-2 font-num-is">
                                          {{
                            !Number.isInteger(Number(getPersonalInfo.salaryRequested))
                              ? getPersonalInfo.salaryRequested
                              : getPersonalInfo.salaryRequested | toCurrency()
                          }}
                                          {{
                            !Number.isInteger(Number(getPersonalInfo.salaryRequested))
                              ? ''
                              : 'تومان'
                          }}
                          
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import appAddEditModal from "./modalAddEdit.vue";
import appNotification from "@/components/pages/shared/notification.vue";
import { toCurrency } from "@/Mixins/tinyFunctions";
import { mapGetters, mapActions } from "vuex";
export default {
    components: {
    appAddEditModal,
    appNotification,
  },
  mixins:[toCurrency],
  data() {
    return {
      isEdit:{id:1,value:false},
      employeeId: 1,
      btnType:undefined,
    };
  },
  computed: {
    ...mapGetters(["getPersonalInfo", "getStatus"]),
  },
  methods: {
    ...mapActions(["getPersonalInfoFromServer"]),
  },
  created() {
    this.getPersonalInfoFromServer(this.employeeId);
  },
  watch:{
    getPersonalInfo(v){
      if (v=='') {
        this.btnType = 'add'
      }else if(Object.keys(v).length>0){
        this.btnType = 'edit'
      }
    }
  }
};
</script>

<style>
</style>