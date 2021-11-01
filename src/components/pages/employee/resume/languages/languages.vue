<template>
        <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">زبان ها</span>
            </div>
            <div class="col-12">
              <!-- modal -->
            <add-edit-modal></add-edit-modal>
              <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="language"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="language-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg ">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5
                        class="modal-title font-1 font-md-is"
                        id="language-label"
                      >
                        زبان ها
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
                              for="language-title"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >عنوان زبان :</label
                            >
                            <input
                              type="text"
                              id="language-title"
                              name="language-title"
                              placeholder="مثال : آلمانی"
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 mb-4 col-md-6">
                          <label
                            for="language-level"
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                            >سطح تسلط :</label
                          >
                          <div
                            class="custom-select simple-scroll z-index-lv2"
                            title="انتخاب کنید ..."
                            data-search-box="false"
                          >
                            <select id="language-level" name="language-level">
                              <option value="1">مقدماتی</option>
                              <option value="2">متوسط</option>
                              <option value="3">پیشرفته</option>
                            </select>
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
              <div class="row ps-4">
                <div class="col-12">
                  <div class="row mt-3 me-2 border-bm-c">
                    <div class="col">
                      <p class="font-bd-is">
                        آلمانی
                      </p>
                      <p>
                        <span class="font-1 me-3">متوسط</span>
                      </p>
                    </div>
                    <div class="col-12 col-md-2">
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#remove-item"
                        class="float-end font-102 cursor-pointer text-underline font-md-is"
                      >
                        <i class="fa-solid fa-trash-can color--danger"></i>
                      </span>
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#language"
                        class="float-end font-102 me-2 cursor-pointer color-sky text-underline font-md-is"
                      >
                        <i
                          class="fa-solid me-1 color-sky  fa-pen-to-square"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12 py-2">
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#language"
                    class="float-end font-90 cursor-pointer me-3 text-underline font-md-is"
                  >
                    <i
                      class="fa-solid font-2 color--success fa-circle-plus"
                    ></i>
                  </span>
                  <!-- modal -->

                  <!-- modal end -->
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
</template>

<script>
import addEditModal from "./addEditModal.vue";
export default {
components:{addEditModal}
}
</script>

<style>

</style>