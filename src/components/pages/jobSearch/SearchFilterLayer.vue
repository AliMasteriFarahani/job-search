<template>
      <section class="container-fluid landing-layer bg-sky pb-4 pb-md-5">
      <div class="row">
        <div class="col-10 offset-1 mt-4 bg-white rounded-3 px-3 py-5 p-lg-5">
          <form action="">
            <div class="row">
              <div class="col-lg-10 col-12">
                <div class="row">
                  <div
                    class="col-md-12 col-lg-5 mb-2 mb-lg-0 col-12 position-relative"
                  >
                    <input
                      type="text"
                      class="form-control input-textbox"
                      placeholder="عنوان شغلی یا ..."
                    />
                  </div>
                  <div
                    class="col-12 col-md-6 col-lg-col mb-2 mb-lg-0 position-relative"
                  >
                    <div
                      class="custom-select"
                      title="انتخاب شهر ..."
                      data-search-box="true"
                    >
                      <select>
                        <option value="0">انتخاب همه شهر ها</option>
                        <option value="1">شیراز</option>
                        <option value="2">تهران</option>
                        <option value="3">اراک</option>
                        <option value="4">ساوه</option>
                        <option value="5">هرمزگان</option>
                        <option value="6">بوشهر</option>
                        <option value="7">قم</option>
                        <option value="8">مشهد</option>
                        <option value="9">اصفهان</option>
                        <option value="10">همدان</option>
                        <option value="11">یزد</option>
                        <option value="12">کرمانشاه</option>
                        <option value="13">اهواز</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-col col-12 mb-2 mb-lg-0 position-relative"
                  >
                    <div
                      class="custom-select"
                      title="دسته بندی شغلی"
                      data-search-box="true"
                    >
                      <select>
                        <option value="0">همه دسته بندی ها</option>
                        <option value="1">برنامه نویس وب</option>
                        <option value="2">طراح سایت</option>
                        <option value="3">گرافیست</option>
                        <option value="4">تایپیست</option>
                        <option value="5">کارمند بانک </option>
                        <option value="6">نجار</option>
                        <option value="7">فروش و بازار یابی</option>
                        <option value="8">اداری</option>
                        <option value="9">مالی و حسابداری</option>
                        <option value="10">طراحی</option>
                        <option value="11">مهندسی برق</option>
                        <option value="12">دکوراسیون داخلی</option>
                        <option value="13">مهندسی کامپیوتر</option>
                      </select>
                    </div>
                  </div>
                </div>
                <transition
                  appear
                  enter-active-class="animate__animated animate__fadeIn"
                >
                  <div
                    v-show="showAdvancedFilterItems"
                    class="
                      row advanced-filter-items row mt-lg-3"
                  >
                    <div
                      class="col-12 col-md-6 col-lg-3 mb-2 mb-lg-0 position-relative"
                    >
                      <div
                        class="custom-select z-index-lv2"
                        title="انتخاب شهر ..."
                      >
                        <select>
                          <option value="0">انتخاب همه شهر ها</option>
                          <option value="1">شیراز</option>
                          <option value="2">تهران</option>
                          <option value="3">اراک</option>
                          <option value="4">ساوه</option>
                          <option value="5">هرمزگان</option>
                          <option value="6">بوشهر</option>
                          <option value="7">قم</option>
                          <option value="8">مشهد</option>
                          <option value="9">اصفهان</option>
                          <option value="10">همدان</option>
                          <option value="11">یزد</option>
                          <option value="12">کرمانشاه</option>
                          <option value="13">اهواز</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-lg-3 col-12 mb-2 mb-lg-0 position-relative"
                    >
                      <div
                        class="custom-select"
                        title="حقوق"
                        data-search-box="false"
                      >
                        <select>
                          <option value="0">زیر 4 میلیون تومان</option>
                          <option value="1">بین 4 تا 6 میلیون تومان</option>
                          <option value="2">بین 6 تا 8 میلیون تومان</option>
                          <option value="3">بین 8 تا 10 میلیون تومان</option>
                          <option value="4">بیشتر از 10 میلیون تومان</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-lg-3 col-12 mb-2 mb-lg-0 position-relative"
                    >
                      <div
                        class="custom-select"
                        title="سابقه کار"
                        data-search-box="false"
                      >
                        <select>
                          <option value="0">بدون محدودیت </option>
                          <option value="1">کمتر از دو سال </option>
                          <option value="2">بین 2 تا 4 سال </option>
                          <option value="3">بین 4 تا 6 سال</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-lg-3 col-12 mb-2 mb-lg-0 position-relative"
                    >
                      <div
                        class="custom-select"
                        title="نوع قرارداد"
                        data-search-box="false"
                      >
                        <select>
                          <option value="0">تمام وقت </option>
                          <option value="1">پاره وقت </option>
                          <option value="2">پروژهای</option>
                          <option value="3">دورکاری</option>
                          <option value="4">کارآموزی</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </transition>
                <div class="row mt-3 mb-3 mb-lg-0">
                  <div class="col">
                    <span
                      @click="advancedFilterItemsDisplay()"
                      id="advanced-filter-btn"
                      class="cursor-pointer color-sky"
                    >
                      <span class="font-80"
                        ><i class="fa-solid fa-filters"></i
                      ></span>
                      <span class="font-73 mx-1">جست و جوی پیشرفته</span>
                      <span>
                        <i
                          class="angle align-middle fa-solid fa-angle-down"
                        ></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-12">
                <div class="row">
                  <div class="col-12 ">
                    <button class="btn btn-warning h-100 w-100 font-95">
                      جست و جو
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      showAdvancedFilterItems: false,
    };
  },
  methods: {
    // for show/hide advanced filter
    advancedFilterItemsDisplay() {
      this.showAdvancedFilterItems = !this.showAdvancedFilterItems;
      let filterBtn = document.querySelector("#advanced-filter-btn");
      let angle = filterBtn.querySelector(".angle");
      if (angle.classList.contains("fa-angle-down")) {
        angle.classList.remove("fa-angle-down");
        angle.classList.add("fa-angle-up");
      } else {
        angle.classList.remove("fa-angle-up");
        angle.classList.add("fa-angle-down");
      }
    },
    // remove filter from filters in search
    removeFilter(event) {
      event.target.closest(".filter-done").remove();
    },
    // remove all filter from search
    removeAllFilter() {
      this.$refs.filterWrapper
        .querySelectorAll(".filter-done")
        .forEach((element) => {
          element.remove();
        });
    }
  }, // method end
}
</script>

<style>

</style>