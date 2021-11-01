<template>
                <div
                class="modal z-index-lv0 fade"
                id="about-me"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="about-me-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5
                        class="modal-title font-1 font-md-is"
                        id="about-me-label"
                      >
                        درباره من
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
                        <div class="col-12">
                          <div class="mb-4">
                            <label
                              for="about-me-descriptions"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >توضیحات :</label
                            >

                            <textarea
                              class="form-control remove-outline"
                              placeholder="سعی کنید متنی کوتاه و مفید درباره خودتان و مهارت هایتان بنویسید"
                              id="floatingTextarea2"
                              style="height: 100px"
                            ></textarea>
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
</template>

<script>
export default {

}
</script>

<style>

</style>