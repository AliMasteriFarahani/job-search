<template>
  <div class="col-12 col-lg-3 col-lg-28 mt-3 mt-lg-0">
    <div class="border-r left-side bg-white">
      <div class="row">
        <div class="col-12">
          <div class="bg-c1 p-3 float-start w-100 text-center">
            <div class="avatar shadow-c">
              <i class="fa-solid fa-user font-3 mt-3 color-gray"></i>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="row mt-5 mb-2">
        <div class="col-12">
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1">نام و نام خانوادگی :</span>
            <span class="font-xs-80 font-bd-is font-sm-90 mt-1"
              >محمد حیدری مقدم</span
            >
          </div>
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1 ">عنوان شغلی :</span>
            <span class="font-xs-80 font-bd-is font-sm-90 mt-1"
              >برنامه نویس فرانت اند</span
            >
          </div>
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1 ">وضعیت رزومه :</span>
            <span class="font-xs-80  font-sm-90 mt-1"
              ><span class="font-num-bd-is color-sky font-bd-is">80%</span>
              تکمیل</span
            >
          </div>
          <div class="ms-4 mb-3">
            <a href="" class="font-90 mt-1 color-sky font-bd-is text-underline"
              >بروز رسانی رزومه</a
            >
          </div>
          <div class="ms-4 mb-3">
            <div class="form-check">
              <input
              @click="enableDisableUploadResume"
                class="form-check-input upload-resume-checkbox remove-outline cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                class="form-check-label font-90  cursor-pointer"
                for="flexCheckChecked"
              >
                آپلود رزومه (دلخواه)
              </label>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-3">
            <div class="w-75 custom-upload" ref="customUpload">
              <input
                ref="uploadResumeInp"
                @change="getNameOfFile"
                type="file"
                id="upload-resume"
                disabled="disabled"
                name="uploadResume"
              />
              <div class="custom-upload-content">
                <span class="font-80">انتخاب فایل رزومه</span>
                <i class="fa-solid fa-upload font-80"></i>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <p class="resume-upload-file-name font-73">{{ uploadFileName }}</p>
          </div>
          <template v-if="showBtn">
                      <div class="ms-4 mb-3">
            <div class="form-check form-switch">
              <input
                class="form-check-input upload-resume-checkbox remove-outline cursor-pointer"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked
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
              class="btn w-75 btn-success bg-green border-radius-05 px-5 py-2 shadow-c border-0 mt-1 font-1 text-white"
            >
              ارسال رزومه
            </button>
          </div>
          <div class="mt-3 d-flex justify-content-center">
            <p class="font-80">
              فرصت ارسال رزومه تا <span class="font-num-bd-is">20</span> روز
              دیگر
            </p>
          </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
      showBtn:{
        Boolean
        }
      },
        data() {
    return {
      uploadFileName: "",
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
      this.uploadFileName = event.target.files[0].name;
    },
  },

};
</script>

<style>
/*  custom upload :  */
.upload-resume-checkbox:checked{
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

</style>
