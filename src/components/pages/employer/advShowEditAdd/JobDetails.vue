<template>
  <div class="col-12 col-lg-9 col-lg-72">
    <div class="border-r bg-white">
      <div class="row">
        <div class="col-12">
          <div class="px-md-3 py-md-3 p-2 px-3 bg-c1 float-start w-100">
            <h3 class="m-0  float-start font-xs-95 font-md-102">
              استخدام برنامه نویس فرانت اند
            </h3>
            <span class="float-end font-105 fw-bold cursor-pointer">
              <span
                data-bs-toggle="modal"
                data-bs-target="#job-experience"
                class="float-end font-102 me-2 cursor-pointer color-sky text-underline font-md-is"
              >
                <i class="fa-solid me-1 color-sky  fa-pen-to-square"></i> </span
            ></span>
          </div>
        </div>
      </div>
      <div class="row my-3 px-md-4 ">
        <div class="col-12">
          <div class="row ms-3 ms-md-2 vertical-dashed-line">
            <!-- moshakhasat forsat shoghli  -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">مشخصات فرصت شغلی</h3>
              </div>
              <!--  job edit and job add :  -->

              <template>
                <div class="row">
                  <div class="col-12">
                    <div class="border-bm-dashed-c"></div>
                  </div>
                </div>
                <div class="row pt-3 ps-2">
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="email"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >عنوان شغلی :</label
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
                        >دسته بندی شغلی :</label
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
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >نوع همکاری :</label
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
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                      >
                        میزان حقوق :</label
                      >
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="به تومان"
                        class="form-control input-textbox"
                      />
                    </div>
                  </div>
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >شهر :</label
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
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >تعداد افراد مورد نیاز :</label
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
                  <!-- end col input -->
                </div>
              </template>
              <!-- end of job edit and job add  -->
              <div v-if="false" class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                  >
                    دسته بندی شغلی</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5"
                    >برنامه نویسی وب</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                    >نوع همکاری</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5"
                    >تمام وقت</span
                  >
                </div>

                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                    >موقعیت مکانی</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5"
                    >تهران</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                    >تعداد افراد مورد نیاز</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5 font-num-bd-is"
                    >10</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                    >حقوق</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5 font-num-bd-is"
                    >7000000</span
                  >
                </div>
              </div>
            </div>
            <!-- end of moshakhasat forsat shoghli  -->
            <!-- sharayete ehraze shoghl -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">شرایط احراز شغل</h3>
              </div>
              <template>
                <div class="row">
                  <div class="col-12">
                    <div class="border-bm-dashed-c"></div>
                  </div>
                </div>
                <div class="row pt-3 ps-2">
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >سابقه کار :</label
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
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >مدرک تحصیلی :</label
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
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                      >
                        جنسیت :</label
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
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >بازه سنی :</label
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
                  <!-- end col input -->
                  <div class="col-12 col-md-6">
                    <div class="mb-4">
                      <label
                        for="salary"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >وضعیت نظام وظیفه :</label
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

                  <!-- end col input -->
                </div>
              </template>
              <div v-if="false" class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                  >
                    وضعیت نظام وظیفه</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5"
                    >پایان خدمت سربازی</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                    >سابقه کار</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5"
                    >کمتر از سه سال</span
                  >
                </div>

                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                  >
                    مدرک تحصیلی</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5"
                    >دکترا</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                    >جنسیت
                  </span>
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5"
                    >اقا - خانم</span
                  >
                </div>
                <div class="col-12 mb-2 px-4 d-flex">
                  <span
                    class="job-desc-item me-2 p-1 px-md-2 font-bd-is flex-bases-40 flex-grow-0"
                    >بازه سنی</span
                  >
                  <span
                    class="job-desc-item  p-1 px-md-2 font-bd-is flex-grow-5 font-num-bd-is"
                    >20 تا 35 سال</span
                  >
                </div>
              </div>
            </div>
            <!-- end of sharayete ehraze shoghl -->
            <!-- needed skills  -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">مهارت های مورد نیاز</h3>
              </div>
              <template>
                <div class="row">
                  <div class="col-12">
                    <div class="border-bm-dashed-c"></div>
                  </div>
                </div>
                <div class="row pt-3 ps-2">
                  <div class="col-12 mb-4">
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >html css html css html css html css
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >مقدماتی</span
                      >
                    </div>
                    <!--  -->
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >php
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >متوسط</span
                      >
                    </div>
                    <!--  -->
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >html css html css html css html css
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >پیشرفته</span
                      >
                    </div>
                    <!--  -->
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >html css html css html css html css
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >مقدماتی</span
                      >
                    </div>
                    <!--  -->
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >javascript
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >مقدماتی</span
                      >
                    </div>
                    <!--  -->
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >css
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >متوسط</span
                      >
                    </div>
                    <!--  -->
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >html
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >مقدماتی</span
                      >
                    </div>
                    <!--  -->
                    <div class="d-inline-flex mb-2 me-2">
                      <span class="skill font-90"
                        >html css html css html css html css
                        <span class="circle-middle"></span>
                      </span>
                      <span
                        class="skill-level d-flex align-items-center font-90"
                        >مقدماتی</span
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6 d-flex">
                    <div class="mb-2 flex-grow-1">
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
                  </div>
                  <div class="col-12 mb-2 col-md-6">
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
                    <span
                      class="float-end d-flex font-90 cursor-pointer font-md-is"
                    >
                      <i
                        class="fa-solid align-self-center ms-1 font-2 color--success fa-circle-plus"
                      ></i>
                    </span>
                  </div>

                  <!-- end col input -->
                </div>
              </template>
              <div v-if="false" class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex flex-wrap">
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is">
                    html /css</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >javascript</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >bootstrap</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >jquery</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >sass</span
                  >
                  <span class="job-desc-item me-2 mb-2 p-1 px-md-2 font-bd-is "
                    >vuejs</span
                  >
                </div>
              </div>
            </div>
            <!-- end of needed skills -->
            <!-- explain job oppertunity  -->
            <div class="col-12 bullet mb-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">شرح موقعیت شغلی</h3>
              </div>
              <template>
                <div class="row">
                  <div class="col-12">
                    <div class="border-bm-dashed-c"></div>
                  </div>
                </div>
                <div class="row pt-3 ps-2">
                  <div class="col-12">
                    <div class="mb-4">
                      <label
                        for="about-me-descriptions"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >توضیحات :</label
                      >

                      <textarea
                        class="form-control remove-outline"
                        placeholder=""
                        id="floatingTextarea2"
                        style="height: 100px"
                      ></textarea>
                    </div>
                  </div>

                  <!-- end col input -->
                </div>
              </template>
              <div v-if="false" class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex flex-wrap font-bd-is">
                  <ul>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                    <li class="mb-2">تسلط کامل به ui / ux</li>
                  </ul>
                  <p>
                    مهارت‌های عمومی : آشنایی کافی به زبان انگلیسی · روحیه کار
                    تیمی و یادگیری ابزارهای جدید · منظم و متعهد · مدیریت زمان و
                    در دسترس بودن علاقه‌مند به یادگیری مفاهیم جدید و حل مسائل
                    چالشی · علاقه‌مند به تولید کدهای تمیز، قابل توسعه و با
                    توضیحات کافی
                  </p>
                </div>
              </div>
            </div>
            <!-- end of explain job oppertunity -->
            <!-- introduce company :  -->
            <div class="col-12 bullet mb-3 mb-md-5">
              <div class="row">
                <h3 class="font-bd-is font-1 ms-0 ps-0">معرفی شرکت</h3>
              </div>
              <template>
                <div class="row">
                  <div class="col-12">
                    <div class="border-bm-dashed-c"></div>
                  </div>
                </div>
                <div class="row pt-3 ps-2">
                  <div class="col-12">
                    <div class="mb-4">
                      <label
                        for="about-me-descriptions"
                        class="form-check-label mb-2 font-90 font-md-is  cursor-pointer"
                        >توضیحات :</label
                      >

                      <textarea
                        class="form-control remove-outline"
                        placeholder=""
                        id="floatingTextarea2"
                        style="height: 100px"
                      ></textarea>
                    </div>
                  </div>

                  <!-- end col input -->
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
              </template>
              <div v-if="false" class="row mt-3 font-xs-80 font-md-90">
                <div class="col-12 mb-2 px-4 d-flex flex-wrap font-bd-is">
                  <p>
                    پینتو ادز (pinto Ads) شالوده دانش و همسانی تیمی زبده در حوزه
                    دیجیتال مارکتینگ و توسه وب و اپلیکیشن موبایل است، که تجربه
                    چندین ساله در بستر کسب و کارهای آنلاین ایران را به همراه خود
                    دارد. در پینتو خلاقیت بر محور کار تیمی همیشه جریان دارد.
                    پینتوها از هر چالشی برای ساخت یک فرصت تلاش می‌کنند تا
                    رویاهای خود و مشتریان را به واقعیت نزدیک و نزدیک‌تر کنند.
                  </p>
                </div>
              </div>
            </div>
            <!-- end of introduce company -->
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
