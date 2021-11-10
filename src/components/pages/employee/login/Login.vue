<template>
  <div class="row">
    <div class="col-md-6 px-3 ps-4 px-lg-5 col-12">
      <form>
        <div class="mb-5">
          <label
            for="email"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >ایمیل :</label
          >
          <input
            v-model="loginInfo.username"
            type="text"
            id="email"
            name="email"
            class="form-control input-textbox"
            placeholder="ایمیل یا نام کاربری خود را وارد کنید"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
            >رمز عبور :</label
          >
          <input
            v-model="loginInfo.password"
            type="text"
            id="email"
            name="email"
            class="form-control input-textbox"
            placeholder="رمز عبور خود را وارد کنید"
          />
                    <span
            class="invalid-feedback"
            v-if="getloginError"
            >
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
          <button @click.prevent="loginEmployee()" class="btn btn-primary w-100 mb-3">ورود</button>
          <a class="font-90 d-block mb-2 font-bd-is text-underline" href="">
            رمز عبور خود را فراموش کرده اید ؟</a
          >
          <a class="font-90 font-bd-is text-underline" href=""> ورود کارفرما</a>
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
import { mapActions, mapGetters } from "vuex";
//import { store } from "../../../../Store/Store";
export default {
  data() {
    return {
      gg:'ali masteri',
      loginInfo: {
        username: "",
        password: "",
      },
    };
  },
  computed:{
    ...mapGetters(['getloginError'])
  },
  methods: {
    ...mapActions(["loginEmployeeInServer"]),
    async loginEmployee() {
      await this.loginEmployeeInServer(this.loginInfo);
    },
  },
  // beforeRouteEnter(to,from,next){
  //  // console.log(this.$store.getters.getloginError,'ooo');
  //   next();
  // }
};
</script>

<style>
</style>