<template>
  <div class="row mt-5">
    <div class="col-12 col-lg-72">
      <div>
        <ul class="d-flex cs-pagination justify-content-center">
          <li
            v-if="currentPage != 1 && allPages > 3"
            class="cs-paginate-item right-ang"
          >
            <span
              @click="changePage(currentPage - 1)"
              class="
                w-100
                h-100
                d-flex
                align-items-center
                justify-content-center
                cursor-pointer
              "
            >
              <i class="fa-regular fa-angle-right"></i>
            </span>
          </li>
          <!-- 
          <li
            :class="['cs-paginate-item', { active: active == j }]"
            v-for="(page, i) in pages"
            :key="i"
          >
            <a
              class="
                w-100
                h-100
                d-flex
                align-items-center
                justify-content-center
              "
              href=""
              >{{ i + 1 }}</a
            >
          </li> -->

          <li
            :class="[
              'cs-paginate-item',
              { active: currentPage == page.pageId },
            ]"
            v-for="(page, index) in pages"
            :key="index"
          >
            <span
              @click.prevent="changePage(page.pageId)"
              class="
                w-100
                h-100
                d-flex
                align-items-center
                justify-content-center
                cursor-pointer
              "
              href="#search"
              >{{ page.pageId }}</span
            >
          </li>

          <!--
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
              -->
          <li
            v-if="currentPage != allPages && allPages > 3"
            class="cs-paginate-item"
          >
            <span
              @click="changePage(currentPage + 1)"
              class="
                w-100
                h-100
                d-flex
                align-items-center
                justify-content-center
                cursor-pointer
              "
            >
              <i class="fa-regular fa-angle-left"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allPages: {
      Number,
      default: 1,
    },
    getPageId:{
      Number,
      default:1
    }
  },
  data() {
    return {
      currentPage: 1,
      numOfBtn:3,
    };
  },
  computed: {
    startPage() {
      if (this.currentPage == 1) {
        return 1;
      }
      if (this.currentPage == this.allPages && this.allPages !=2) {
        return this.allPages - this.numOfBtn + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(this.startPage + 3 - 1, this.allPages);
      //  return this.currentPage +1
    },
    pages() {
      let range = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({ pageId: i });
      }
      return range;
    },
  },
  methods: {
    changePage(pageId) {
      this.currentPage = pageId;
      window.scrollTo(0,0)
      this.$emit('pageChanged',this.currentPage)
      console.log('ccc',this.currentPage);
    },
  },
  watch:{
    getPageId(v){
      this.currentPage = v;
    }
  }
};
</script>

<style>
.cs-pagination {
  padding: 0 !important;
  margin: 0 !important;
}
.cs-paginate-item {
  display: flex;
  width: 2rem;
  justify-content: center;
  height: 2rem;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  align-items: center;
  overflow: hidden;
  margin-right: 0.4rem;
  box-shadow: 0 0 7px #ccc;
}
.cs-paginate-item.active {
  background-color: #f39811 !important;
}
.cs-paginate-item span {
  color: #000 !important;
  font-family: "iransanse-num" !important;
  user-select: none !important;
}
</style>