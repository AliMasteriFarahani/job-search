<template>
  <div class="col-12 col-lg-3 col-lg-28 mt-3 mt-lg-0">
    <div class="border-r left-side bg-white">
      <div class="row">
        <div class="col-12">
          <div class="bg-c1 p-3 float-start w-100 text-center">
            <div class="avatar shadow-c">
              <span v-if="isExAvatar == true" key="avatar-emp">
                <img
                  :src="
                    getEmployeeFolder +
                    '/' +
                    employeeId +
                    '/avatar/' +
                    getAvatar
                  "
                  width="100%"
                  height="100%"
                  class="rounded-circle"
                  alt="avatar"
                />
              </span>
              <span v-if="isExAvatar == false">
                <i class="fa-solid fa-user font-3 mt-3 color-gray"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="row mt-4" v-if="resumeEdit">
        <div class="col mt-3">
          <template v-if="getAvatar == ''">
            <form class="d-flex justify-content-center">
              <span class="avatar-pic">
                <span class="avatar-upload-btn">
                  <i class="fa-solid fa-camera font-85 me-2"></i>
                  <span class="font-73" @click="browseAvatarFile()"
                    >افزودن تصویر</span
                  >
                </span>
                <input
                  ref="avatarUploadBtn"
                  accept=".jpg,.jpeg,.png"
                  type="file"
                  class="cursor-pointer opacity-0 w-100"
                  name="uploadAvatar"
                  @change="uploadAvatar($event)"
                />
                <span
                  v-if="!$v.avatar.fileSize && $v.avatar.$dirty"
                  class="font-num-is invalid-feedback"
                >
                  حداکثر 2 مگابایت
                </span>
                <span
                  v-if="
                    !$v.avatar.imageType &&
                    $v.avatar.$dirty &&
                    $v.avatar.fileSize
                  "
                  class="invalid-feedback"
                  >فرمت نامعتبر</span
                >
              </span>
            </form>
          </template>
          <template v-if="getAvatar != ''">
            <div class="d-flex justify-content-center mt-1">
              <span class="avatar-pic">
                <span
                  @click="removeAvatar()"
                  class="avatar-upload-btn remove-avatar"
                >
                  <i class="fa-solid fa-trash-can font-85 me-2"></i>
                  <span class="font-73"> حذف تصویر</span>
                </span>
                <!-- <input
                  ref="avatarUploadBtn"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  class="cursor-pointer opacity-0 w-100"
                  name="uploadAvatar"
                  @change="getNameOfFile"
                /> -->
              </span>
            </div>
          </template>
          <div class="border-bm-dashed-c mt-2"></div>
        </div>
      </div>
      <div
        :class="['row mb-2', { 'mt-5': !resumeEdit }, { 'mt-3': resumeEdit }]"
      >
        <div class="col-12">
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1">نام و نام خانوادگی : </span>
            <span class="font-xs-80 font-bd-is font-sm-90 mt-1"
              >{{
                getResumeLeftSideInfo.name != null
                  ? getResumeLeftSideInfo.name + " "
                  : "-"
              }}
              {{
                getResumeLeftSideInfo.family != null
                  ? getResumeLeftSideInfo.family
                  : "-"
              }}
            </span>
          </div>
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1">عنوان شغلی : </span>
            <span class="font-xs-80 font-bd-is font-sm-90 mt-1">{{
              getResumeLeftSideInfo.jobTitle != null
                ? getResumeLeftSideInfo.jobTitle
                : "-"
            }}</span>
          </div>
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1">وضعیت رزومه :</span>
            <span class="font-xs-80 font-sm-90 mt-1"
              ><span class="font-num-bd-is color-sky font-bd-is">80%</span>
              تکمیل</span
            >
          </div>
          <div class="ms-4 mb-3" v-if="!resumeEdit">
            <router-link
              :to="{ name: 'Resume' }"
              class="font-90 mt-1 color-sky font-bd-is text-underline"
              >بروز رسانی رزومه</router-link
            >
          </div>
          <div class="ms-4 mb-3">
            <div class="form-check">
              <input
                @click="enableDisableUploadResume"
                class="
                  form-check-input
                  upload-resume-checkbox
                  remove-outline
                  cursor-pointer
                "
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                class="form-check-label font-90 cursor-pointer"
                for="flexCheckChecked"
              >
                آپلود رزومه(ضمیمه)
              </label>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="w-75 custom-upload" ref="customUpload">
              <input
                @change="uploadResumeAttach($event)"
                ref="uploadResumeInp"
                accept=".pdf"
                type="file"
                id="upload-resume"
                disabled="disabled"
                name="uploadResume"
              />
              <!-- @change="getNameOfFile" -->
              <div class="custom-upload-content">
                <span class="font-80">انتخاب فایل رزومه</span>
                <i class="fa-solid fa-upload font-80"></i>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
               <span
                v-if="!$v.resumeAttach.fileSize && $v.resumeAttach.$dirty"
                class="text-center font-num-is invalid-feedback"
              >
                حداکثر 3 مگابایت
              </span>
               <span
                v-if="!$v.resumeAttach.docType && $v.resumeAttach.fileSize && $v.resumeAttach.$dirty"
                class="text-center font-num-is invalid-feedback"
              >
                فرمت نامعتبر
              </span>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <p class="resume-upload-file-name font-73">
              {{ resumeAttachFile }}
            </p>
          </div>
          <!-- <div v-if="resumeEdit" class="mb-3 px-2 d-flex justify-content-center">
            <button
              class="btn w-100 btn-success bg-green border-radius-05 px-5 py-2 shadow-c border-0 mt-1 font-1 text-white"
            >
              ذخیره
            </button>
          </div> -->
          <template v-if="showBtn">
            <div class="ms-4 mb-3">
              <div class="form-check form-switch">
                <input
                  v-model="sendSimilars"
                  :disabled="getIsJobApplied == 1"
                  class="
                    form-check-input
                    upload-resume-checkbox
                    remove-outline
                    cursor-pointer
                  "
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  :checked="sendSimilars"
                />
                <label
                  class="form-check-label font-80"
                  for="flexSwitchCheckChecked"
                  >آگهی های مشابه را به من اطلاع بده</label
                >
              </div>
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <button
                v-if="getIsJobApplied == 0"
                @click="sendResume()"
                :disabled="getIsJobApplied == 1 || getPersonalInfo == ''"
                type="submit"
                class="
                  btn
                  w-75
                  btn-success
                  bg-green
                  border-radius-05
                  px-5
                  py-2
                  shadow-c
                  border-0
                  mt-1
                  font-1
                  text-white
                "
              >
                ارسال رزومه
              </button>
              <button
                v-if="getIsJobApplied == 1"
                :disabled="getIsJobApplied == 1"
                class="
                  btn
                  w-75
                  btn-success
                  bg-green
                  border-radius-05
                  px-5
                  py-2
                  shadow-c
                  border-0
                  mt-1
                  font-70
                  text-white
                "
              >
                رزومه ارسال شده
              </button>
            </div>
            <div class="mt-3 d-flex justify-content-center">
              <span
                v-if="getPersonalInfo == ''"
                class="text-center invalid-feedback"
              >
                لطفا رزومه خود را کامل کنید
              </span>
            </div>
            <div class="mt-3 d-flex justify-content-center">
              <p class="font-80">
                فرصت ارسال رزومه تا
                <span class="font-num-bd-is">{{ expireDate }}</span> روز دیگر
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { fileSize, imageType,docType } from "@/Mixins/customValidators";
export default {
   mixins: [validationMixin],
  props: {
    showBtn: {
      Boolean,
    },
    resumeEdit: {
      Boolean,
    },
    expireDate: {
      String,
    },
  },
  data() {
    return {
      employeeId: 1,
      sendSimilars: false,
      isExAvatar: undefined,
      avatar: "",
      resumeAttach: "",
    };
  },
  validations: {
    avatar: {
      fileSize: fileSize(2),
      imageType,
    },
    resumeAttach: {
      fileSize: fileSize(2),
      docType:docType('pdf')
    },
  },
  computed: {
    ...mapGetters([
      "getAvatar",
      "getEmployeeFolder",
      "getResumeAttach",
      "getResumeLeftSideInfo",
      "getPersonalInfo",
      "getIsJobApplied",
      "getSendSimilars",
      "getPersonalInfo",
    ]),
    resumeAttachFile() {
      let text = "";
      if (
        this.getResumeAttach != "" &&
        Object.keys(this.getResumeAttach).length != 0 &&
        this.getResumeAttach.length > 0
      ) {
        text = this.getResumeAttach.substring(0, 15) + "(...).pdf";
      }
      return text;
    },
  },
  methods: {
    ...mapActions([
      "setEmployeeAvatarInServer",
      "getEmployeeAvatarFromServer",
      "removeAvatarFromServer",
      "uploadResumeAttachToServer",
      "getResumeAttachFileNameFromServer",
      "getResumeLeftSideInfoFromServer",
      "applyJobForCompanyInServer",
      "getIsJobAppliedFromServer",
      "getPersonalInfoFromServer",
    ]),

    uploadAvatar(event) {
      this.avatar = event.target.files[0];
      this.$v.avatar.$touch();
      if (this.$v.avatar.fileSize && this.$v.avatar.imageType) {
        this.setEmployeeAvatarInServer({
          employeeId: 1,
          avatar: this.avatar,
        }).then(() => {
          this.getEmployeeAvatarFromServer(this.employeeId);
        });
      }
    },
    removeAvatar() {
      this.removeAvatarFromServer(this.employeeId).then(() => {
        this.getEmployeeAvatarFromServer(this.employeeId);
      });
    },
    browseAvatarFile() {
      this.$refs.avatarUploadBtn.click();
    },
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
    uploadResumeAttach(event) {
      if (typeof event.target.files[0] == "object") {
        this.resumeAttach = event.target.files[0];
        this.$v.resumeAttach.$touch();
        if (this.$v.resumeAttach.fileSize && this.$v.resumeAttach.docType) {
          this.uploadResumeAttachToServer({
            employeeId: 1,
            resumeAttach: this.resumeAttach,
          }).then(() => {
            this.getResumeAttachFileNameFromServer(this.employeeId);
          });
        }
      }
    },
    sendResume() {
      if (this.showBtn && this.$route.name == "JobDescriptions") {
        this.applyJobForCompanyInServer({
          employeeId: this.employeeId,
          jobId: this.$route.params.id,
          sendSimilars: this.sendSimilars,
        });
      }
    },
  },
  created() {
    this.getEmployeeAvatarFromServer(this.employeeId).then(() => {
      if (this.getAvatar == "") {
        this.isExAvatar = false;
      } else if (this.getAvatar.length > 0) {
        this.isExAvatar = true;
      }
    });
    this.getResumeAttachFileNameFromServer(this.employeeId);
    this.getResumeLeftSideInfoFromServer(this.employeeId);
    this.getIsJobAppliedFromServer({
      employeeId: this.employeeId,
      jobId: this.$route.params.id,
    }).then(() => {
      this.sendSimilars = this.getSendSimilars == "1" ? true : false;
    });
    this.getPersonalInfoFromServer(this.employeeId);
  },
  watch: {
    getAvatar(v) {
      if (v == "") {
        this.isExAvatar = false;
      } else if (v.length > 0) {
        this.isExAvatar = true;
      }
    },
    getPersonalInfo() {
      this.getResumeLeftSideInfoFromServer(this.employeeId);
    },
  },
};
</script>

<style>
.invalid-feedback {
  display: block;
  font-size: 0.75rem;
}
/*  custom upload :  */
.upload-resume-checkbox:checked {
  background-color: #14cbe8 !important;
  border-color: #14cbe8 !important;
}

.custom-upload {
  position: relative;
  border: 1px dashed #ccc;
  border-radius: 0.4rem;
  background-color: #eee;
  color: #999;
  padding: 0.2rem 0.1rem;
}
.custom-upload-content {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.custom-upload input {
  opacity: 0;
  width: 100%;
}

.left-side .custom-upload-content span {
  margin-left: 1rem;
}
.enable-upload-btn {
  color: #000 !important;
  background-color: #fff !important;
}
.avatar {
  width: 5.5rem;
  height: 5.5rem;
  background: #fff;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: 3rem;
}
.avatar-pic {
  width: 6rem;
  height: 2rem;
  position: relative;
  display: inline-block;
}
.avatar-upload-btn {
  position: absolute;
  display: inline-block;
  width: 100%;
  right: 0;
  cursor: pointer;
  color: #757575;
}
.avatar-upload-btn span {
  color: #0fc0db;
  border-bottom: 1px dashed #0fc0db;
}
.remove-avatar span {
  color: #d6080c;
  border-bottom: 1px dashed #d6080c;
}
.avatar-pic input {
  height: 0 !important;
}
</style>
