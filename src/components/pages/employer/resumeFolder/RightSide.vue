<template>
  <div class="col-12">
    <div class="shadow-c rounded-3 p-3 bg-white min-h-70vh">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <div class="bg--green-36 rounded-3 p-3 my-3">
                <h3 class="font-1 m-0">پوشه (برنامه نویس وب)</h3>
              </div>
            </div>
            <div class="col-10 offset-1">
              <div class="row mt-3 overflow-auto flex-nowrap overflow-y-hidden">
                <span
                  :class="[
                    'font-80 col-auto job-sa active me-3 d-inline-block',
                    { active: this.$route.path === '/job/requests' },
                  ]"
                >
                  <router-link :to="{ name: 'Requests' }">
                    همه
                    <span class="color-sky font-num-bd-is"
                      >(20)</span
                    ></router-link
                  >
                </span>
                <span
                  :class="[
                    'font-80 col-auto job-sa me-3 d-inline-block',
                    { active: this.$route.path === '/job/saved' },
                  ]"
                >
                  <router-link :to="{ name: 'Saved' }">
                    تائید شده ها
                    <span class="color-sky font-num-bd-is"
                      >(20)</span
                    ></router-link
                  >
                </span>
                <span
                  :class="[
                    'font-80 col-auto job-sa me-3 d-inline-block',
                    { active: this.$route.path === '/job/saved' },
                  ]"
                >
                  <router-link :to="{ name: 'Saved' }">
                    رد شده ها
                    <span class="color-sky font-num-bd-is"
                      >(20)</span
                    ></router-link
                  >
                </span>
                <span
                  :class="[
                    'font-80 col-auto job-sa me-3 d-inline-block',
                    { active: this.$route.path === '/job/saved' },
                  ]"
                >
                  <router-link :to="{ name: 'Saved' }">
                    در انتظار بررسی
                    <span class="color-sky font-num-bd-is"
                      >(20)</span
                    ></router-link
                  >
                </span>
                <span
                  :class="[
                    'font-80 col-auto job-sa me-3 d-inline-block',
                    { active: this.$route.path === '/job/saved' },
                  ]"
                >
                  <router-link :to="{ name: 'Saved' }">
                    ذخیره شده ها
                    <span class="color-sky font-num-bd-is"
                      >(20)</span
                    ></router-link
                  >
                </span>
              </div>
              <div class="row mb-3">
                <div class="col border-bm-dashed-c mt-05-"></div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                  <div class="resume-card mt-5">
                    <div class="avatar shadow-c">
                      <img
                        src="/images/avatars/user.jpg"
                        width="100%"
                        height="100%"
                        class="rounded-circle"
                        alt="avatar"
                      />
                      <!-- <i v-else class="fa-solid fa-user font-3 mt-3 color-gray"></i> -->
                    </div>
                    <div class="text-center">
                      <a href="" class="text-dark font-1 font-bd-is text-underline">علی ماستری فراهانی</a>
                    </div>
                    <div class="mt-4 mb-3 ps-3">
                      <span class="font-90 me-2">عنوان شغلی :</span
                      ><span class="font-90 font-md-is">برنامه نویس وب</span>
                    </div>
                    <div class="mt-2 mb-3 ps-3">
                      <span class="font-90 me-2">شهر :</span
                      ><span class="font-90 font-md-is">تهران</span>
                    </div>
                    <div class="mt-2 mb-3 ps-3">
                      <span class="font-90 me-2">تاریخ ارسال رزومه :</span
                      ><span dir="ltr" class="font-90 font-num-bd-is"
                        >1400-01-02</span
                      >
                    </div>
                    <div class="mt-2 mb-3 ps-3">
                      <span class="font-90 me-2">وضعیت :</span
                      ><span dir="ltr" class="font-90 active">تایید شده</span>
                    </div>
                    <div class="mt-2 mb-3 ps-3">
                      <span class="font-90 me-2">
                        <a href="">مشاهده رزومه</a>
                      </span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <!-- end of  job similar item  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { customSelectMixin } from "@/Mixins/customSelectMixin";
export default {
  mixins: [customSelectMixin],
  data() {
    return {
      uploadResumeFileName: "",
      uploadAvatarFileName: "",
    };
  },
  methods: {
    enableDisableUploadResume() {
      let uploadResumeInp = this.$refs.uploadResumeInp;
      let hasDisabled = uploadResumeInp.hasAttribute("disabled");
      if (hasDisabled) {
        uploadResumeInp.removeAttribute("disabled");
      } else {
        uploadResumeInp.setAttribute("disabled", "disabled");
      }
      this.$refs.customUpload.classList.toggle("enable-upload-btn");
    },

    getNameOfFile(event) {
      if (event.target.name === "uploadResume") {
        this.uploadResumeFileName = event.target.files[0].name;
      } else if (event.target.name === "uploadAvatar") {
        this.uploadAvatarFileName = event.target.files[0].name;
      }
    },
    uploadAvatar() {
      // let clickEvent = new Event('click');
      // this.$refs.f8.dispatchEvent(clickEvent);
      this.$refs.avatarUploadBtn.click();
    },
  },
};
</script>

<style>
@import url("../../../../assets/plugins/custom-select/css/custom-select.css");
.resume-card {
border-radius: 10px;
    border: 1px solid #ececec;
    box-shadow: 0 0 10px #eee;
}


/* width */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar {
  width: 0.4rem;
}

/* Track */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-track {
  background: #c9c9c9;
  border-radius: 0;
}

/* Handle */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-thumb {
  background: rgb(121, 120, 120);
  border-radius: 5px;
}

/* Handle on hover */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.modal-header {
  border-bottom: 1px dashed #dee2e6 !important;
}
.custom-option-item,
.custom-option-selected {
  font-family: "iransanse-num" !important;
}
.avatar {
  width: 5.5rem;
  height: 5.5rem;
  background: #fff;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: -2.5rem;
}
.avatar-pic {
  width: 6rem;
  position: relative;
  display: inline-block;
}
.avatar-upload-btn {
  position: absolute;
  display: inline-block;
  width: 100%;
  right: 0;
  cursor: pointer !important;
  color: #757575;
}
.avatar-upload-btn span {
  color: #0fc0db;
  border-bottom: 1px dashed #0fc0db;
}
.avatar-pic input {
  height: 0 !important;
}
.status-active {
  color: #368b01;
  background: #deffba;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-family: "iransanse-bd" !important;
}
.adv-empr {
  border: 1px solid #c9c9c9;
  border-radius: 7px;
}
.job-sa {
  border-bottom: 2px solid transparent;
  padding: 0.2rem 0.2rem 0.4rem 0.5rem;
  position: relative;
}
.job-sa a {
  color: #000 !important;
  font-family: "iransanse-md" !important;
}
.job-sa.active {
  border-bottom: 2px solid #ef8603 !important;
  color: #4dbcf0 !important;
}
.job-sa.active a {
  color: #ef8603 !important;
  font-family: "iransanse-md" !important;
}
</style>
