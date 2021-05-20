<template>
  <div>
    <div class="tw-w-full tw-h-20 nav-class">
      <nuxt-link to="/library/home">
        <div class="tw-flex tw-items-center tw-py-3 tw-px-4">
          <img src="/logo.svg" class="tw-h-14" alt="" srcset="" />
        </div>
      </nuxt-link>
    </div>
    <div class="tw-h-screen">
      <embed
        src="/sample-3pp.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nav-class {
  background-color: #1f2932;
}
</style>