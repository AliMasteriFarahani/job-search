<template>
  <div class="position-fixed bottom-0 start-0 p-3" style="z-index: 11">
    <div
      :class="[
        'toast align-items-center',
        { show: getStatus == 'ok' || getStatus == 'failed' },
      ]"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div
          :class="[
            'toast-body',
            {
              'text-success': getStatus == 'ok',
              'text-danger': getStatus == 'failed',
            },
          ]"
        >
          <template v-if="getStatus == 'ok'">
            اطلاعات با موفقیت ذخیره شد
          </template>
          <template v-if="getStatus == 'failed'">
            متاسفانه خطایی به وجود آمده است !
          </template>
        </div>
        <button
          type="button"
          class="btn-close me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { getStatus: { String } },
    watch: {
    getStatus(v) {
      if (v == "ok" || v == "failed") {
        setTimeout(() => {
          this.$store.commit("setStatus", null);
        }, 3000);
      }
    },
  },
};
</script>

<style>
</style>