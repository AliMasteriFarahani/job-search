<template>
       <div class="row mt-5">
        <div class="col-12  col-lg-72">
          <div>
            <ul class="d-flex cs-pagination  justify-content-center">
              <li class="cs-paginate-item right-ang">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center "
                  href=""
                >
                  <i class="fa-regular fa-angle-right"></i>
                </a>
              </li>

              <li class="cs-paginate-item">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center"
                  href=""
                  >1</a
                >
              </li>
              <li class="cs-paginate-item">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center"
                  href=""
                  >2</a
                >
              </li>
              <li class="cs-paginate-item active">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center"
                  href=""
                  >3</a
                >
              </li>
              <li class="cs-paginate-item">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center"
                  href=""
                  >4</a
                >
              </li>
              <li class="cs-paginate-item">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center"
                  href=""
                  >...</a
                >
              </li>
              <li class="cs-paginate-item">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center"
                  href=""
                  >10</a
                >
              </li>
              <li class="cs-paginate-item">
                <a
                  class="w-100 h-100 d-flex align-items-center justify-content-center"
                  href=""
                >
                  <i class="fa-regular fa-angle-left"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.cs-pagination{
  padding: 0 !important;
  margin: 0 !important;
}
.cs-paginate-item{
    display: flex;
    width: 2rem;
    justify-content: center;
    height: 2rem;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    align-items: center;
    overflow: hidden;
    margin-right: .4rem;
    box-shadow: 0 0 7px #ccc;
}
.cs-paginate-item.active{
background-color: #f39811 !important;
}
.cs-paginate-item a{
  color: #000 !important;
  font-family: 'iransanse-num' !important;
}
</style>