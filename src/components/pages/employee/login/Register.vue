<template>
  <div class="row">
    <div class="col-md-6 px-3 ps-4 px-lg-5 col-12">
      <app-notification :getStatus="getStatus"></app-notification>
      <form autocomplete="off">
        <div class="mb-5">
          <label
            for="email"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >ایمیل :</label
          >
          <input
            v-model="$v.registerInfo.email.$model"
            type="text"
            id="email"
            name="email"
            class="form-control input-textbox"
            placeholder="ایمیل یا نام کاربری خود را وارد کنید"
          />
          <span
            class="invalid-feedback"
            v-if="
              (!$v.registerInfo.email.required &&
                $v.registerInfo.email.$dirty) ||
              (hasError && !$v.registerInfo.email.$dirty)
            "
            >فیلد ایمیل الزامی است</span
          >
          <span
            class="invalid-feedback d-block"
            v-if="!$v.registerInfo.email.email && $v.registerInfo.email.$dirty"
            >فرمت ایمیل صحیح نیست</span
          >
          <span
            class="invalid-feedback d-block"
            v-if="
              !$v.registerInfo.email.unique &&
              $v.registerInfo.email.email &&
              $v.registerInfo.email.$dirty &&
              !$v.registerInfo.email.$pending
            "
            >ایمیل وجود دارد</span
          >
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >نام کاربری :</label
          >
          <input
            v-model="$v.registerInfo.username.$model"
            type="text"
            id="email"
            name="email"
            class="form-control input-textbox"
            placeholder=" نام کاربری خود را وارد کنید"
          />
          <span
            class="invalid-feedback"
            v-if="
              (!$v.registerInfo.username.required &&
                $v.registerInfo.username.$dirty) ||
              (hasError && !$v.registerInfo.username.$dirty)
            "
            >فیلد نام کاربری الزامی است</span
          >
          <span
            class="invalid-feedback"
            v-if="
              !$v.registerInfo.username.minLength &&
              $v.registerInfo.username.$dirty
            "
            >طول نام کاربری کم است
          </span>
                              <span
            class="invalid-feedback d-block"
            v-if="
              !$v.registerInfo.username.unique &&
              $v.registerInfo.username.minLength &&
              $v.registerInfo.username.$dirty && 
              !$v.registerInfo.username.$pending
            "
            >نام کاربری وجود دارد</span
          >
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >رمز عبور :</label
          >
          <input
            v-model="$v.registerInfo.password.$model"
            type="text"
            id="email"
            name="email"
            class="form-control input-textbox"
            placeholder="رمز عبور خود را وارد کنید"
          />
          <span
            class="invalid-feedback"
            v-if="
              (!$v.registerInfo.password.required &&
                $v.registerInfo.password.$dirty) ||
              (hasError && !$v.registerInfo.password.$dirty)
            "
            >فیلد رمز عبور الزامی است</span
          >
          <span
            class="invalid-feedback"
            v-if="
              !$v.registerInfo.password.minLength &&
              $v.registerInfo.password.$dirty
            "
            >طول رمز عبور کم است
          </span>
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >تکرار رمز عبور :</label
          >
          <input
            v-model="$v.registerInfo.rePassword.$model"
            type="text"
            id="email"
            name="email"
            class="form-control input-textbox"
            placeholder="رمز عبور خود را مجدد وارد کنید"
          />
          <span
            class="invalid-feedback"
            v-if="
              (!$v.registerInfo.rePassword.required &&
                $v.registerInfo.rePassword.$dirty) ||
              (hasError && !$v.registerInfo.rePassword.$dirty)
            "
            >فیلد رمز عبور الزامی است</span
          >
          <span
            class="invalid-feedback"
            v-if="
              !$v.registerInfo.rePassword.minLength &&
              $v.registerInfo.rePassword.$dirty
            "
            >طول رمز عبور کم است
          </span>
          <span
            class="invalid-feedback"
            v-if="
              $v.registerInfo.rePassword.minLength &&
              $v.registerInfo.rePassword.$dirty &&
              !$v.registerInfo.rePassword.sameAs &&
              $v.registerInfo.rePassword.$model != ''
            "
          >
            رمز عبور یکسان نیست
          </span>
        </div>
        <div class="mb-5">
          <button
            @click.prevent="registerEmployee()"
            class="btn btn-primary w-100 mb-3"
          >
            ثبت نام
          </button>
          <a class="font-90 font-bd-is text-underline" href=""
            >ثبت نام کارفرما</a
          >
        </div>
      </form>
    </div>
    <div class="col-md-6 col-12">
      <div class="row d-none d-md-block mt-0 pt-0 mt-md-4 pt-md-2">
        <div class="col-6 col-md-12 d-flex justify-content-center mb-3">
          <span
            class="
              btn-l-r
              w-75 w-lg-60
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <span class="font-90 font-bd-is me-4">ثبت نام با لینکدین</span>
            <img
              class="img-fluid"
              width="26px"
              height="26px"
              src="/images/social/2986200_linkdin_logo_media_social_icon (3).svg"
              alt=""
            />
          </span>
        </div>
        <div class="col-6 col-md-12 d-flex justify-content-center mb-3">
          <span
            class="
              btn-l-r
              w-75 w-lg-60
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <span class="font-90 font-bd-is me-4">ثبت نام با گوگل</span>
            <img
              class="img-fluid"
              width="26px"
              height="26px"
              src="/images/social/571112_google_google plus_logo_plus_social_icon (1).svg"
              alt=""
            />
          </span>
        </div>
        <div class="col-6 col-md-12 d-flex justify-content-center mb-3">
          <span
            class="
              btn-l-r
              w-75 w-lg-60
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <span class="font-90 font-bd-is me-4">ثبت نام با گیت هاب</span>
            <img
              class="img-fluid"
              width="26px"
              height="26px"
              src="/images/social/1964417_github_logo_media_social_icon.svg"
              alt=""
            />
          </span>
        </div>
      </div>
      <div class="row d-block d-md-none">
        <div class="col d-flex justify-content-center">
          <a class="me-1" href="">
            <img
              class="img-fluid"
              width="26px"
              height="26px"
              src="/images/social/2986200_linkdin_logo_media_social_icon (3).svg"
              alt=""
            />
          </a>
          <a class="me-1" href="">
            <img
              class="img-fluid"
              width="26px"
              height="26px"
              src="/images/social/571112_google_google plus_logo_plus_social_icon (1).svg"
              alt=""
            />
          </a>
          <a class="me-1" href="">
            <img
              class="img-fluid"
              width="26px"
              height="26px"
              src="/images/social/1964417_github_logo_media_social_icon.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import appNotification from "@/components/pages/shared/notification.vue";
export default {
  components: {
    appNotification,
  },
  mixins: [validationMixin],
  data() {
    return {
      hasError: false,
      registerInfo: {
        email: "",
        username: "",
        password: "",
        rePassword: "",
      },
    };
  },
  validations: {
    registerInfo: {
      email: {
        required,
        email,
        unique: function (val) {
          if (val == "") {
            return true;
          }
          return this.isEmailUnique(val);
        },
      },
      username: {
        required,
        minLength: minLength(3),
        unique: function (val) {
          if (val == "") {
            return true;
          }
          return this.isUsernameUnique(val);
        },
      },
      password: {
        required,
        minLength: minLength(8),
      },
      rePassword: {
        required,
        minLength: minLength(8),
        sameAs: sameAs("password"),
      },
    },
  },
  computed: {
    ...mapGetters(["getStatus"]),
  },
  methods: {
    ...mapActions(["registerEmployeeInServer"]),
    isEmailUnique(val) {
      return axios.get(`api/checkEmailExist/${val}`).then((response) => {
        console.log(response);
        if (response.status != 401 && response.status == 200) {
          return !response.data.status;
        }
      });
    },
    isUsernameUnique(val){
              return axios.get(`api/checkUsernameExist/${val}`).then((response) => {
        console.log(response);
        if (response.status != 401 && response.status == 200) {
          return !response.data.status;
        }
      });
    },
    registerEmployee() {
      if (this.$v.$invalid) {
        this.hasError = true;
      }
      if (!this.$v.$invalid) {
        this.registerEmployeeInServer({ registerInfo: this.registerInfo });
      }
    },
  },
  // deactivated(){
  //    this.$v.$reset()
  //   console.log('object');
  // },
  // created(){
  //        this.$v.$reset()
  //   console.log('object2');
  // },
  // beforeRouteLeave(from,to,next){
  //        this.$v.$reset()
  //   console.log(to,'object3');
  //   next()
  // }
};
</script>

<style>
</style>