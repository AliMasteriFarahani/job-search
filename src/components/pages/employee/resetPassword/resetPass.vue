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
                <p class="mb-0">بازیابی رمز عبور</p>

              </span>
            </transition>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="border-dashed mt-3 mb-4"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-10 offset-1">
            <div class="mb-5">
              <div v-if="getStatus=='ok'" class="alert alert-success text-center font-90">ایمیل بازیابی برای شما ارسال شد</div>
              <label
                for="password"
                class="form-check-label mb-2 font-1 font-bd-is cursor-pointer"
                >ایمیل :</label
              >
              <div class="position-relative">
                <input
                  v-model.lazy="$v.email.$model"
                  type="text"
                  id="password"
                  name="password"
                  class="form-control input-textbox"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <span
                  class="invalid-feedback"
                  v-if="
                    (!$v.email.required && $v.email.$dirty) ||
                    (hasError && !$v.email.$dirty)
                  "
                  >ایمیل الزامی است</span
                >
                <span
                  class="invalid-feedback d-block"
                  v-if="
                    !$v.email.email && $v.email.$dirty && $v.email.$model != ''
                  "
                  >فرمت ایمیل صحیح نیست</span
                >
                <span
                  class="invalid-feedback d-block"
                  v-if="
                    !$v.email.unique &&
                    $v.email.email &&
                    $v.email.$dirty &&
                    !$v.email.$pending
                  "
                  >ایمیل وجود ندارد</span
                >
              </div>
            </div>
            <div class="mb-5">
              <button
                :disabled="$v.email.$invalid"
                @click.prevent="resetPasswordEmailRequest()"
                class="btn btn-primary w-100 mb-3"
              >
                <template v-if="getStatus == 'pending'">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </template>
                <template v-else>بازیابی رمز عبور</template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  mixins: [validationMixin],
  data() {
    return {
      hasError: false,
      email: "",
    };
  },
  validations: {
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
  },
  computed: {
    ...mapGetters(["getStatus"]),
  },
  methods: {
    isEmailUnique(val) {
      return axios.get(`api/checkEmailExist/${val}`).then((response) => {
        if (response.status != 401 && response.status == 200) {
          return response.data.status;
        }
      });
    },
    async resetPasswordEmailRequest() {
      if (this.$v.$invalid) {
        this.hasError = true;
      }
      if (!this.$v.$invalid) {
        this.$store.commit("setStatus", "pending");
        await this.$store.dispatch("resetPasswordEmailRequestInServer", {email: this.email});
      }
    },
  },
  beforeDestroy(){
     this.$store.commit('setStatus','');
  }
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
