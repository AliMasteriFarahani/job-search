<template>
  <div
    class="modal z-index-lv0 fade"
    id="job-experience"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="job-experience-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5 class="modal-title font-1 font-md-is" id="job-experience-label">
            سوابق شغلی
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
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <label
                  for="job-title"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >عنوان شغلی :</label
                >
                <input
                  type="text"
                  id="job-title"
                  name="job-title"
                  placeholder="مثال : برنامه نویس وب"
                  class="form-control input-textbox"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <label
                  for="uni-title"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >نام سازمان/شرکت :</label
                >
                <input
                  type="text"
                  id="uni-title"
                  name="uni-title"
                  placeholder="مثال : شرکت داده گستر عصر جدید"
                  class="form-control input-textbox"
                />
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="start-year"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سال شروع :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="start-year" name="start-year">
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                </select>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="start-month"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >ماه شروع :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="start-month" name="start-month">
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                </select>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="end-year"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سال پایان :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="end-year" name="end-year">
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                </select>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="end-month"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >ماه پایان :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="end-month" name="end-month">
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                  <option value="0">1350</option>
                </select>
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input remove-outline cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label
                  class="form-check-label font-90 cursor-pointer"
                  for="flexCheckChecked"
                >
                  هنوز مشغول به کار می باشم
                </label>
              </div>
            </div>
            <div class="col-12">
              <button
                class="
                  btn btn--success
                  float-end
                  border-radius-05
                  px-3
                  py-2
                  shadow-c
                  border-0
                  mt-1
                  font-90
                  text-white
                "
              >
                ذخیره
              </button>
              <button
                type="button"
                class="
                  btn btn--close
                  float-end
                  border-radius-05
                  px-3
                  py-2
                  shadow-c
                  border-0
                  mt-1
                  font-90
                  text-white
                  me-2
                "
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
</template>

<script>
export default {};
</script>

<style>
</style>