<template>
  <div>
    <header
      class="container-fluid bg-white position-fixed p-0 z-index-lv1 shadow-0-c"
    >
      <div class="container-fluid container-lg bg-white">
        <nav class="navbar navbar-expand-lg pb-0 navbar-light bg-white ">
          <div class="container-fluid d-flex flex-row-reverse">
            <div id="logo" class="d-flex order-lg-1">
              <div v-if="isLogin" class="dropdown me-lg-5 drop-acc">
                <button
                  class="btn btn-secondary dropdown-toggle rounded-5 p-2 px-3 font-73  d-none d-lg-block"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  محمد محمدی فر
                </button>

                <button
                  class="btn btn-sm btn-icon dropdown-toggle rounded-5 font-102 py-0 d-lg-none d-block"
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
                      href="#"
                      >درخواست های من</router-link
                    >
                  </li>
                  <li>
                    <a class="dropdown-item pe-4 p-2">ایمیل های اطلاع رسانی</a>
                  </li>
                  <li>
                    <a class="dropdown-item pe-4 p-2" href="#">رزومه من</a>
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'Saved' }"
                      class="dropdown-item pe-4 p-2"
                      >فرصت های شغلی ذخیره شده</router-link
                    >
                  </li>
                  <li>
                    <a class="dropdown-item pe-4 p-2" href="#"
                      >تنظیمات حساب کاربری</a
                    >
                  </li>
                  <li><a class="dropdown-item pe-4 p-2" href="#">خروج</a></li>
                </ul>
              </div>

              <router-link
                v-else
                :to="{ name: 'LoginRegister' }"
                class="btn  btn-sm btn-secondary rounded-5 p-2 px-3 font-80 me-lg-5 d-none d-lg-block"
                >ورود / ثبت نام</router-link
              >
            </div>
            <a class="navbar-brand d-flex  me-0 me-lg-3 order-lg-0" href="#">
              <img src="/images/a-lab.png" alt="" />
            </a>
            <button
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
              <div class="navbar-nav ">
                <router-link
                  :to="{ name: 'Home' }"
                  class="nav-link m-2"
                  aria-current="page"
                  >خانه</router-link
                >
                <router-link
                  :to="{ name: 'JobSearch' }"
                  class="nav-link m-2"
                  >جست و جوی مشاغل
                </router-link>
                <a class="nav-link m-2" href="#">ساخت رزومه</a>
                <a class="nav-link m-2" href="#">بخش کارفرمایان</a>
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
export default {
  data() {
    return {
      isLogin: true,
    };
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
  color: #a7a7a7 !important;
  transform: rotate(-90deg) !important;
  margin-left: -0.3rem !important;
}
.drop-acc a {
  border-bottom: 1px dashed #ccc;
}

.drop-acc .dropdown-item:hover {
  color: #1e2125;
  background-color: #e9ecef;
  overflow: hidden;
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
</style>
