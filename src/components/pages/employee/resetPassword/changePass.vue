<template>
  <div class="container">
    <div class="row px-3 px-md-0 mt-5">
      <div class="col-12 col-md-6 offset-md-3 bg-white mb-5 shadow-c rounded-3">
        <div class="row">
          <div class="col">
            <span class="job-logo-register-login">
              <router-link to="/" class="w-100 h-100" href="">
                <img class="w-100 h-100" src="/images/logo2.png" alt="" />
              </router-link>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <transition
              appear
              enter-active-class="animate__animated animate__pulse"
            >
              <span class="d-flex justify-content-center">
                <p class="mb-0">تغییر رمز عبور</p>
              </span>
            </transition>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="border-dashed mt-3 mb-4"></div>
          </div>
        </div>
        <!-- register and login should be load here -->
        <!-- <keep-alive> -->
        <!-- <component :is="selectedComponent"></component> -->
        <!-- <router-view></router-view> -->
        <!-- </keep-alive> -->

        <div class="row">
          <div class="col-10 offset-1 col-md-10 offset-md-1 col">
            <div class="col-12">
              <div class="mb-4">
                <div
                  v-if="getStatus == 'ok'"
                  class="alert alert-success text-center font-90"
                >
                  رمز عبور با موفقیت تغییر کرد
                </div>
                <div
                  v-if="getStatus == 'passed'"
                  class="alert alert-danger text-center font-90"
                >
                  لینک تغییر رمز عبور معتبر نیست
                </div>
                <label
                  for="name"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >رمز عبور :</label
                >
                <div class="position-relative">
                  <input
                    v-model="$v.pass.password.$model"
                    ref="password"
                    type="password"
                    id="name"
                    name="name"
                    class="form-control input-textbox"
                    placeholder="رمز عبور جدید خود را وارد کنید"
                  />
                  <span
                    class="eye"
                    @click="changeStatus('pass')"
                    v-html="passEye"
                  ></span>
                </div>
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.pass.password.required && $v.pass.password.$dirty) ||
                    (hasError && !$v.pass.password.$dirty)
                  "
                  >فیلد رمز عبور الزامی است</span
                >
                <span
                  class="invalid-feedback"
                  v-if="!$v.pass.password.minLength && $v.pass.password.$dirty"
                  >طول رمز عبور کم است
                </span>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-4">
                <label
                  for="family"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >تکرار رمز عبور :</label
                >
                <div class="position-relative">
                  <input
                    v-model="$v.pass.rePassword.$model"
                    ref="rePassword"
                    type="password"
                    id="family"
                    name="family"
                    class="form-control input-textbox"
                    placeholder="رمز عبور جدید را مجددا وارد کنید"
                  />
                  <span
                    class="eye"
                    @click="changeStatus('rePass')"
                    v-html="rePassEye"
                  >
                  </span>
                </div>

                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.pass.rePassword.required &&
                      $v.pass.rePassword.$dirty) ||
                    (hasError && !$v.pass.rePassword.$dirty)
                  "
                  >فیلد رمز عبور الزامی است</span
                >
                <span
                  class="invalid-feedback"
                  v-if="
                    !$v.pass.rePassword.minLength && $v.pass.rePassword.$dirty
                  "
                  >طول رمز عبور کم است
                </span>
                <span
                  class="invalid-feedback"
                  v-if="
                    $v.pass.rePassword.minLength &&
                    $v.pass.rePassword.$dirty &&
                    !$v.pass.rePassword.sameAs &&
                    $v.pass.rePassword.$model != ''
                  "
                >
                  رمز عبور یکسان نیست
                </span>
              </div>
            </div>
            <div class="col-12">
              <button
                @click="changePass()"
                :disabled="$v.pass.$invalid"
                class="
                  btn
                  w-100
                  btn--success
                  mb-3
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
                </template>
                <template v-else>ذخیره</template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      hasError: false,
      showPass: false,
      showRepass: false,
      pass: {
        password: "",
        rePassword: "",
      },
    };
  },
  validations: {
    pass: {
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
    passEye() {
      let icon = "";
      if (this.showPass) {
        icon = `<i class="fa-duotone fa-eye"></i>`;
      } else {
        icon = `<i class="fa-duotone fa-eye-slash"></i>`;
      }
      return icon;
    },
    rePassEye() {
      let icon = "";
      if (this.showRepass) {
        icon = `<i class="fa-duotone fa-eye"></i>`;
      } else {
        icon = `<i class="fa-duotone fa-eye-slash"></i>`;
      }
      return icon;
    },
  },
  methods: {
    ...mapActions(["resetPasswordInServer"]),
     changePass() {
      if (this.$v.$invalid) {
        this.hasError = true;
      }
      if (
        !this.$v.$invalid &&
        this.$route.query.token != undefined &&
        this.$route.query.email != undefined
      ) {
        this.$store.commit("setStatus", "pending");
         this.resetPasswordInServer({
          token: this.$route.query.token,
          email: this.$route.query.email,
          pass: this.pass,
        }).then(async() => {
          if (this.getStatus == "ok") {
            setTimeout(() => {
              this.$router.push("/employee/login");
            }, 2500);
          }
        });
      }
    },
    changeStatus(type) {
      if (type == "pass") {
        this.showPass = !this.showPass;
        if (this.showPass) {
          this.$refs.password.setAttribute("type", "text");
        } else if (this.showPass == false) {
          this.$refs.password.setAttribute("type", "password");
        }
      } else if (type == "rePass") {
        this.showRepass = !this.showRepass;
        if (this.showRepass) {
          this.$refs.rePassword.setAttribute("type", "text");
        } else if (this.showRepass == false) {
          this.$refs.rePassword.setAttribute("type", "password");
        }
      }
    },
  },
  beforeDestroy() {
    this.$store.commit("setStatus", "");
  },
};
</script>

<style>
.login,
.register {
  background: #c4c4c4;
  width: 6rem;
  text-align: center;
  display: inline-block;
}
.login {
  border-radius: 0 0.5rem 0.5rem 0;
  border-left: 1px solid #fff;
  position: relative;
}
.register {
  border-radius: 0.5rem 0 0 0.5rem;
  border-right: 1px solid #fff;
}
.login a,
.register a {
  padding: 0.5rem 1rem;
  color: #000;
}
.login .router-link-exact-active,
.register .router-link-exact-active {
  color: #fff !important;
  background-color: #fc7c1c !important;
  font-family: "iransanse-md" !important;
}
.login .router-link-exact-active {
  border-radius: 0 0.5rem 0.5rem 0 !important;
}
.register .router-link-exact-active {
  border-radius: 0.5rem 0 0 0.5rem !important;
}
.circle-register-login {
  display: inline-block;
  background: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translate(0, -50%);
}
.job-logo-register-login {
  width: 6rem;
  height: 6rem;
  display: flex;
  margin: 0 auto;
  border: 1px dashed #ccc;
  border-radius: 50%;
  position: relative;
  top: -2.5rem;
}
.job-logo-register-login img {
  background: #fff;
  border-radius: 50%;
}
.btn-l-r {
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
}
.btn-l-r:hover {
  cursor: pointer;
  border: 1px dashed #ccc;
  background-color: #eee;
}
.invalid-feedback {
  display: block;
  font-size: 0.75rem;
}
.eye {
  position: absolute;
  bottom: 6px;
  left: 7px;
  cursor: pointer;
}
</style>
