<template>
  <div
    class="modal z-index-lv0 fade"
    id="language"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="language-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5 class="modal-title font-1 font-md-is" id="language-label">
            زبان ها
          </h5>
          <button
            type="button"
            class="btn-close remove-outline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form class="modal-body">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <label
                  for="language-title"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >عنوان زبان :</label
                >
                <input
                  v-model="$v.languageSkill.title.$model"
                  type="text"
                  id="language-title"
                  name="language-title"
                  placeholder="مثال : آلمانی"
                  class="form-control input-textbox"
                />
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.languageSkill.title.required &&
                      $v.languageSkill.title.$dirty) ||
                    (hasError &&
                      !$v.languageSkill.title.$dirty &&
                      $v.languageSkill.title.$model == '')
                  "
                  >فیلد سال پایان الزامی است
                </span>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="language-level"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سطح تسلط :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select
                  v-model="$v.languageSkill.level.$model"
                  id="level"
                  name="level"
                >
                  <option value="مقدماتی">مقدماتی</option>
                  <option value="متوسط">متوسط</option>
                  <option value="پیشرفته">پیشرفته</option>
                </select>
              </div>
              <span
                class="invalid-feedback"
                v-if="
                  (!$v.languageSkill.level.required &&
                    $v.languageSkill.level.$dirty) ||
                  (hasError &&
                    !$v.languageSkill.level.$dirty &&
                    $v.languageSkill.level.$model == '')
                "
                >فیلد سال پایان الزامی است
              </span>
            </div>

            <div class="col-12">
<button
                :disabled="getStatus == 'pending'"
                @click.prevent="sendLanguageSkill()"
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
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import { selectedManual } from "@/Mixins/selectedManualCs";
export default {
  mixins: [selectedManual,validationMixin],
  props: {
    isEdit: {
      Object,
    },
  },
  data() {
    return {
      employeeId: 1,
      hasError: false,
      languageSkill: {
        title: "",
        level: "",
      },
    };
  },
  validations: {
    languageSkill: {
      title: {
        required,
      },
      level: {
        required,
      },
    },
  },
      computed: {
      ...mapGetters(["getStatus", "getJobExperience", "getAllJobExperience",'getLanguageSkill','getEmployeeId']),
    },
    methods: {
      ...mapActions([
        "sendLanguageToServer",
        "getAllLanguageSkillsFromServer",
        "updateLanguageSkillInServer",
      ]),
      sendLanguageSkill() {
        if (this.$v.$invalid) {
          this.hasError = true;
        } else {
          this.hasError = false;
          this.$store.commit("setStatus", "pending");
          if (this.isEdit.value == true) {
            this.updateLanguageSkillInServer({
              employeeId: this.getEmployeeId,
              languageSkill: this.languageSkill,
              id: this.isEdit.id,
            }).then(() => {
              this.getAllLanguageSkillsFromServer(this.getEmployeeId);
            });
          } else if (this.isEdit.value == false) {
            this.sendLanguageToServer({
              employeeId: this.getEmployeeId,
              languageSkill: this.languageSkill,
            }).then(() => {
              this.getAllLanguageSkillsFromServer(this.getEmployeeId);
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
          .dispatch("getLanguageSkillFromServer", {
            employeeId: this.getEmployeeId,
            id: v.id,
          })
          .then(() => {
            this.languageSkill = Object.assign({}, this.getLanguageSkill);
            let ref = document.getElementById("language");
            this.selectedManual(ref, ["level"], this.languageSkill);
          }); // then
      } else if (v.value == false) {
        this.$v.$reset();
        let ref = document.getElementById("language");
        this.selectedManual(ref, [], this.languageSkill, true);
        for (const key in this.languageSkill) {
          this.languageSkill[key] = "";
        }
      }
    },
  },
};
</script>

<style>
</style>