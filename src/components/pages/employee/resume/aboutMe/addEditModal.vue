<template>
  <div
    class="modal z-index-lv0 fade"
    id="about-me"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="about-me-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5 class="modal-title font-1 font-md-is" id="about-me-label">
            درباره من
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
            <div class="col-12">
              <div class="mb-4">
                <label
                  for="about-me-descriptions"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >توضیحات :</label
                >

                <textarea
                  v-model="$v.aboutMe.$model"
                  class="form-control remove-outline"
                  placeholder="سعی کنید متنی کوتاه و مفید درباره خودتان بنویسید"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
                <span
                  v-if="
                    (!$v.aboutMe.required && $v.aboutMe.$dirty) ||
                    (hasError && !$v.aboutMe.$dirty && $v.aboutMe.$model == '')
                  "
                  class="invalid-feedback"
                >
                  فیلد توضیحات الزامی است
                </span>
                <span
                  v-if="!$v.aboutMe.maxLength && $v.aboutMe.$dirty"
                  class="invalid-feedback"
                >
                  طول متن بیش از حد مجاز است
                </span>
              </div>
            </div>
            <div class="col-12">
              <button
                @click.prevent="sendAboutMe()"
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
                ref="closey"
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
import { required, maxLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
export default {
  props:{
      isEdit:Object
  },
  data() {
    return {
      employeeId: 1,
      hasError: false,
      aboutMe: "",
    };
  },
  validations: {
    aboutMe: {
      required,
      maxLength: maxLength(100),
    },
  },
  computed: {
    ...mapGetters(["getStatus"]),
  },
  methods: {
    ...mapActions(["sendAboutMeToServer", "getAboutMeFromServer"]),
    sendAboutMe() {
      if (this.$v.$invalid) {
        this.hasError = true;
      } else {
        this.hasError = false;
        this.$store.commit("setStatus", "pending");
        this.sendAboutMeToServer({
          employeeId: this.employeeId,
          aboutMe: this.aboutMe,
        }).then(() => {
          this.getAboutMeFromServer(this.employeeId);
        });
      }
    },
  },
  watch: {
        isEdit(v) {
      if (v.value == true) {
        this.$store
          .dispatch("getAboutMeFromServer", this.employeeId)
          .then(() => {
            this.aboutMe = this.$store.getters.getAboutMe;
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

<style>
</style>