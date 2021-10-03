<template>
  <div class="col-12 col-lg-3 col-lg-28 mt-3 mt-lg-0">
    <div class="border-r left-side bg-white">
      <div class="row">
        <div class="col-12">
          <div class="bg-c1 p-3 float-start w-100 text-center">
            <div class="avatar shadow-c">
              <img v-if="resumeEdit" src="/images/avatars/user.jpg" width="100%" height="100%" class="rounded-circle" alt="avatar">
              <span class="color-gray line-height-5">logo</span>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="row mb-2 mt-5">
        <div class="col-12">
          <div class="d-block text-center mb-4">
            <span class="font-xs-80 font-bd-is font-sm-90 mt-1"
              >شرکت داده گستر عصر ایران زمین</span
            >
          </div>
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1 ">فرصت های شغلی :</span>
            <span class="font-xs-80 ms-2 font-num-bd-is font-sm-90 mt-1"
              >20</span
            >
          </div>
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1 ">فرصت های شغلی فعال :</span>
            <span class="font-xs-80 ms-2 font-num-bd-is font-sm-90 mt-1"
              >20</span
            >
          </div>
          <div class="ms-4 mb-3">
            <span class="font-90 mt-1 "> رزومه های دریافتی :</span>
            <span class="font-xs-80 ms-2 font-num-bd-is font-sm-90 mt-1"
              >20</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBtn: {
      Boolean,
    },
    resumeEdit: {
      Boolean,
    },
  },
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
.remove-avatar span{
   color: #D6080C;
  border-bottom: 1px dashed #D6080C;
}
.avatar-pic input {
  height: 0 !important;
}
</style>
