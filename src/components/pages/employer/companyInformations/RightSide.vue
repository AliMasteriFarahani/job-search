<template>
  <div class="col-12">
    <div class="shadow-c rounded-3  bg-white">
      <!-- personal information : -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">اطلاعات شرکت</span>
            </div>
            <div class="col-12 pb-3">
              <span
                data-bs-toggle="modal"
                data-bs-target="#company-informations"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i
                  class="fa-solid me-1 font-1 align-middle fa-pen-to-square"
                ></i>
                <span class="font-bd-is">ویرایش</span>
              </span>
              <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
              <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="company-informations"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="company-informations-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5
                        class="modal-title font-1 font-md-is"
                        id="company-informations-label"
                      >
                        اطلاعات شرکت
                      </h5>
                      <button
                        type="button"
                        class="btn-close remove-outline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-12 ps-4 pb-3">
                          <span class="job-logo-palce me-3 align-self-center">
                            <!-- <img
                              src="/images/hex-lab-5.png"
                              class="img-fluid figure-img"
                              alt=""
                            /> -->
                            <span class="text-center d-block line-height-3">logo</span>
                            <!-- <i class="fa-solid fa-user font-3 mt-3 color-gray"></i> -->
                          </span>
                          <span class="d-block mb-2 font-90 font-md-is">لوگو شرکت :</span>
                          <span>
                            <span class="avatar-pic">
              <span class="avatar-upload-btn">
                <span class="font-73"  @click="uploadAvatar()"
                  >افزودن تصویر</span
                >
              </span>
              <input
                ref="avatarUploadBtn"
                type="file"
                class="cursor-pointer opacity-0 w-100"
                name="uploadAvatar"
                @change="getNameOfFile"
              />
            </span>
                          </span>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="company-name"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >نام شرکت / سازمان :</label
                            >
                            <input
                              type="text"
                              id="company-name"
                              name="company-name"
                              class="form-control input-textbox"
                              placeholder="نام شرکت را وارد کنید"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="company-name-en"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >نام سازمان (به انگلیسی) :</label
                            >
                            <input
                              type="text"
                              id="company-name-en"
                              name="company-name-en"
                              class="form-control input-textbox"
                              placeholder="type in english"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="name"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >نام رابط سازمان :</label
                            >
                            <input
                              type="text"
                              id="name"
                              name="name"
                              class="form-control input-textbox font-num-is"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="family"
                              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                            >
                              نام خانوادگی رابط سازمان :</label
                            >
                            <input
                              type="text"
                              id="family"
                              name="family"
                              placeholder=""
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 mb-4 col-md-6">
                          <label
                            for="num-staff"
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                            >تعداد پرسنل :</label
                          >
                          <div
                            class="custom-select simple-scroll z-index-lv2"
                            title="انتخاب کنید ..."
                            data-search-box="false"
                          >
                            <select id="num-staff" name="num-staff">
                              <option value="1">1 - 10</option>
                              <option value="1">10 - 20</option>
                              <option value="1">20 - 50</option>
                              <option value="1">50 - 100</option>
                              <option value="1">100 - 200</option>
                              <option value="1">200 - 300</option>
                              <option value="1">300 - 500</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="address"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >سال تاسیس :</label
                            >
                            <div
                              class="custom-select simple-scroll z-index-lv2"
                              title="انتخاب کنید ..."
                              data-search-box="false"
                            >
                              <select id="num-staff" name="num-staff">
                                <option value="1">1330</option>
                                <option value="1">1330</option>
                                <option value="1">1330</option>
                                <option value="1">1330</option>
                                <option value="1">...</option>
                                <option value="1">1400</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="job-title"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >زمینه فعالیت :</label
                            >
                            <input
                              type="text"
                              id="job-title"
                              name="job-title"
                              placeholder="مثال :   تولید نرم افزار های تحت وب"
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="city"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >شهر :</label
                            >
                            <div
                              class="custom-select z-index-lv2"
                              title="انتخاب کنید ..."
                              data-search-box="true"
                            >
                              <select id="num-staff" name="num-staff">
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                                <option value="1">تهران</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="salary"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >شماره تلفن :</label
                            >
                            <input
                              type="phone"
                              id="phone"
                              name="phone"
                              placeholder="021-xxxxxxxxx"
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="mobile"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >شماره موبایل رابط سازمان :</label
                            >
                            <input
                              type="text"
                              id="mobile"
                              name="mobile"
                              placeholder="09xxxxxxxxx"
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="company-email"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >ایمیل :</label
                            >
                            <input
                              type="text"
                              id="company-email"
                              name="company-email"
                              placeholder="مثال : alifarahani533@gmail.com"
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="site-address"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >آدرس سایت :</label
                            >
                            <input
                              type="text"
                              id="site-address"
                              name="site-address"
                              placeholder="مثال : www.google.com"
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="job-title"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >آدرس :</label
                            >
                            <input
                              type="text"
                              id="job-title"
                              name="job-title"
                              placeholder="مثال :  تهران - ..."
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <button
                            class="btn btn--success float-end border-radius-05 px-3  py-2 shadow-c border-0 mt-1 font-90 text-white"
                          >
                            ذخیره
                          </button>
                          <button
                            type="button"
                            class="btn btn--close float-end border-radius-05 px-3 py-2 shadow-c border-0 mt-1 font-90 text-white me-2"
                            data-bs-dismiss="modal"
                          >
                            انصراف
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
            <!--  -->
            <div class="col-12">
              <div class="row">
                <div
                  class="col-md-1 pb-2 d-flex d-md-block justify-content-center border-bm-c border-md-0 ms-md-5"
                >
                  <span class="job-logo-palce align-self-center">
                    <img
                      src="/images/hex-lab-5.png"
                      class="img-fluid figure-img"
                      alt=""
                    />
                  </span>
                </div>
                <div class="col">
                  <div class="row mt-2 ps-4">
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">نام شرکت / سازمان :</div>
                      <div class="mt-2">شرکت داده پرداز ایران زمین</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">
                        نام شرکت / سازمان (به انگلیسی) :
                      </div>
                      <div class="mt-2">dadeh gostare asre iran zamin</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">نام رابط سازمان :</div>
                      <div class="mt-2 ">سحر</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">نام خانوادگی رابط سازمان :</div>
                      <div class="mt-2 ">مهدوی فر</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">تعداد پرسنل :</div>
                      <div class="mt-2 font-num-is">142 نفر</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">سال تاسیس :</div>
                      <div class="mt-2 font-num-is">1385</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">زمینه فعالیت :</div>
                      <div class="mt-2">تولید نرم افزار</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">شهر :</div>
                      <div class="mt-2">اراک</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">شماره تلفن :</div>
                      <div class="mt-2 font-num-is">09338544556</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">شماره موبایل رابط سازمان :</div>
                      <div class="mt-2 font-num-is">09122222222</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">ایمیل :</div>
                      <div class="mt-2">alilfarajgahgsd@gmail.com</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">آدرس سایت :</div>
                      <div class="mt-2">www.google.com</div>
                    </div>
                    <div class="col-12 mb-4 col-md-6">
                      <div class="font-bd-is">آدرس :</div>
                      <div class="mt-2 font-num-is">
                        تهران - خیابان فردوسی -خیابان رودکی
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <!-- about company : -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">درباره شرکت</span>
            </div>
            <div class="col-12 pb-3">
              <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i
                  class="fa-solid me-1 font-1 align-middle fa-pen-to-square"
                ></i>
                <span class="font-bd-is">ویرایش</span>
              </span>
              <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
              <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="about-me"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="about-me-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5
                        class="modal-title font-1 font-md-is"
                        id="about-me-label"
                      >
                        درباره شرکت
                      </h5>
                      <button
                        type="button"
                        class="btn-close remove-outline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-12">
                          <div class="mb-4">
                            <label
                              for="about-me-descriptions"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >توضیحات :</label
                            >

                            <textarea
                              class="form-control remove-outline"
                              placeholder="سعی کنید متنی کوتاه و مفید درباره خودتان و مهارت هایتان بنویسید"
                              id="floatingTextarea2"
                              style="height: 100px"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-12">
                          <button
                            class="btn btn--success float-end border-radius-05 px-3  py-2 shadow-c border-0 mt-1 font-90 text-white"
                          >
                            ذخیره
                          </button>
                          <button
                            type="button"
                            class="btn btn--close float-end border-radius-05 px-3 py-2 shadow-c border-0 mt-1 font-90 text-white me-2"
                            data-bs-dismiss="modal"
                          >
                            انصراف
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
            <!--  -->
            <div class="col-12">
              <div class="row mt-2 ps-4">
                <div class="col-12 mb-4">
                  <p>
                    شرکت داده پرداز عضر ایران زمین از سال 1388 فعالیت خود را در
                    زمینه ی تو لید نرم افزار های کامپوتری شروع کرده و با بسیاری
                    از سازمان ها ی دولتی و غیر دولتی همکاری دارد
                  </p>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>

      <!--  -->
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
.section-title {
  background: #eee;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  position: relative;
  top: -0.7rem;
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

.skill,
.skill-level {
  padding: 0.5rem 1rem;
  text-align: center;
  display: inline-block;
  font-family: "iransanse-bd";
}
.skill {
  background-color: #fcc45c;
  border-radius: 0 0.5rem 0.5rem 0;
  border-left: 1px solid #fff;
  position: relative;
}
.skill-level {
  background-color: #74d4f4;
  border-radius: 0.5rem 0 0 0.5rem;
  border-right: 1px solid #fff;
}
.login-register-active-btn {
  color: #fff !important;
  background-color: #1e6fcf !important;
  font-family: "iransanse-md" !important;
}
.circle-middle {
  display: inline-block;
  background: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -0.55rem;
  transform: translate(0, -50%);
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
</style>
