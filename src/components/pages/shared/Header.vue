<template>
  <div>
    <header
      class="container-fluid bg-white position-fixed p-0 z-index-lv1 shadow-0-c"
    >
      <div :class="['container-fluid container-lg bg-white', shadow]">
        <nav class="navbar navbar-expand-lg pb-0 navbar-light bg-white">
          <div class="container-fluid mt-2 mt-lg-0 d-flex flex-row-reverse">
            <div id="logo" class="d-flex order-lg-1">
              <div
                v-if="getIsUserAuthenticated"
                class="dropdown me-lg-5 drop-acc"
              >
                <button
                  class="
                    btn btn-secondary
                    dropdown-toggle
                    rounded-5
                    p-2
                    px-3
                    font-73
                    --btn-cyan-1
                    d-none d-lg-block
                  "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ getUsername }}
                </button>
                <button
                  class="
                    btn btn-sm btn-icon
                    dropdown-toggle
                    rounded-5
                    font-102
                    py-0
                    d-lg-none d-block
                  "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
                <ul
                  class="dropdown-menu p-0 font-75"
                  dir="ltr"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <router-link
                      :to="{ name: 'Requests' }"
                      class="dropdown-item pe-4 p-2"
                      >
                      درخواست های من</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'Saved' }"
                      class="dropdown-item pe-4 p-2"
                      >فرصت های شغلی ذخیره شده</router-link
                    >
                  </li>
                  <!-- <li>
                    <a class="dropdown-item pe-4 p-2">ایمیل های اطلاع رسانی</a>
                  </li> -->
                  <li>
                    <router-link
                      :to="{ name: 'Resume' }"
                      class="dropdown-item pe-4 p-2"
                      >رزومه من</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'EmployeeSettings' }"
                      class="dropdown-item pe-4 p-2"
                      >تنظیمات حساب کاربری</router-link
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item cursor-pointer pe-4 p-2"
                      @click="signOutUser()"
                      >خروج</a
                    >
                  </li>
                  <button
                    class="
                      btn btn-sm
                      --dismiss-dropdown
                      btn-icon
                      rounded-5
                      font-102
                      py-0
                      d-sm-none d-block
                    "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="far fa-regular fa-xmark"></i>
                  </button>
                </ul>
              </div>

                <template v-else>
                             <router-link
                
                :to="{ name: 'Login' }"
                class="btn --btn-cyan-1 btn-sm btn-secondary rounded-5 p-2 px-3 font-80 me-lg-5 d-none d-md-block"
                >ورود / ثبت نام</router-link
              >
                             <router-link
                
                :to="{ name: 'Login' }"
                class=" font-75 me-lg-5 d-block d-md-none"
                >ورود / ثبت نام</router-link
              >
                </template>
        
            </div>
            <a class="navbar-brand d-flex me-0 me-lg-3 order-lg-0" href="/">
              <img src="/images/logo2.png" width="30px" height="30px" alt="" />
            </a>
            <button
              @click="shadowShow()"
              class="navbar-toggler border-0 order-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse order-4"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav">
                <router-link
                  :to="{ name: 'Home' }"
                  class="nav-link m-2"
                  aria-current="page"
                  >   <i class="fa-regular fa-house"></i>
                  خانه
                  
                  </router-link
                >
                <router-link :to="{ name: 'JobSearch' }" class="nav-link m-2"
                  ><i class="fa-regular fa-magnifying-glass"></i>
                  جست و جوی مشاغل
                </router-link>
                <router-link
                  v-if="getIsUserAuthenticated"
                  :to="{ name: 'Resume' }"
                  class="nav-link m-2"
                  ><i class="fa-regular fa-file-lines"></i>
                  ساخت رزومه</router-link
                >
                <a v-if="!getIsUserAuthenticated" class="nav-link m-2" href="https://employer.jobout.ir"
                  ><i class="fa-regular fa-building"></i>
                  بخش کارفرمایان</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="menu-placeholder"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isLogin: false,
      shadow: "",
      tt: "",
    };
  },
  computed: {
    ...mapGetters(["getIsUserAuthenticated", "getUsername", "getEmployeeId"]),
  },
  methods: {
    ...mapActions(["checkIsUserAuthenticated", "signOutUser"]),
    shadowShow() {
      this.shadow === ""
        ? (this.shadow = "shadow-mlg-0-c")
        : (this.shadow = "");
    },
    // if (document.querySelector('.navbar-collapse').classList.contains('show')) {
    //   document.querySelector('header > div').classList.add('shadow-mlg-0-c')
    // }
  },
  created() {
    // this.checkIsUserAuthenticated();
  },
};
</script>

<style scoped>
/* menu item customization */

.navbar-nav a {
  color: #000 !important;
  font-size: 0.93rem !important;
}

.navbar-nav .nav-link:hover {
  color: rgb(77, 188, 240) !important;
}

.container-fluid.position-fixed {
  height: 66px;
}

.menu-placeholder {
  height: 66px;
  width: 100%;
  display: block;
}
.drop-acc .dropdown-toggle::after {
  display: inline-block;
  margin-right: 0.5rem;
  vertical-align: 0;
  border-top: 0;
  border-left: 0;
  border-bottom: 0;
  border-right: 0;
  content: "\276F" !important;
  color: #f1f1f1 !important;
  transform: rotate(-90deg) !important;
  margin-left: -0.3rem !important;
}
.drop-acc a {
  border-bottom: 1px dashed #ccc;
  border-right: 3px solid transparent;
  font-family: "iransanse-md";
  color: #000000 !important;
}

.drop-acc .dropdown-item:hover {
  /* color: #1e2125;
  background-color: #e9ecef;
  overflow: hidden; */
  color: #000000 !important;
  background-color: #f3f3f3;
  overflow: hidden;
  border-right: 3px solid #e9bc16;
}
.drop-acc ul.dropdown-menu {
  top: 2.5rem !important;
  left: -0.5rem !important;
  right: inherit;
  margin-top: 0.125rem !important;
}
.drop-acc .btn-icon.dropdown-toggle::after {
  content: none !important;
}
.--dismiss-dropdown {
  position: fixed;
  top: 0.2rem;
  left: 0.2rem;
  background: #eee;
}
@media (max-width: 576px) {
  .drop-acc ul.dropdown-menu {
    position: fixed;
    top: 0 !important;
    left: 0;
    right: 0;
    margin-top: 0 !important;
  }
}
</style>
