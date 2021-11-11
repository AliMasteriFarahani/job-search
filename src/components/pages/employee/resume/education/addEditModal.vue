<template>
  <div
    class="modal z-index-lv0 fade"
    id="educational-records"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="educational-records-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5
            class="modal-title font-1 font-md-is"
            id="educational-records-label"
          >
            سوابق تحصیلی
          </h5>
          <button
            type="button"
            class="btn-close remove-outline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form  autocomplete="off" class="row">
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <label
                  for="major-title"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >عنوان رشته :</label
                >
                <input
                  v-model="$v.education.majorTitle.$model"
                  type="text"
                  id="major-title"
                  name="major-title"
                  placeholder="مثال : مهندی نرم افزار"
                  class="form-control input-textbox"
                />
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.education.majorTitle.required &&
                      $v.education.majorTitle.$dirty) ||
                    (hasError &&
                      !$v.education.majorTitle.$dirty &&
                      $v.education.majorTitle.$model == '')
                  "
                  >فیلد عنوان رشته الزامی است
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
                  >نام دانشگاه :</label
                >
                <input
                  v-model="$v.education.uniTitle.$model"
                  type="text"
                  id="uni-title"
                  name="uni-title"
                  placeholder="مثال : دانشگاه شهید شمسی پور"
                  class="form-control input-textbox"
                />
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.education.uniTitle.required &&
                      $v.education.uniTitle.$dirty) ||
                    (hasError &&
                      !$v.education.uniTitle.$dirty &&
                      $v.education.majorTitle.$model == '')
                  "
                  >فیلد نام دانشگاه الزامی است
                </span>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="grade"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >مقطع تحصیلی :</label
              >
              <div
                class="custom-select simple-scroll"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="grade" v-model="$v.education.grade.$model">
                  <option
                    v-for="(grade, i) in getGrades"
                    :key="i"
                    :value="grade.id"
                  >
                    {{ grade.title }}
                  </option>
                </select>
              </div>
              <span
                class="invalid-feedback"
                v-if="
                  (!$v.education.grade.required && $v.education.grade.$dirty) ||
                  (hasError &&
                    !$v.education.grade.$dirty &&
                    $v.education.grade.$model == '')
                "
                >فیلد مقطع تحصیلی الزامی است
              </span>
            </div>
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <label
                  for="average"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >معدل :</label
                >
                <input
                  v-model="$v.education.average.$model"
                  type="text"
                  id="average"
                  name="average"
                  placeholder="مثال : 14"
                  class="form-control input-textbox"
                />
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.education.average.required &&
                      $v.education.average.$dirty && $v.education.endYear.$model == '') ||
                    (hasError &&
                      !$v.education.average.$dirty &&
                      $v.education.majorTitle.$model == '')
                  "
                  >فیلد معدل الزامی است
                </span>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="startYear"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سال شروع :</label
              >
              <div
                class="custom-select simple-scroll"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="startYear" v-model="$v.education.startYear.$model">
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
                  (!$v.education.startYear.required &&
                    $v.education.startYear.$dirty && $v.education.endYear.$model == '') ||
                  (hasError &&
                    !$v.education.startYear.$dirty &&
                    $v.education.majorTitle.$model == '')
                "
                >فیلد سال شروع الزامی است
              </span>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="endYear"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سال پایان :</label
              >
              <div
                ref="endYear"
                class="custom-select simple-scroll"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="endYear" v-model="$v.education.endYear.$model">
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
                  (!$v.education.endYear.required &&
                    $v.education.endYear.$dirty &&
                    $v.education.endYear.$model == '') ||
                  (hasError &&
                    !$v.education.endYear.$dirty &&
                    $v.education.endYear.$model == '')
                "
                >فیلد سال پایان الزامی است
              </span>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="form-check">
                <input
                  v-model="now"
                  class="form-check-input remove-outline cursor-pointer"
                  type="checkbox"
                  value="true"
                  id="flexCheckChecked"
                />
                <label
                  class="form-check-label font-90 cursor-pointer"
                  for="flexCheckChecked"
                >
                  هنوز مشغول به تحصیل می باشم
                </label>
              </div>
            </div>
            <div class="col-12">
              <button
                :disabled="getStatus == 'pending'"
                @click.prevent="sendEducation()"
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
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import { calender } from "@/Mixins/calender";
import { selectedManual } from "@/Mixins/selectedManualCs";
export default {
  mixins: [calender, selectedManual,validationMixin],
  props: {
    isEdit: {
      Object,
    },
  },
  data() {
    return {
      employeeId: 1,
      hasError: false,
      education: {
        majorTitle: "",
        uniTitle: "",
        grade: "",
        average: "",
        startYear: "",
        endYear: "",
      },
      now: false,
    };
  },
  validations: {
    education: {
      majorTitle: {
        required,
      },
      uniTitle: {
        required,
      },
      grade: {
        required,
      },
      average: {
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
    ...mapGetters([
      "getGrades",
      "getStatus",
      "getEducation",
      "getAllEducations",
      'getEmployeeId'
    ]),
    thisYear() {
      return this.calender().getYear();
    },
    startYear() {
      return 1350;
    },
  },
  methods: {
    ...mapActions([
      "getGradesFromServer",
      "sendEducationToServer",
      "getAllEducationsFromServer",
      'updateEducationInServer'
    ]),
    sendEducation() {
      if (this.$v.$invalid) {
        this.hasError = true;
      } else {
        this.hasError = false;
        this.$store.commit("setStatus", "pending");
        if (this.isEdit.value == true) {
          this.updateEducationInServer({
            employeeId: this.getEmployeeId,
            education: this.education,
            id:this.isEdit.id
          }).then(() => {
            this.getAllEducationsFromServer(this.getEmployeeId);
          });
        } else if (this.isEdit.value == false) {
          this.sendEducationToServer({
            employeeId: this.getEmployeeId,
            education: this.education,
          }).then(() => {
            this.getAllEducationsFromServer(this.getEmployeeId);
          });
        }
      }
    },
  },
  created() {
    this.getGradesFromServer();
  },
  watch: {
    isEdit(v) {
      this.hasError = false,
      this.now = false
      if (v.value == true) {
        this.$store
          .dispatch("getEducationFromServer", {
            employeeId: this.getEmployeeId,
            id: v.id,
          })
          .then(() => {
            this.education = Object.assign({}, this.getEducation);
            if (this.education.endYear == "now") {
              this.now = true;
            } else {
              this.now = false;
            }
            let ref = document.getElementById("educational-records");
            let arr = ["grade", "startYear"];
            if (this.education.endYear != "now") {
              arr.push("endYear");
            }
            this.selectedManual(ref, arr, this.education);
          }); // then
      } else if (v.value == false) {
        this.$v.$reset();
         let ref = document.getElementById("educational-records");
         this.selectedManual(ref, [], this.education,true);
        for (const key in this.education) {
          this.education[key] = "";
        }

      }
    },
    now(v) {
      let cso = this.$refs.endYear.querySelector(".custom-option-selected");
      if (v == true) {
        this.education.endYear = "now";
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
.disable-select {
  pointer-events: none !important;
  background: #eee !important;
}
</style>