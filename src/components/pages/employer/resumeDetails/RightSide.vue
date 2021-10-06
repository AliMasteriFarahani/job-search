<template>
  <div class="col-12">
    <div class="shadow-c pb-5 rounded-3 p-3 bg-white min-h-70vh">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <div class="bg--green-36 rounded-3 p-3 my-3">
                <h3 class="font-1 m-0">پوشه (برنامه نویس وب)</h3>
              </div>
            </div>
            <div class="col-10 offset-1">
              <div class="row">
                <div class="col-12 order-0 col-md-9">
                  <div class="d-flex">
                    <span class="avatar d-inline-block shadow-c ">
                      <img
                        src="/images/avatars/user.jpg"
                        width="100%"
                        height="100%"
                        class="rounded-circle"
                        alt="avatar"
                      />
                      <!-- <i v-else class="fa-solid fa-user font-3 mt-3 color-gray"></i> -->
                    </span>
                    <span class="ps-3">
                      <div class="mt-2">علی ماستری فراهانی</div>
                      <div class="mt-3 font-95">برنامه نویس وب</div>
                    </span>
                  </div>
                </div>
                <div
                  class="col-12 mt-3 mt-md-0 order-last order-md-1 d-flex justify-content-end col-md-3"
                >
                  <div class="flex-grow-1">
                    <div
                      class="custom-select z-index-lv2"
                      title="وضعیت"
                      data-search-box="false"
                    >
                      <select id="city" name="city">
                        <option value="0">در انتظار بررسی </option>
                        <option value="0">رد</option>
                        <option value="0">تایید </option>
                      </select>
                    </div>
                  </div>
                  <span class="ms-2 similar-bookmark">
                    <i class="fa-regular fa-bookmark font-105"></i>
                  </span>
                </div>
                <div class="col-12 order-md-last order-1">
                  <div
                    class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap"
                  >
                    <span class="me-3 mb-2 mb-md-0">
                      <span class="ms-1">تاریخ ارسال رزومه :</span>
                      <span class="ms-1 font-num-bd-is text-black" dir="ltr"
                        >1400-1-1</span
                      >
                    </span>
                    <span class="me-3 mb-2 mb-md-0">
                      <span class="ms-1">شهر :</span>
                      <span class="ms-1 font-num-bd-is text-black">تهران</span>
                    </span>
                    <span class="me-3">
                      <span class="ms-1">وضعیت :</span>
                      <span class="ms-1 status-active ">تایید</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mt-4 border-r pb-2">
                    <h3 class="font-1 ps-3 pt-2 font-md-is">اطلاعات تماس :</h3>
                    <div class="border-dashed"></div>
                    <div class="pt-3 ps-3">
                      <span class="font-95 ms">شماره تماس :</span>
                      <span class="font-num-is ">09335555555</span>
                    </div>
                    <div class="pt-3 ps-3">
                      <span class="font-95 ms">ایمیل :</span>
                      <span class="font-num-is">alifarahani533@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12 col-md-6 mb-2">
                  <div
                    class="border-r px-3 py-2 d-flex justify-content-between"
                  >
                    <span class="font-md-is font-90">رزومه :</span>
                    <span>
                      <a
                        href=""
                        class="d-inline-block text-underline font-85 me-3"
                        >مشاهده</a
                      >
                      <a href="" class="d-inline-block text-underline font-85"
                        >دانلود</a
                      >
                    </span>
                  </div>
                </div>
                <div class="col-12 col-md-6 mb-2">
                  <div
                    class="border-r px-3 py-2 d-flex justify-content-between"
                  >
                    <span class="font-md-is font-90">رزومه ضمیمه :</span>
                    <span>
                      <a
                        href=""
                        class="d-inline-block text-underline font-85 me-3"
                        >مشاهده</a
                      >
                      <a href="" class="d-inline-block text-underline font-85"
                        >دانلود</a
                      >
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mt-4 border-r ">
                    <h3 class="font-1 ps-3 pt-2 font-md-is">یادداشت ها</h3>
                    <div class="border-dashed"></div>
                    <div class="col-12">
                      <div class="row ps-4">
                        <div class="col-12">
                          <div class="row mt-3 me-2 border-bm-c">
                            <div class="col">
                              <p class="font-95">
                                کارشناسی - مهندسی تکنولوژی نرم افزار کارشناسی -
                                مهندسی تکنولوژی نرم افزار کارشناسی - مهندسی
                                تکنولوژی نرم افزار کارشناسی - مهندسی تکنولوژی
                                نرم افزار کارشناسی - مهندسی تکنولوژی نرم افزار
                                کارشناسی - مهندسی تکنولوژی نرم افزار
                              </p>
                            </div>
                            <div class="col-12 col-md-2">
                              <span
                                data-bs-toggle="modal"
                                data-bs-target="#educational-records"
                                class="float-end font-102 cursor-pointer text-underline font-md-is"
                              >
                                <i
                                  class="fa-solid fa-trash-can color--danger"
                                ></i>
                              </span>
                              <span
                                data-bs-toggle="modal"
                                data-bs-target="#educational-records"
                                class="float-end font-102 me-2 cursor-pointer color-sky text-underline font-md-is"
                              >
                                <i
                                  class="fa-solid me-1 color-sky  fa-pen-to-square"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 py-2">
                          <span
                            data-bs-toggle="modal"
                            data-bs-target="#educational-records"
                            class="float-end font-90 cursor-pointer me-3 text-underline font-md-is"
                          >
                            <i
                              class="fa-solid font-2 color--success fa-circle-plus"
                            ></i>
                          </span>
                          <!-- modal -->

                          <!-- modal end -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <h3 class="font-1 font-md-is">پوشه ها :</h3>
                </div>
                <div class="col-12 mt-2 mb-2">
                  <div class="border-dashed"></div>
                </div>
                <div class="col-12 mt-2">
                  <span class="folder">برنامه نویس وب</span>
                  <span class="folder">برنامه نویس وب</span>
                  <span class="folder">برنامه نویس وب</span>
                </div>
                <div class="col-12 mt-4">
                  <div class="row">
                    <div class="col-12 col-md-2">
                      <span class="font-90 font-md-is">افزودن به :</span>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                      <div
                        class="custom-select z-index-lv2"
                        title="پوشه ها"
                        data-search-box="false"
                      >
                        <select id="city" name="city">
                          <option value="0">برنامه نویس وب </option>
                          <option value="0">طراح</option>
                          <option value="0">فول استک </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col">
                  <h3 class="font-1 font-md-is">تاریخچه ارسال رزومه :</h3>
                </div>
                <div class="col-12 mt-2 mb-2">
                  <div class="border-dashed"></div>
                </div>
                <div class="col-12">
                  <a href="" class="text-underline">استخدام برنامه نویس فول استک وب</a>
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
  /* margin: 0 auto;
  position: relative;
  top: -2.5rem; */
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

.folder {
  padding: 0.3rem 0.5rem;
  background-color: #eee;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-left: 1rem;
  margin-bottom: .5rem;
  display: inline-block;
}
</style>
