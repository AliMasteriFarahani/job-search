<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
      <div class="row px-lg-5 px-4 mt-4">
        <div class="col-12">
          <h3 class="font-1 font-bd-is pb-2">تنظیمات حساب کاربری</h3>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div class="border-dashed"></div>
        </div>
      </div>
      <div class="row px-4 pb-4 min-h-70vh align-content-start">
         <div class="col-12">
          <div class="mb-4">
            <label
              for="name"
              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
              >ایمیل :</label
            >
            <input
              type="text"
              id="name"
              name="name" 
              disabled
              class="form-control input-textbox"
              placeholder="alifarahani533@gmail.com"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <label
              for="name"
              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
              >رمز عبور :</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="form-control input-textbox"
              placeholder="رمز عبور جدید خود را وارد کنید"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-4">
            <label
              for="family"
              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
              >تکرار رمز عبور جدید :</label
            >
            <input
              type="text"
              id="family"
              name="family"
              class="form-control input-textbox"
              placeholder="رمز عبور جدید را مجددا وارد کنید"
            />
          </div>
        </div>
        <div class="col-12">
          <button
            class="btn w-100 btn--success float-end border-radius-05 px-3  py-2 shadow-c border-0 mt-1 font-90 text-white"
          >
            ذخیره
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
