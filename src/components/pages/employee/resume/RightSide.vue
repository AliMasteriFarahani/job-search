<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
      <!-- personal information : -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">اطلاعات فردی</span>
            </div>
            <div class="col-12 pb-3">
              <span
                data-bs-toggle="modal"
                data-bs-target="#personal-informations"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i
                  class="fa-solid me-1 font-1 align-middle fa-pen-to-square"
                ></i>
                <span class="font-bd-is">ویرایش</span>
              </span>
              <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
              <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="personal-informations"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="personal-informations-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5
                        class="modal-title font-1 font-md-is"
                        id="personal-informations-label"
                      >
                        اطلاعات فردی
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
                              for="name"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >نام :</label
                            >
                            <input
                              type="text"
                              id="name"
                              name="name"
                              class="form-control input-textbox"
                              placeholder="نام خود را وارد کنید"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="family"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >نام خانوادگی :</label
                            >
                            <input
                              type="text"
                              id="family"
                              name="family"
                              class="form-control input-textbox"
                              placeholder="نام خانوادگی خود را وارد کنید"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="family"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >تاریخ تولد :</label
                            >
                            <input
                              type="text"
                              id="family"
                              name="family"
                              class="form-control input-textbox font-num-is"
                              placeholder="1373-11-02"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="mobile"
                              class="form-check-label mb-2 font-90 font-md-is cursor-pointer"
                              >شماره موبایل :</label
                            >
                            <input
                              type="text"
                              id="mobile"
                              name="mobile"
                              placeholder="09xxxxxxxxx"
                              class="form-control font-num-is input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 mb-4 col-md-6">
                          <label
                            for="city"
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                            >استان :</label
                          >
                          <div
                            class="custom-select z-index-lv2"
                            title="انتخاب استان ..."
                            data-search-box="true"
                          >
                            <select id="city" name="city">
                              <option value="0">انتخاب همه شهر ها</option>
                              <option value="1">شیراز</option>
                              <option value="2"> 66 تهران</option>
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
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="address"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >آدرس محل سکونت :</label
                            >
                            <input
                              type="text"
                              id="address"
                              name="address"
                              placeholder="تهران - ..."
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="job-title"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                              for="email"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >آدرس ایمیل :</label
                            >
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="example@gmail.com"
                              class="form-control input-textbox"
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="salary"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >حقوق درخواستی :</label
                            >
                            <div
                              class="custom-select simple-scroll"
                              title="انتخاب کنید ..."
                              data-search-box="false"
                            >
                              <select id="salary" name="salary">
                                <option value="0">3 - 4 میلیون تومان</option>
                                <option value="0">4 - 5 میلیون تومان</option>
                                <option value="0">5 - 6 میلیون تومان</option>
                                <option value="0">6 - 8 میلیون تومان</option>
                                <option value="0">8 - 10 میلیون تومان</option>
                                <option value="0">10 - 12 میلیون تومان</option>
                                <option value="0">12 - 15 میلیون تومان</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              for="salary"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                              >وضعیت خدمت سربازی :</label
                            >
                            <div
                              class="custom-select z-index-lv2"
                              title="انتخاب کنید ..."
                              data-search-box="false"
                            >
                              <select id="city" name="city">
                                <option value="0">اتمام خدمت</option>
                                <option value="1">در حال انجام</option>
                                <option value="1">معاف</option>
                                <option value="1">معافیت تحصیلی</option>
                                <option value="1">مشمول</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              class="form-check-label mb-2 font-90 font-md-is me-2"
                              >وضعیت تاهل :</label
                            >
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input remove-outline cursor-pointer"
                                type="radio"
                                name="marital-status"
                                id="single"
                                checked
                                value="single"
                              />
                              <label
                                class="form-check-label font-90"
                                for="single"
                                >مجرد</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input remove-outline cursor-pointer"
                                type="radio"
                                name="marital-status"
                                id="married"
                                value="married"
                              />
                              <label
                                class="form-check-label font-90"
                                for="married"
                                >متاهل</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="mb-4">
                            <label
                              class="form-check-label mb-2 font-90 font-md-is me-2"
                              >جنسیت :</label
                            >
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input remove-outline cursor-pointer"
                                type="radio"
                                name="gender"
                                id="man"
                                checked
                                value="man"
                              />
                              <label class="form-check-label font-90" for="man"
                                >آقا</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input remove-outline cursor-pointer"
                                type="radio"
                                name="gender"
                                id="women"
                                value="women"
                              />
                              <label
                                class="form-check-label font-90"
                                for="women"
                                >خانم</label
                              >
                            </div>
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
              <div class="row mt-2 ps-4">
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">نام :</div>
                  <div class="mt-2">علی</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">نام خانوادگی :</div>
                  <div class="mt-2">ماستری فراهانی</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">تاریخ تولد :</div>
                  <div class="mt-2 font-num-is">1373-11-02</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">شماره موبایل :</div>
                  <div class="mt-2 font-num-is">09338617143</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">استان :</div>
                  <div class="mt-2">مرکزی</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">آدرس محل سکونت :</div>
                  <div class="mt-2">استان مرکزی - شهرستان فراهان</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">وضعیت تاهل</div>
                  <div class="mt-2">مجرد</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">جنسیت :</div>
                  <div class="mt-2">مرد</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">وضعیت خدمت سربازی :</div>
                  <div class="mt-2">پایان خدمت</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">آدرس ایمیل :</div>
                  <div class="mt-2">alifarahani533@gmail.com</div>
                </div>
                <div class="col-12 mb-4 col-md-6">
                  <div class="font-bd-is">حقوق درخواستی :</div>
                  <div class="mt-2 font-num-is">10 میلیون تومان</div>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <!-- about me : -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">درباره من</span>
            </div>
            <div class="col-12 pb-3">
              <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i
                  class="fa-solid me-1 font-1 align-middle fa-pen-to-square"
                ></i>
                <span class="font-bd-is">ویرایش</span>
              </span>
              <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
              <!-- modal -->
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
              <!-- modal end -->
            </div>
            <!--  -->
            <div class="col-12">
              <div class="row mt-2 ps-4">
                <div class="col-12 mb-4">
                  <p>
                    سلام ، من علی ماستری فراهانی هستم . برنامه نویسی رو از
                    دانشگاه شروع کردم . علاقه ی خیلی زیادی به یادگیری در حوزه
                    های مختلف دارم
                  </p>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <!-- skills : -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">مهارت ها</span>
            </div>
            <div class="col-12 pb-3">
              <span
                data-bs-toggle="modal"
                data-bs-target="#skills"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i
                  class="fa-solid me-1 font-1 align-middle fa-pen-to-square"
                ></i>
                <span class="font-bd-is">ویرایش</span>
              </span>
              <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
              <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="skills"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="skills-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg ">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5 class="modal-title font-1 font-md-is" id="skills">
                        مهارت ها
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
                        <div class="col-12 mb-4">
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >php
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">متوسط</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">پیشرفته</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >javascript
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">متوسط</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                        </div>
                        <div class="col-12 col-md-6 d-flex">
                          <div class="mb-4 flex-grow-1">
                            <label
                              for="skill"
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                          <span
                            class="float-end d-flex font-90 cursor-pointer font-md-is"
                          >
                            <i
                              class="fa-solid align-self-center ms-1 font-2 color--success fa-circle-plus"
                            ></i>
                          </span>
                        </div>
                        <div class="col-12 mb-4 col-md-6">
                          <label
                            for="skill-level"
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
              <div class="row mt-2 ps-4">
                <div class="col-12 mb-4">
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >php
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">متوسط</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">پیشرفته</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >javascrip mvvvvv
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">متوسط</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                  <div class="d-inline-flex mb-2 me-2">
                    <span class="skill font-90"
                      >html css html css html css html css
                      <span class="circle-middle"></span>
                    </span>
                    <span class="skill-level d-flex align-items-center font-90">مقدماتی</span>
                  </div>
                  <!--  -->
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <!-- Educational records :  -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">سوابق تحصیلی</span>
            </div>
            <div class="col-12">
              <!-- <span
                data-bs-toggle="modal"
                data-bs-target="#about-me"
                class="float-end font-90 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid font-2 color--success fa-circle-plus"></i>
              </span> -->
              <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="educational-records"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="educational-records-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg ">
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
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                            >مقطع تحصیلی :</label
                          >
                          <div
                            class="custom-select simple-scroll z-index-lv2"
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
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                            for="end-year"
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                          <div class="form-check">
                            <input
                              class="form-check-input remove-outline  cursor-pointer"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label font-90  cursor-pointer"
                              for="flexCheckChecked"
                            >
                              هنوز مشغول به تحصیل می باشم
                            </label>
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
                        کارشناسی - مهندسی تکنولوژی نرم افزار
                      </p>
                      <p>
                        <span class="font-1 me-3">دانشکده امیرکبیر اراک</span>
                        <span dir="ltr" class="font-1 font-num-is"
                          >1395 - 1400</span
                        >
                      </p>
                    </div>
                    <div class="col-12 col-md-2">
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#educational-records"
                        class="float-end font-102 cursor-pointer text-underline font-md-is"
                      >
                        <i class="fa-solid fa-trash-can color--danger"></i>
                      </span>
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#educational-records"
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
                    data-bs-target="#educational-records"
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
      <!-- job experience : -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">سوابق شغلی</span>
            </div>
            <div class="col-12">

              <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="job-experience"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="job-experience-label"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg ">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5
                        class="modal-title font-1 font-md-is"
                        id="job-experience-label"
                      >
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
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                              class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                            class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
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
                              class="form-check-input remove-outline  cursor-pointer"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label font-90  cursor-pointer"
                              for="flexCheckChecked"
                            >
                              هنوز مشغول به کار می باشم
                            </label>
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
                        برنامه نویس وب
                      </p>
                      <p>
                        <span class="font-1 me-3">شرکت داده گستر عصر جدید</span>
                        <span dir="ltr" class="font-1 font-num-is"
                          >از 1380 تا 1400</span
                        >
                      </p>
                    </div>
                    <div class="col-12 col-md-2">
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#job-experience"
                        class="float-end font-102 cursor-pointer text-underline font-md-is"
                      >
                        <i class="fa-solid fa-trash-can color--danger"></i>
                      </span>
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#job-experience"
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
                    data-bs-target="#job-experience"
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
      <!-- langueges : -->
      <div class="row m-0 p-5 px-4 ">
        <div class="col">
          <div class="row rounded-3 border-dashed">
            <div class="col-12 ">
              <span class="section-title">زبان ها</span>
            </div>
            <div class="col-12">
                            <!-- modal -->
              <div
                class="modal z-index-lv0 fade"
                id="remove-item"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="remove-item-label"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content px-1">
                    <div class="modal-header">
                      <h5
                        class="modal-title color--danger font-1 font-md-is"
                        id="remove-item-label"
                      >
                        هشدار !
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
                            <p>آیتم مورد نظر حذف شود ؟</p>
                        </div>


                        <div class="col-12">
                          <button
                            class="btn btn--close float-end border-radius-05 px-3  py-2 shadow-c border-0 mt-1 font-90 text-white"
                          >
                            حذف
                          </button>
                          <button
                            type="button"
                            class="btn btn--cancel float-end border-radius-05 px-3 py-2 shadow-c border-0 mt-1 font-90 text-white me-2"
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
      <!--  -->
    </div>
  </div>
</template>

<script>
import { customSelectMixin } from "@/Mixins/customSelectMixin";
export default {
  mixins: [customSelectMixin],
};
</script>

<style>
@import url("../../../../assets/plugins/custom-select/css/custom-select.css");
.section-title {
  background: #eee;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  position: relative;
  top: -0.7rem;
}
/* width */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar {
  width: 0.4rem;
}

/* Track */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-track {
  background: #c9c9c9;
  border-radius: 0;
}

/* Handle */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-thumb {
  background: rgb(121, 120, 120);
  border-radius: 5px;
}

/* Handle on hover */
.modal-dialog-scrollable .modal-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.modal-header {
  border-bottom: 1px dashed #dee2e6 !important;
}
.custom-option-item,
.custom-option-selected {
  font-family: "iransanse-num" !important;
}

.skill,
.skill-level {
  padding: 0.5rem 1rem;
  text-align: center;
  display: inline-block;
  font-family: "iransanse-bd";
}
.skill {
  background-color: #fcc45c;
  border-radius: 0 0.5rem 0.5rem 0;
  border-left: 1px solid #fff;
  position: relative;
}
.skill-level {
  background-color: #74d4f4;
  border-radius: 0.5rem 0 0 0.5rem;
  border-right: 1px solid #fff;
}
.login-register-active-btn {
  color: #fff !important;
  background-color: #1e6fcf !important;
  font-family: "iransanse-md" !important;
}
.circle-middle {
  display: inline-block;
  background: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -0.55rem;
  transform: translate(0, -50%);
}
</style>
