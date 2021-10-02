<template>
  <div class="col-12">
    <div class="p-2 py-3 rounded shadow-c mb-3 bg-c1 mt-5">
      <span class="ms-1 ms-md-3 me-3 me-md-4">
        <i class="fa-solid fa-bookmark align-middle"></i>
        <span class="ms-2 font-xs-80 font-sm-90 text-dark cursor-pointer"
          >ذخیره شده ها
        </span>
      </span>
      <span class="vertical-line"></span>
      <span class="ms-3 ms-md-4 me-2">
        <i class="fa-solid fa-building align-middle"></i>
        <router-link :to="{name:'CompanyPositions'}" class="ms-2 font-xs-80 font-sm-90 text-dark cursor-pointer"
          >فرصت های شغلی
        </router-link>
        <span class="badge bg-dark font-num-bd-is">7</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
