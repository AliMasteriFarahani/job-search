<template>
  <div
    class="modal z-index-lv0 fade"
    id="skills"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="skills-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5 class="modal-title font-1 font-md-is" id="skills">مهارت ها</h5>
          <button
            type="button"
            class="btn-close remove-outline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 mb-4">
              <!--  -->
              <div
                v-for="(skill, i) in skills"
                :key="i"
                class="d-inline-flex mb-2 me-2 position-relative"
              >
                <span class="skill font-90"
                  >{{ skill.skillTitle }}
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90">{{
                  skill.skillLevel
                }}</span>
                <span
                  @click="removeSkill(i)"
                  class="
                    close-icon-sk
                    d-inline-flex
                    align-middle
                    cursor-pointer
                  "
                >
                  <i class="font-1 align-middle fa-solid fa-circle-xmark"></i>
                </span>
              </div>
            </div>
            <form autocomplete="off" class="col-12 col-md-6">
              <div class="mb-1 flex-grow-1">
                <label
                  for="skill"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >عنوان مهارت :</label
                >
                <input
                  v-model="$v.skill.skillTitle.$model"
                  type="text"
                  id="skill"
                  name="skill"
                  placeholder="مهارت خود را وارد کنید ..."
                  class="form-control input-textbox"
                />
              </div>
              <span v-if="hasError" class="invalid-feedback">
                فیلد سطح مهارت الزامی است
              </span>
            </form>
            <div class="col-12 col-md-6 d-flex">
              <div class="mb-4 flex-grow-1">
                <label
                  for="skill-level"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >سطح تسلط :</label
                >
                <div
                  class="custom-select simple-scroll z-index-lv2"
                  title="انتخاب کنید ..."
                  data-search-box="false"
                >
                  <select
                    id="skill-level"
                    name="skill-level"
                    v-model="$v.skill.skillLevel.$model"
                  >
                    <option selected value="مقدماتی">مقدماتی</option>
                    <option value="متوسط">متوسط</option>
                    <option value="پیشرفته">پیشرفته</option>
                  </select>
                </div>
              </div>
              <span
                @click="addToSkills()"
                class="float-start d-flex font-90 cursor-pointer font-md-is"
              >
                <i
                  class="
                    fa-solid
                    align-self-center
                    ms-1
                    font-2
                    color--success
                    fa-circle-plus
                  "
                ></i>
              </span>
            </div>
            <!-- <span
                  v-if="
                    (!$v.skill.skillLevel.required && $v.skill.skillLevel.$dirty) ||
                    (hasError && !$v.skill.skillLevel.$dirty && $v.skill.skillLevel.$model == '')
                  "
                  class="invalid-feedback"
                >
                  فیلد سطح مهارت الزامی است
                </span> -->
            <div class="col-12">
              <button
                @click.prevent="sendSkills()"
                :disabled="getStatus == 'pending'"
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
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
export default {
  mixins:[validationMixin],
  props: {
    isEdit: Object,
  },
  data() {
    return {
      employeeId: 1,
      hasError: false,
      skills: [],
      skill: {
        skillTitle: "",
        skillLevel: "مقدماتی",
      },
    };
  },
  validations: {
    skill: {
      skillTitle: {
        required,
      },
      skillLevel: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters(["getStatus", "getSkills",'getEmployeeId']),
  },
  methods: {
    ...mapActions(["sendSkillsToServer", "getSkillsFromServer",'updateSkillsInServer']),
    addToSkills() {
      if (this.$v.$invalid) {
        this.hasError = true;
      } else {
        this.hasError = false;
        let sk = Object.assign({}, this.skill);
        this.skills.push(sk);
        this.skill.skillTitle = "";
      }
    },
    sendSkills() {
      this.$store.commit("setStatus", "pending");
      if (Object.keys(this.skills).length > 0) {
              this.sendSkillsToServer({
        employeeId: this.getEmployeeId,
        skills: this.skills,
      }).then(() => {
        this.getSkillsFromServer(this.getEmployeeId);
      });
      }else if(Object.keys(this.skills).length == 0){
                        this.updateSkillsInServer({
        employeeId: this.getEmployeeId,
        skills: this.skills,
      }).then(() => {
        this.getSkillsFromServer(this.getEmployeeId);
      });
      }

    },
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
  },
  watch: {
    isEdit(v) {
      if (v.value == true) {
        this.$store
          .dispatch("getSkillsFromServer", this.getEmployeeId)
          .then(() => {
            //  let skl = this.$store.getters.getSkills
            this.skills = Object.assign([], this.getSkills);
          }); // then
      }
    },
    getStatus(v) {
      if (v == "ok" || v == "failed") {
        document
          .querySelectorAll("button[data-bs-dismiss='modal']")
          .forEach((element) => {
            element.click();
          });
      }
    },
  },
};
</script>

<style scoped>
.close-icon-sk {
  position: absolute;
  top: -0.3rem !important;
  right: -0.3rem !important;
}
</style>