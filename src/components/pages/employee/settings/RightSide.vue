<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
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
      <div class="row px-4 pb-4 min-h-70vh align-content-start">
        <div class="col-12">
          <div class="mb-4">
            <label
              for="name"
              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
              >ایمیل :</label
            >
            <input
              type="text"
              id="name"
              name="name"
              disabled
              class="form-control input-textbox"
              placeholder="alifarahani533@gmail.com"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <label
              for="name"
              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
              >رمز عبور :</label
            >
            <input
              v-model="$v.pass.password.$model"
              type="text"
              id="name"
              name="name"
              class="form-control input-textbox"
              placeholder="رمز عبور جدید خود را وارد کنید"
            />
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
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <label
              for="family"
              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
              >تکرار رمز عبور :</label
            >
            <input
              v-model="$v.pass.rePassword.$model"
              type="text"
              id="family"
              name="family"
              class="form-control input-textbox"
              placeholder="رمز عبور جدید را مجددا وارد کنید"
            />
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
            ذخیره
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      hasError: false,
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
  methods: {
    changePass() {
      if (this.$v.$invalid) {
        this.hasError = true;
      }
      if (!this.$v.$invalid) {
        this.changeEmployeePassword({
          employeeId: this.$store.getters.getEmployeeId,
          pass: this.pass,
        });
      }
    },
  },
};
</script>

<style>
</style>
