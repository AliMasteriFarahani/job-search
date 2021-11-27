<template>
  <div class="row">
    <div class="col-md-6 px-3 ps-4 px-lg-5 col-12">
      <form autocomplete="off">
        <div class="mb-5">
          <label
            for="username"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >نام کاربری :</label
          >
          <input
            v-model="$v.loginInfo.username.$model"
            type="text"
            id="username"
            name="username"
            class="form-control input-textbox"
            placeholder="نام کاربری یا ایمیل خود را وارد کنید"
          />
          <span
            class="invalid-feedback"
            v-if="
              (!$v.loginInfo.username.required &&
                $v.loginInfo.username.$dirty) ||
              (hasError && !$v.loginInfo.username.$dirty)
            "
            >فیلد نام کاربری الزامی است</span
          >
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >رمز عبور :</label
          >
          <div class="position-relative">
            <input
              v-model="$v.loginInfo.password.$model"
              ref="password"
              type="password"
              id="password"
              name="password"
              class="form-control input-textbox"
              placeholder="رمز عبور خود را وارد کنید"
            />
            <span class="eye" @click="changeStatus()" v-html="eye"> </span>
          </div>
          <span
            class="invalid-feedback"
            v-if="
              (!$v.loginInfo.password.required &&
                $v.loginInfo.password.$dirty) ||
              (hasError && !$v.loginInfo.password.$dirty && !getloginError)
            "
            >فیلد نام کاربری الزامی است</span
          >
          <span class="invalid-feedback" v-if="getloginError">
            نام کاربری یا رمز عبور اشتباه است
          </span>
        </div>
        <!-- <div class="mb-3">
          <div class="form-check">
            <input
              class="form-check-input remove-outline cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label
              class="form-check-label font-90 cursor-pointer"
              for="flexCheckChecked"
            >
              مرا به خاطر بسپار
            </label>
          </div>
        </div> -->
        <div class="mb-5">
          <button
            :disabled="$v.$invalid"
            @click.prevent="loginEmployee()"
            class="btn btn-primary w-100 mb-3"
          >
            <template v-if="getStatus == 'pending'">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </template>
            <template v-else> ورود </template>
          </button>
          <router-link
            :to="{ name: 'EmailResetPassword' }"
            class="font-80 d-block mb-2 font-bd-is text-underline"
          >
            رمز عبور خود را فراموش کرده اید ؟</router-link
          >
          <a class="font-80 font-bd-is text-underline" href=""> ورود کارفرما</a>
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
            <span class="font-90 font-bd-is me-4"> ورود با لینکدین</span>
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
            <span class="font-90 font-bd-is me-4"> ورود با گوگل</span>
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
            <span class="font-90 font-bd-is me-4"> ورود با گیت هاب</span>
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
      <div class="row mb-3 d-block d-md-none">
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
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
//import { store } from "../../../../Store/Store";
export default {
  mixins: [validationMixin],
  data() {
    return {
      hasError: false,
      showPass: false,
      loginInfo: {
        username: "",
        password: "",
      },
    };
  },
  validations: {
    loginInfo: {
      username: { required },
      password: { required },
    },
  },
  computed: {
    ...mapGetters(["getloginError", "getStatus"]),
    eye() {
      let icon = "";
      if (this.showPass) {
        icon = `<i class="fa-duotone fa-eye"></i>`;
      } else {
        icon = `<i class="fa-duotone fa-eye-slash"></i>`;
      }
      return icon;
    },
  },
  methods: {
    ...mapActions(["loginEmployeeInServer"]),
    async loginEmployee() {
      if (this.$v.$invalid) {
        this.hasError = true;
      }
      if (!this.$v.$invalid) {
        await this.loginEmployeeInServer(this.loginInfo);
        this.$store.commit("setStatus", "pending");
      }
    },
    changeStatus() {
      this.showPass = !this.showPass;
      if (this.showPass) {
        this.$refs.password.setAttribute("type", "text");
      } else if (this.showPass == false) {
        this.$refs.password.setAttribute("type", "password");
      }
    },
  },
  watch: {
    "loginInfo.password"(v) {
      if (v == "") {
        this.$store.commit("setLoginError", false);
      }
    },
  },
};
</script>

<style>
</style>