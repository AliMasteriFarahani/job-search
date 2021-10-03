<template>
  <div class="col-12">
    <div class="shadow-c rounded-3 p-3 bg-white min-h-70vh">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <div class="bg--green-36 rounded-3 p-3 my-3">
                <h3 class="font-1 m-0">لیست آگهی ها</h3>
              </div>
            </div>
            <div class="col-10 offset-1">
              <div class="row">
                <div class="col-12 order-0">
                  <button
                    class="btn bg--green-04 float-end border-radius-05 px-3  py-2 shadow-c border-0 mt-1 font-90 text-white"
                  >
                    افزودن آگهی
                  </button>
                </div>
                <div class="col-12">
                  <div class="row mt-3">
                    <div class="col-12 mb-2 col-md-10 order-2 order-md-1">
                      <div class="mb-2">
                        <input
                          type="text"
                          id="job-title"
                          name="job-title"
                          placeholder="عنوان آگهی را جست و جو کنید"
                          class="form-control input-textbox"
                        />
                      </div>
                    </div>
                    <div class="col  order-1 order-md-2">
                      <div class="mb-2">
                        <div
                          class="custom-select z-index-lv2"
                          title="مرتب سازی"
                          data-search-box="false"
                        >
                          <select id="num-staff" name="num-staff">
                            <option value="1">همه آگهی ها</option>
                            <option value="1">فعال</option>
                            <option value="1">منقضی شده</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 order-3 mb-3 mt-1">
                  <div class=" border-bm-dashed-c"></div>
                </div>
                <!-- job similar item : -->
                <div class="col-12 mb-3 order-last">
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="w-100 mb-3 adv-empr p-2"
                      >
                        <div class="row">
                          <div class="col ms-3">
                            <router-link to="/"
                              ><h3 class="font-90 font-bd-is text-underline mt-1 d-inline">
                                استخدام کارشناس بازاریابی
                              </h3></router-link
                            >
                            <div
                              class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap"
                            >
                              <span class="me-3 mb-2 mb-md-0">
                                <span class="ms-1">تاریخ انتشار آگهی :</span>
                                <span class="ms-1 font-num-bd-is text-black" dir="ltr">1400-1-1</span>
                              </span>
                              <span class="me-3 mb-2 mb-md-0">
                                <span class="ms-1">مهلت :</span>
                                <span class="ms-1 font-num-bd-is text-black">26 روز دیگر</span>
                              </span>
                              <span class="me-3">
                                <span class="ms-1">وضعیت :</span>
                                <span class="ms-1 status-active ">فعال</span>
                              </span>
                              <span class="me-3">
                                <span class="ms-1">تعداد متقاضی :</span>
                                <span class="ms-1 font-num-bd-is text-black">10 نفر</span>
                              </span>
                            </div>
                          </div>
                          <div class="col-12 col-md-3 similar-bookmark">
                            <div
                              class="border-bm-dashed-c mt-1 mb-3 d-block d-md-none"
                            ></div>
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
                              class="float-end font-102 mx-2 cursor-pointer color-sky text-underline font-md-is"
                            >
                              <i
                                class="fa-solid me-1 color-sky  fa-pen-to-square"
                              ></i>
                            </span>
                            <span class="font-85 float-end"
                              ><a
                                class="font-md-is font-85 text-underline color-sky"
                                href=""
                                >لیست متقاضیان</a
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                      <!-- end -->
                      <div
                        class="w-100 mb-3 adv-empr p-2"
                      >
                        <div class="row">
                          <div class="col ms-3">
                            <router-link to="/"
                              ><h3 class="font-90 font-bd-is text-underline mt-1 d-inline">
                                استخدام کارشناس بازاریابی
                              </h3></router-link
                            >
                            <div
                              class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap"
                            >
                              <span class="me-3 mb-2 mb-md-0">
                                <span class="ms-1">تاریخ انتشار آگهی :</span>
                                <span class="ms-1 font-num-bd-is text-black" dir="ltr">1400-1-1</span>
                              </span>
                              <span class="me-3 mb-2 mb-md-0">
                                <span class="ms-1">مهلت :</span>
                                <span class="ms-1 font-num-bd-is text-black">26 روز دیگر</span>
                              </span>
                              <span class="me-3">
                                <span class="ms-1">وضعیت :</span>
                                <span class="ms-1 status-active ">فعال</span>
                              </span>
                              <span class="me-3">
                                <span class="ms-1">تعداد متقاضی :</span>
                                <span class="ms-1 font-num-bd-is text-black">10 نفر</span>
                              </span>
                            </div>
                          </div>
                          <div class="col-12 col-md-3 similar-bookmark">
                            <div
                              class="border-bm-dashed-c mt-1 mb-3 d-block d-md-none"
                            ></div>
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
                              class="float-end font-102 mx-2 cursor-pointer color-sky text-underline font-md-is"
                            >
                              <i
                                class="fa-solid me-1 color-sky  fa-pen-to-square"
                              ></i>
                            </span>
                            <span class="font-85 float-end"
                              ><a
                                class="font-md-is font-85 text-underline color-sky"
                                href=""
                                >لیست متقاضیان</a
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                      <!-- end -->
                      <div
                        class="w-100 mb-3 adv-empr p-2"
                      >
                        <div class="row">
                          <div class="col ms-3">
                            <router-link to="/"
                              ><h3 class="font-90 font-bd-is text-underline mt-1 d-inline">
                                استخدام کارشناس بازاریابی
                              </h3></router-link
                            >
                            <div
                              class="mt-4 color-73 font-xs-73 font-sm-80 d-flex flex-wrap"
                            >
                              <span class="me-3 mb-2 mb-md-0">
                                <span class="ms-1">تاریخ انتشار آگهی :</span>
                                <span class="ms-1 font-num-bd-is text-black" dir="ltr">1400-1-1</span>
                              </span>
                              <span class="me-3 mb-2 mb-md-0">
                                <span class="ms-1">مهلت :</span>
                                <span class="ms-1 font-num-bd-is text-black">26 روز دیگر</span>
                              </span>
                              <span class="me-3">
                                <span class="ms-1">وضعیت :</span>
                                <span class="ms-1 status-active ">فعال</span>
                              </span>
                              <span class="me-3">
                                <span class="ms-1">تعداد متقاضی :</span>
                                <span class="ms-1 font-num-bd-is text-black">10 نفر</span>
                              </span>
                            </div>
                          </div>
                          <div class="col-12 col-md-3 similar-bookmark">
                            <div
                              class="border-bm-dashed-c mt-1 mb-3 d-block d-md-none"
                            ></div>
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
                              class="float-end font-102 mx-2 cursor-pointer color-sky text-underline font-md-is"
                            >
                              <i
                                class="fa-solid me-1 color-sky  fa-pen-to-square"
                              ></i>
                            </span>
                            <span class="font-85 float-end"
                              ><a
                                class="font-md-is font-85 text-underline color-sky"
                                href=""
                                >لیست متقاضیان</a
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                      <!-- end -->
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
.status-active{
    color: #368b01;
    background: #deffba;
    padding: .25rem .5rem;
    border-radius: .5rem;
    font-family: 'iransanse-bd' !important;
}
.adv-empr{
  border: 1px solid #c9c9c9;
  border-radius: 7px;
}
</style>
