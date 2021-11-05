<template>
  <div
    class="modal z-index-lv0 fade"
    id="personal-informations"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="personal-informations-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5
            class="modal-title font-1 font-md-is"
            id="personal-informations-label"
          >
            اطلاعات فردی
          </h5>
          <button
            type="button"
            class="btn-close remove-outline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <form action="" autocomplete="off">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="name"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >نام :</label
                  >
                  <input
                    v-model="$v.personalInfo.name.$model"
                    type="text"
                    id="name"
                    name="name"
                    class="form-control input-textbox"
                    placeholder="نام خود را وارد کنید"
                  />

                  <span
                    class="invalid-feedback"
                    v-if="
                      (!$v.personalInfo.name.required &&
                        $v.personalInfo.name.$dirty) ||
                      (hasError && !$v.personalInfo.name.$dirty)
                    "
                    >فیلد نام الزامی است
                  </span>
                  <span
                    class="invalid-feedback"
                    v-if="
                      !$v.personalInfo.name.persianText &&
                      $v.personalInfo.name.$dirty
                    "
                    >نام باید فارسی باشد
                  </span>
                  <span
                    class="invalid-feedback"
                    v-if="
                      !$v.personalInfo.name.minLength &&
                      $v.personalInfo.name.persianText &&
                      $v.personalInfo.name.$dirty
                    "
                    >طول نام کمتر از حد مجاز است
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="family"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >نام خانوادگی :</label
                  >
                  <input
                    v-model="$v.personalInfo.family.$model"
                    type="text"
                    id="family"
                    name="family"
                    class="form-control input-textbox"
                    placeholder="نام خانوادگی خود را وارد کنید"
                  />
                  <span
                    class="invalid-feedback"
                    v-if="
                      (!$v.personalInfo.family.required &&
                        $v.personalInfo.family.$dirty) ||
                      (hasError && !$v.personalInfo.family.$dirty)
                    "
                    >فیلد نام خانوادگی الزامی است
                  </span>
                  <span
                    class="invalid-feedback"
                    v-if="
                      !$v.personalInfo.family.persianText &&
                      $v.personalInfo.family.$dirty
                    "
                    >نام باید فارسی باشد
                  </span>
                  <span
                    class="invalid-feedback"
                    v-if="
                      !$v.personalInfo.family.minLength &&
                      $v.personalInfo.family.persianText &&
                      $v.personalInfo.family.$dirty
                    "
                    >طول نام کمتر از حد مجاز است
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="family"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >تاریخ تولد :</label
                  >
                  <input
                    v-model="$v.personalInfo.birthdate.$model"
                    type="text"
                    id="family"
                    name="family"
                    class="form-control input-textbox font-num-is"
                    placeholder="1373-11-02"
                  />
                  <span
                    v-if="
                      (!$v.personalInfo.birthdate.required &&
                        $v.personalInfo.birthdate.$dirty) ||
                      (hasError && !$v.personalInfo.birthdate.$dirty)
                    "
                    class="invalid-feedback"
                    >فیلد تاریخ تولد الزامی است
                  </span>
                  <span
                    v-if="!$v.personalInfo.birthdate.dashedDate"
                    class="invalid-feedback"
                    >فرمت تاریخ تولد صحیح نیست
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="mobile"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >شماره موبایل :</label
                  >
                  <input
                    v-model="$v.personalInfo.mobile.$model"
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="09xxxxxxxxx"
                    class="form-control font-num-is input-textbox"
                  />
                  <span
                    v-if="
                      (!$v.personalInfo.mobile.required &&
                        $v.personalInfo.mobile.$dirty) ||
                      (hasError && !$v.personalInfo.mobile.$dirty)
                    "
                    class="invalid-feedback"
                    >فیلد موبایل الزامی است
                  </span>
                  <span
                    v-if="
                      !$v.personalInfo.mobile.mobileFormat &&
                      $v.personalInfo.mobile.$dirty
                    "
                    class="invalid-feedback"
                  >
                    شماره موبایل صحیح نیست
                  </span>
                </div>
              </div>
              <div class="col-12 mb-4 col-md-6 is-valid">
                <label
                  for="city"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >استان :</label
                >
                <div
                  class="custom-select z-index-lv2"
                  title="انتخاب استان ..."
                  data-search-box="true"
                >
                  <select
                    v-model="$v.personalInfo.province.$model"
                    id="province"
                    name="province"
                  >
                    <option
                      v-for="(province, i) in getProvinces"
                      :key="i"
                      :value="province.id"
                    >
                      {{ province.name }}
                    </option>
                  </select>
                </div>
                <span
                  v-if="
                    (!$v.personalInfo.province.required &&
                      $v.personalInfo.province.$dirty) ||
                    (hasError && !$v.personalInfo.province.$dirty)
                  "
                  class="invalid-feedback"
                  >انتخاب استان الزامی است
                </span>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="address"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >آدرس محل سکونت :</label
                  >
                  <input
                    v-model="$v.personalInfo.address.$model"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="تهران - ..."
                    class="form-control input-textbox"
                  />
                  <span
                    v-if="
                      (!$v.personalInfo.address.required &&
                        $v.personalInfo.address.$dirty) ||
                      (hasError && !$v.personalInfo.address.$dirty)
                    "
                    class="invalid-feedback"
                  >
                    فیلد آدرس الزامی است
                  </span>
                  <span
                    v-if="
                      !$v.personalInfo.address.maxLength &&
                      $v.personalInfo.address.$dirty
                    "
                    class="invalid-feedback"
                  >
                    طول آدرس بیش از حد مجاز است
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="job-title"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >عنوان شغلی :</label
                  >
                  <input
                    v-model="$v.personalInfo.jobTitle.$model"
                    type="text"
                    id="job-title"
                    name="job-title"
                    placeholder="مثال : برنامه نویس وب"
                    class="form-control input-textbox"
                  />
                  <span
                    v-if="
                      (!$v.personalInfo.jobTitle.required &&
                        $v.personalInfo.jobTitle.$dirty) ||
                      (hasError && !$v.personalInfo.jobTitle.$dirty)
                    "
                    class="invalid-feedback"
                  >
                    فیلد آدرس الزامی است
                  </span>
                  <span
                    v-if="
                      !$v.personalInfo.jobTitle.maxLength &&
                      $v.personalInfo.jobTitle.$dirty
                    "
                    class="invalid-feedback"
                  >
                    طول عنوان شغلی بیش از حد مجاز است
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4 has-validation">
                  <label
                    for="email"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >آدرس ایمیل :</label
                  >
                  <input
                    @input="$v.personalInfo.emailAddress.$touch()"
                    v-model="personalInfo.emailAddress"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    class="form-control input-textbox"
                  />
                  <span
                    class="invalid-feedback d-block"
                    v-if="
                      !$v.personalInfo.emailAddress.email &&
                      $v.personalInfo.emailAddress.$dirty
                    "
                    >فرمت ایمیل صحیح نیست</span
                  >
                  <span
                    class="invalid-feedback"
                    v-if="
                      (!$v.personalInfo.emailAddress.required &&
                        $v.personalInfo.emailAddress.$dirty) ||
                      (hasError && !$v.personalInfo.emailAddress.$dirty)
                    "
                    >فیلد ایمیل الزامی است</span
                  >
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="salary"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >حقوق درخواستی :</label
                  >
                  <div
                    class="custom-select simple-scroll"
                    title="انتخاب کنید ..."
                    data-search-box="false"
                  >
                    <select
                      v-model="$v.personalInfo.salaryRequested.$model"
                      id="salaryRequested"
                      name="salaryRequested"
                    >
                      <option
                        v-for="(salary, i) in getSalary"
                        :key="i"
                        :value="salary.id"
                      >
                        {{
                          salary.id == 1 || salary.id == 2
                            ? salary.fee
                            : salary.fee | toCurrency()
                        }}
                      </option>
                    </select>
                  </div>
                  <span
                    v-if="
                      (!$v.personalInfo.salaryRequested.required &&
                        $v.personalInfo.salaryRequested.$dirty) ||
                      (hasError && !$v.personalInfo.salaryRequested.$dirty)
                    "
                    class="invalid-feedback"
                  >
                    فیلد حقوق درخواستی الزامی است
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label
                    for="salary"
                    class="
                      form-check-label
                      mb-2
                      font-90 font-md-is
                      cursor-pointer
                    "
                    >وضعیت خدمت سربازی :</label
                  >
                  <div
                    class="custom-select z-index-lv2"
                    title="انتخاب کنید ..."
                    data-search-box="false"
                  >
                    <select
                      v-model="$v.personalInfo.militaryStatus.$model"
                      id="militaryStatus"
                      name="militaryStatus"
                    >
                      <option
                        v-for="(military, i) in getMilitaryStatus"
                        :key="i"
                        :value="military.id"
                      >
                        {{ military.title }}
                      </option>
                    </select>
                  </div>
                  <span
                    v-if="
                      (!$v.personalInfo.militaryStatus.required &&
                        $v.personalInfo.militaryStatus.$dirty) ||
                      (hasError && !$v.personalInfo.militaryStatus.$dirty)
                    "
                    class="invalid-feedback"
                  >
                    فیلد وضعیت خدمت سربازی الزامی است
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label class="form-check-label mb-2 font-90 font-md-is me-2"
                    >وضعیت تاهل :</label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="$v.personalInfo.maritalStatus.$model"
                      class="form-check-input remove-outline cursor-pointer"
                      type="radio"
                      name="marital-status"
                      id="single"
                      checked
                      value="1"
                    />
                    <label class="form-check-label font-90" for="single"
                      >مجرد</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="$v.personalInfo.maritalStatus.$model"
                      class="form-check-input remove-outline cursor-pointer"
                      type="radio"
                      name="marital-status"
                      id="married"
                      value="2"
                    />
                    <label class="form-check-label font-90" for="married"
                      >متاهل</label
                    >
                  </div>
                  <span
                    v-if="
                      (!$v.personalInfo.maritalStatus.required &&
                        $v.personalInfo.maritalStatus.$dirty) ||
                      (hasError &&
                        !$v.personalInfo.maritalStatus.$dirty &&
                        $v.personalInfo.maritalStatus.$model == '')
                    "
                    class="invalid-feedback"
                  >
                    فیلد وضعیت تاهل الزامی است
                  </span>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-4">
                  <label class="form-check-label mb-2 font-90 font-md-is me-2"
                    >جنسیت :</label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="$v.personalInfo.gender.$model"
                      class="form-check-input remove-outline cursor-pointer"
                      type="radio"
                      name="gender"
                      id="man"
                      value="1"
                    />
                    <label class="form-check-label font-90" for="man"
                      >آقا</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="$v.personalInfo.gender.$model"
                      class="form-check-input remove-outline cursor-pointer"
                      type="radio"
                      name="gender"
                      id="women"
                      value="2"
                    />
                    <label class="form-check-label font-90" for="women"
                      >خانم</label
                    >
                  </div>
                  <span
                    v-if="
                      (!$v.personalInfo.gender.required &&
                        $v.personalInfo.gender.$dirty) ||
                      (hasError &&
                        !$v.personalInfo.gender.$dirty &&
                        $v.personalInfo.gender.$model == '')
                    "
                    class="invalid-feedback"
                  >
                    فیلد جنسیت الزامی است
                  </span>
                </div>
              </div>
              <div class="col-12">
                <button
                  :disabled="getStatus == 'pending'"
                  @click.prevent="sendPersonalInfo()"
                  class="
                    btn btn--success
                    float-end
                    border-radius-05
                    px-3
                    py-2
                    shadow-c
                    border-0
                    mt-1
                    font-90
                    text-white
                  "
                >
                  <template v-if="getStatus == 'pending'">
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    در حال ارسال
                  </template>
                  <template v-else> ذخیره </template>
                </button>
                <button
                  :disabled="getStatus == 'pending'"
                  type="button"
                  class="
                    btn btn--close
                    float-end
                    border-radius-05
                    px-3
                    py-2
                    shadow-c
                    border-0
                    mt-1
                    font-90
                    text-white
                    me-2
                  "
                  data-bs-dismiss="modal"
                >
                  انصراف
                </button>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { persianText,dashedDate,mobileFormat } from "@/Mixins/customValidators";
import { selectedManual } from "@/Mixins/selectedManualCs";
import { toCurrency } from "@/Mixins/toCurrency";
import {
  required,
  email,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
export default {
  mixins: [toCurrency, selectedManual,validationMixin],
  props: {
    getPersonalInfo: {
      Object,
    },
    isEdit: {
      Boolean,
    },
  },
  data() {
    return {
      employeeId: 1,
      hasError: false,
      personalInfo: {
        name: "",
        family: "",
        birthdate: "",
        jobTitle: "",
        mobile: "",
        address: "",
        province: "",
        maritalStatus: "1",
        gender: "1",
        militaryStatus: "",
        emailAddress: "",
        salaryRequested: "",
      },
    };
  },
  validations: {
    personalInfo: {
      name: {
        required,
        minLength: minLength(3),
        persianText
      },
      family: {
        required,
        minLength: minLength(3),
        persianText
      },
      birthdate: {
        required,
        dashedDate
      },
      jobTitle: {
        required,
        maxLength: maxLength(100),
      },
      mobile: {
        required,
        mobileFormat
      },
      address: {
        required,
        maxLength: maxLength(200),
      },
      province: {
        required,
      },
      maritalStatus: {
        required,
      },
      gender: {
        required,
      },
      militaryStatus: {
        required,
      },
      emailAddress: {
        required,
        email,
        maxLength: maxLength(100),
      },
      salaryRequested: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters([
      "getSalary",
      "getProvinces",
      "getMilitaryStatus",
      "getStatus",
    ]),
  },
  methods: {
    ...mapActions([
      "getSalaryFromServer",
      "getProvincesFromServer",
      "getMilitaryStatusFromServer",
      "sendPersonalInfoToserver",
      "getPersonalInfoFromServer",
    ]),
    sendPersonalInfo() {
      if (this.$v.$invalid) {
        this.hasError = true;
      } else {
        this.hasError = false;
        this.$store.commit("setStatus", "pending");
        this.sendPersonalInfoToserver({
          employeeId: this.employeeId,
          personalInfo: this.personalInfo,
        }).then(() => {
          this.getPersonalInfoFromServer(this.employeeId);
        });
      }
    },

  },
  created() {
    if (Object.keys(this.getSalary).length == 0) {
      this.getSalaryFromServer();
    }
    if (Object.keys(this.getProvinces).length == 0) {
      this.getProvincesFromServer();
    }
    if (Object.keys(this.getMilitaryStatus).length == 0) {
      this.getMilitaryStatusFromServer();
    }
  },
  watch: {
    isEdit(v) {
      if (v.value == true) {
        this.$store
          .dispatch("getPersonalInfoByIdFromServer", this.employeeId)
          .then(() => {
            this.personalInfo = this.$store.getters.getPersonalInfoById;

            let ref = document.getElementById('personal-informations');
            this.selectedManual(ref,
              ["province", "militaryStatus", "salaryRequested"],
              this.personalInfo
            );

          }); // then
      }
    },
    getStatus(v) {
      if (v == "ok" || v == "failed") {
        let btnClose = document.querySelector(
          "button[data-bs-dismiss='modal']"
        );
        btnClose.click();
      }
    },

  },
};
</script>

<style>
.invalid-feedback {
  display: block;
  font-size: 0.75rem;
}
.modal,
body {
  padding-right: 0 !important;
}
</style>