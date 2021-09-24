<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-10 offset-1 bg-white mb-5 shadow-c rounded-3">
        <div class="row">
          <div class="col">
            <span class="job-logo-register-login">
              <router-link to="/" class="w-100 h-100" href="">
                <img class="w-100 h-100" src="/images/job-logo-2.png" alt="" />
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
              <span
                @click="switchLoginRegister('AppLogin')"
                :class="[
                  'login font-90 cursor-pointer',
                  {
                    'login-register-active-btn':
                      selectedComponent === 'AppLogin',
                  },
                ]"
                >ورود
                <span class="circle-register-login"></span>
              </span>
              <span
                @click="switchLoginRegister('AppRegister')"
                :class="[
                  'register font-90 cursor-pointer',
                  {
                    'login-register-active-btn':
                      selectedComponent === 'AppRegister',
                  },
                ]"
                >ثبت نام</span
              >
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
        <transition
          appear
          enter-active-class="animate__animated animate__fadeIn"
        >
          <keep-alive>
            <component :is="selectedComponent"></component>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppRegister from "./Register.vue";
import AppLogin from "./Login.vue";
export default {
  components: {
    AppRegister,
    AppLogin,
  },
  data() {
    return {
      selectedComponent: "AppLogin",
    };
  },
  methods: {
    switchLoginRegister(whatComponent) {
      this.selectedComponent = whatComponent;
    },
  },
};
</script>

<style>
.login,
.register {
  background: #c4c4c4;
  padding: 0.5rem 1rem;
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
.login-register-active-btn {
  color: #fff !important;
  background-color: #1e6fcf !important;
  font-family: "iransanse-md" !important;
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
</style>
