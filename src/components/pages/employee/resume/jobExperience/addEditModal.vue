<template>
  <div
    class="modal z-index-lv0 fade"
    id="job-experience"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="job-experience-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5 class="modal-title font-1 font-md-is" id="job-experience-label">
            سوابق شغلی
          </h5>
          <button
            type="button"
            class="btn-close remove-outline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
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
                  v-model="$v.jobExperience.jobTitle.$model"
                  type="text"
                  id="job-title"
                  name="job-title"
                  placeholder="مثال : برنامه نویس وب"
                  class="form-control input-textbox"
                />
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.jobExperience.jobTitle.required &&
                      $v.jobExperience.jobTitle.$dirty) ||
                    (hasError &&
                      !$v.jobExperience.jobTitle.$dirty &&
                      $v.jobExperience.jobTitle.$model == '')
                  "
                  >فیلد عنوان شغل الزامی است
                </span>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <label
                  for="uni-title"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >نام سازمان/شرکت :</label
                >
                <input
                  v-model="$v.jobExperience.orgTitle.$model"
                  type="text"
                  id="uni-title"
                  name="uni-title"
                  placeholder="مثال : شرکت داده گستر عصر جدید"
                  class="form-control input-textbox"
                />
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.jobExperience.orgTitle.required &&
                      $v.jobExperience.orgTitle.$dirty) ||
                    (hasError &&
                      !$v.jobExperience.orgTitle.$dirty &&
                      $v.jobExperience.orgTitle.$model == '')
                  "
                  >فیلد عنوان شغل الزامی است
                </span>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="start-year"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سال شروع :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select
                  v-model="$v.jobExperience.startYear.$model"
                  id="startYear"
                  name="start-year"
                >
                  <option
                    v-for="i in thisYear - startYear"
                    :key="i"
                    :value="startYear + i"
                  >
                    {{ startYear + i }}
                  </option>
                </select>
              </div>
              <span
                class="invalid-feedback"
                v-if="
                  (!$v.jobExperience.startYear.required &&
                    $v.jobExperience.startYear.$dirty) ||
                  (hasError &&
                    !$v.jobExperience.startYear.$dirty &&
                    $v.jobExperience.startYear.$model == '')
                "
                >فیلد سال شروع الزامی است
              </span>
            </div>
            <!-- <div class="col-12 mb-4 col-md-6">
              <label
                for="start-month"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >ماه شروع :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="start-month" name="start-month">
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                </select>
              </div>
            </div> -->
            <div class="col-12 mb-4 col-md-6">
              <label
                for="end-year"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سال پایان :</label
              >
              <div
                ref="endYear"
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select
                  v-model="$v.jobExperience.endYear.$model"
                  id="endYear"
                  name="end-year"
                >
                  <option
                    v-for="i in thisYear - startYear"
                    :key="i"
                    :value="startYear + i"
                  >
                    {{ startYear + i }}
                  </option>
                </select>
              </div>
              <span
                class="invalid-feedback"
                v-if="
                  (!$v.jobExperience.endYear.required &&
                    $v.jobExperience.endYear.$dirty) ||
                  (hasError &&
                    !$v.jobExperience.endYear.$dirty &&
                    $v.jobExperience.endYear.$model == '')
                "
                >فیلد سال پایان الزامی است
              </span>
            </div>
            <!-- <div class="col-12 mb-4 col-md-6">
              <label
                for="end-month"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >ماه پایان :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="end-month" name="end-month">
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                </select>
              </div>
            </div> -->
            <div class="col-12 mb-4 col-md-6">
              <div class="form-check">
                <input
                  v-model="now"
                  class="form-check-input remove-outline cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label
                  class="form-check-label font-90 cursor-pointer"
                  for="flexCheckChecked"
                >
                  هنوز مشغول به کار می باشم
                </label>
              </div>
            </div>
            <div class="col-12">
              <button
                :disabled="getStatus == 'pending'"
                @click.prevent="sendJobExperience()"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import { calender } from "@/Mixins/calender";
import { selectedManual } from "@/Mixins/selectedManualCs";
export default {
  mixins: [calender, selectedManual],
  props: {
    isEdit: {
      Object,
    },
  },
  data() {
    return {
      employeeId: 1,
      hasError: false,
      jobExperience: {
        jobTitle: "",
        orgTitle: "",
        startYear: "",
        endYear: "",
      },
      now: false,
    };
  },
  validations: {
    jobExperience: {
      jobTitle: {
        required,
      },
      orgTitle: {
        required,
      },
      startYear: {
        required,
      },
      endYear: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters(["getStatus", "getJobExperience", "getAllJobExperience"]),
    thisYear() {
      return this.calender().getYear();
    },
    startYear() {
      return 1350;
    },
  },
  methods: {
    ...mapActions([
      "sendJobExperienceToServer",
      "getJobExperienceFromServer",
      "getAllJobExperienceFromServer",
      "updateJobExperienceInServer",
    ]),
    sendJobExperience() {
      if (this.$v.$invalid) {
        this.hasError = true;
      } else {
        this.hasError = false;
        this.$store.commit("setStatus", "pending");
        if (this.isEdit.value == true) {
          this.updateJobExperienceInServer({
            employeeId: this.employeeId,
            jobExperience: this.jobExperience,
            id: this.isEdit.id,
          }).then(() => {
            this.getAllJobExperienceFromServer(this.employeeId);
          });
        } else if (this.isEdit.value == false) {
          this.sendJobExperienceToServer({
            employeeId: this.employeeId,
            jobExperience: this.jobExperience,
          }).then(() => {
            this.getAllJobExperienceFromServer(this.employeeId);
          });
        }
      }
    },
  },
  watch: {
    isEdit(v) {
      (this.hasError = false), (this.now = false);
      if (v.value == true) {
        this.$store
          .dispatch("getJobExperienceFromServer", {
            employeeId: this.employeeId,
            id: v.id,
          })
          .then(() => {
            this.jobExperience = Object.assign({}, this.getJobExperience);
            if (this.jobExperience.endYear == "now") {
              this.now = true;
            } else {
              this.now = false;
            }
            let ref = document.getElementById("job-experience");
            let arr = ["startYear"];
            if (this.jobExperience.endYear != "now") {
              arr.push("endYear");
            }
            this.selectedManual(ref, arr, this.jobExperience);
          }); // then
      } else if (v.value == false) {
        this.$v.$reset();
        let ref = document.getElementById("job-experience");
        this.selectedManual(ref, [], this.jobExperience, true);
        for (const key in this.jobExperience) {
          this.jobExperience[key] = "";
        }
      }
    },
    now(v) {
      let cso = this.$refs.endYear.querySelector(".custom-option-selected");
      if (v == true) {
        this.jobExperience.endYear = "now";
        cso.innerText = "انتخاب کنید ...";
        cso.classList.add("disable-select");
      } else if (v == false) {
        cso.classList.remove("disable-select");
      }
    },
  },
};
</script>

<style>
</style>