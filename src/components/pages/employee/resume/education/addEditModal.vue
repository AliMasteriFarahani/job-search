<template>
  <div
    class="modal z-index-lv0 fade"
    id="educational-records"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="educational-records-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5
            class="modal-title font-1 font-md-is"
            id="educational-records-label"
          >
            سوابق تحصیلی
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
                  for="major-title"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >عنوان رشته :</label
                >
                <input
                  type="text"
                  id="major-title"
                  name="major-title"
                  placeholder="مثال : مهندی نرم افزار"
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
                  >نام دانشگاه :</label
                >
                <input
                  type="text"
                  id="uni-title"
                  name="uni-title"
                  placeholder="مثال : دانشگاه شهید شمسی پور"
                  class="form-control input-textbox"
                />
              </div>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="edu-level"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >مقطع تحصیلی :</label
              >
              <div
                class="custom-select simple-scroll"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="edu-level" name="edu-level">
                  <option value="1">دبیرستان</option>
                  <option value="2">کاردانی</option>
                  <option value="3">کارشناسی</option>
                  <option value="3">کارشناسی ارشد</option>
                  <option value="3">دکترا</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="mb-4">
                <label
                  for="average"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >معدل :</label
                >
                <input
                  type="text"
                  id="average"
                  name="average"
                  placeholder="مثال : 14"
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
                class="custom-select simple-scroll"
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
                class="custom-select simple-scroll"
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
                  هنوز مشغول به تحصیل می باشم
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