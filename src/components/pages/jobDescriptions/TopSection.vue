<template>
  <div class="col-12">
    <div class="p-2 py-3 rounded shadow-c mb-3 bg-c1 mt-5">
      <span class="ms-1 ms-md-3 me-3 me-md-4">
        <i class="fa-solid fa-bookmark align-middle"></i>
        <router-link
          :to="{ name: 'Saved' }"
          class="ms-2 font-xs-80 font-sm-90 text-dark cursor-pointer"
          >ذخیره شده ها
        </router-link>
      </span>
      <span class="vertical-line"></span>
      <span class="ms-3 ms-md-4 me-2">
        <i class="fa-solid fa-building align-middle"></i>
        <router-link
          :to="{
            name: 'CompanyPositions',
            params: {
              id: this.getJobDetails == '' ? 1: this.getJobDetails.companyId,
              slug: sanitizeTitleSlug(getJobDetails.companyName)
            },
          }"
          class="ms-2 font-xs-80 font-sm-90 text-dark cursor-pointer"
          >فرصت های شغلی
        </router-link>
        <span class="badge bg-dark font-num-bd-is">{{
          getJobDetails.numOfJobPosition
        }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { makeSlug } from "@/Mixins/makeSlug";
export default {
  mixins: [makeSlug],
  computed: {
    ...mapGetters(["getJobDetails"]),
  },


};
</script>

<style></style>
