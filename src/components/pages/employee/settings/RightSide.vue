<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <app-notification :getStatus="getStatus"></app-notification>
    <div class="shadow-c border-radius-05 overflow-hidden bg-white">
      <div class="row px-lg-5 px-4 mt-4">
        <div class="col-12">
          <h3 class="font-1 font-bd-is pb-2">تنظیمات حساب کاربری</h3>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div class="border-dashed"></div>
        </div>
      </div>
      <div
        class="
          row
          col-md-8
          offset-md-2
          px-4
          pb-4
          min-h-100vh
          align-content-start
        "
      >
        <div class="col-12">
          <div class="mb-4">
            <label
              for="email"
              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
              >نام کاربری :</label
            >
            <input
              type="text"
              name="email"
              disabled
              class="form-control input-textbox"
              :placeholder="getUsername"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-4">
            <label
              for="pass"
              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
              >رمز عبور :</label
            >
            <div class="position-relative">
              <input
                v-model="$v.pass.password.$model"
                ref="password"
                type="password"
                id="pass"
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
              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
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
                (!$v.pass.rePassword.required && $v.pass.rePassword.$dirty) ||
                (hasError && !$v.pass.rePassword.$dirty)
              "
              >فیلد رمز عبور الزامی است</span
            >
            <span
              class="invalid-feedback"
              v-if="!$v.pass.rePassword.minLength && $v.pass.rePassword.$dirty"
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import appNotification from "@/components/pages/shared/notification.vue";
export default {
  mixins: [validationMixin],
  components: { appNotification },
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
    ...mapGetters(["getStatus",'getUsername']),
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
    ...mapActions(["changeEmployeePassword"]),
    changePass() {
      if (this.$v.$invalid) {
        this.hasError = true;
      }
      if (!this.$v.$invalid) {
        this.$store.commit("setStatus", "pending");
        this.changeEmployeePassword({
          employeeId: this.$store.getters.getEmployeeId,
          pass: this.pass,
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
};
</script>

<style>
.eye {
  position: absolute;
  bottom: 6px;
  left: 7px;
  cursor: pointer;
}
</style>
