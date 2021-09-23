<template>
  <footer class="container-fluid mt-5">
    <div class="container">
      <div class="row pt-5">
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h3 class="font-1 item-title w-lg-75 w-100 color-gray">کارجویان</h3>
          <ul>
            <li class="mt-4"><a href="">آگهی های استخدام</a></li>
            <li class="mt-4"><a href="">ایمیل های اطلاع رسانی</a></li>
            <li class="mt-4"><a href="">رزومه ساز</a></li>
            <li class="mt-4"><a href="">آشنایی با شرکت ها</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h3 class="font-1 item-title w-lg-75 color-gray">کارفرمایان</h3>
          <ul>
            <li class="mt-4"><a href="">ثبت آگهی</a></li>
            <li class="mt-4"><a href="">تعرفه ها</a></li>
            <li class="mt-4"><a href="">بخش کارفرمایان</a></li>
            <li class="mt-4"><a href="">نمایشگاه های برتر</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h3 class="font-1 item-title w-lg-75 color-gray">درباره ما</h3>
          <ul>
            <li class="mt-4"><a href="">تماس با ما</a></li>
            <li class="mt-4"><a href="">قوانین و مقررات</a></li>
            <li class="mt-4"><a href="">سوالات متداول</a></li>
            <li class="mt-4"><a href="">وبلاگ</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h3 class="font-1 item-title w-lg-75 width-100 color-gray">
            نماد ها
          </h3>
          <ul>
            <li class="mt-4">
              <a href="">
                <img src="/images/footer/enamad.png" class="float-start" alt="" />
              </a>
            </li>
            <li class="mt-4">
              <a href="">
                <img
                  src="/images/footer/resaneh.png"
                  class="float-start"
                  style="width: 125px;"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 d-flex justify-content-center justify-content-lg-end"
        >
          <ul class="social pe-lg-3">
            <li class="me-1">
              <a href="">
                <img src="/images/social/telegram.svg" alt="" />
              </a>
            </li>
            <li class="me-1">
              <a href="">
                <img
                  class="img-fluid"
                  src="/images/social/twitter_icon.svg"
                  alt=""
                />
              </a>
            </li>
            <li class="me-1">
              <a href="">
                <img src="/images/social/linkedin.svg" alt="" />
              </a>
            </li>
            <li class="me-1">
              <a href="">
                <img src="/images/social/circle_instagram_icon.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          <p class="text-center font-80 color-gray">
            کلیه حقوق مادی و معنوی نزد این سایت محفوظ است .
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/*  footer  */
footer {
  background-color: #2c3e50 !important;
}
.item-title {
  border-bottom: 0.12rem dashed;
  padding-bottom: 1rem;
  width: 100%;
}
footer ul {
  padding: 0 !important;
  margin: 0 !important;
}
footer ul li {
  list-style: none !important;
  font-size: 0.92rem;
}
footer ul li a {
  color: #eee;
}
footer ul li a:hover {
  color: #f58f10;
}
.width-100 {
  width: 100% !important;
}

footer ul.social {
  float: left;
}

footer ul.social li {
  float: right;
}
footer ul.social li img {
  width: 42px;
  height: 42px;
}
</style>
