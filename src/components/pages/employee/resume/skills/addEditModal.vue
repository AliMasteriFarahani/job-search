<template>
  <div
    class="modal z-index-lv0 fade"
    id="skills"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="skills-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content px-1">
        <div class="modal-header">
          <h5 class="modal-title font-1 font-md-is" id="skills">مهارت ها</h5>
          <button
            type="button"
            class="btn-close remove-outline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 mb-4">
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >html css html css html css html css
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >مقدماتی</span
                >
              </div>
              <!--  -->
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >php
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >متوسط</span
                >
              </div>
              <!--  -->
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >html css html css html css html css
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >پیشرفته</span
                >
              </div>
              <!--  -->
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >html css html css html css html css
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >مقدماتی</span
                >
              </div>
              <!--  -->
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >javascript
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >مقدماتی</span
                >
              </div>
              <!--  -->
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >css
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >متوسط</span
                >
              </div>
              <!--  -->
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >html
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >مقدماتی</span
                >
              </div>
              <!--  -->
              <div class="d-inline-flex mb-2 me-2">
                <span class="skill font-90"
                  >html css html css html css html css
                  <span class="circle-middle"></span>
                </span>
                <span class="skill-level d-flex align-items-center font-90"
                  >مقدماتی</span
                >
              </div>
            </div>
            <div class="col-12 col-md-6 d-flex">
              <div class="mb-4 flex-grow-1">
                <label
                  for="skill"
                  class="
                    form-check-label
                    mb-2
                    font-90 font-md-is
                    cursor-pointer
                  "
                  >عنوان مهارت :</label
                >
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  placeholder="مهارت خود را وارد کنید ..."
                  class="form-control input-textbox"
                />
              </div>
              <span class="float-end d-flex font-90 cursor-pointer font-md-is">
                <i
                  class="
                    fa-solid
                    align-self-center
                    ms-1
                    font-2
                    color--success
                    fa-circle-plus
                  "
                ></i>
              </span>
            </div>
            <div class="col-12 mb-4 col-md-6">
              <label
                for="skill-level"
                class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                >سطح تسلط :</label
              >
              <div
                class="custom-select simple-scroll z-index-lv2"
                title="انتخاب کنید ..."
                data-search-box="false"
              >
                <select id="skill-level" name="skill-level">
                  <option value="1">مقدماتی</option>
                  <option value="2">متوسط</option>
                  <option value="3">پیشرفته</option>
                </select>
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
export default {
  data() {
    return {
      skills: { },
        skill: {
          skillTitle: "",
          level: "",
        },
     
    };
  },
};
</script>

<style>
</style>