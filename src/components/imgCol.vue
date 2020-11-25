<template>
  <div class="row text-white text-center mt-2 mb-2">
    <a
      href=""
      class="col-6 img-col pt-5"
      v-bind:style="{
        backgroundImage: 'url(' + require('@/assets/home/' + bgImgCL) + ')',
      }"
    >
      <h2 class="titleC pb-1">{{ titleCL }}</h2>
      <span class="discripC font-weight-bold text-light">{{
        discriptionCL
      }}</span>
    </a>
    <a
      href=""
      class="col-6 img-col pt-5"
      v-bind:style="{
        backgroundImage: 'url(' + require('@/assets/home/' + bgImgCR) + ')',
      }"
    >
      <h2 class="titleC pb-1">{{ titleCR }}</h2>
      <span class="discripC text-light font-weight-bold">{{
        discriptionCR
      }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    bgImgCL: String,
    titleCL: String,
    discriptionCL: String,
    bgImgCR: String,
    titleCR: String,
    discriptionCR: String,
  },
};
</script>

<style>
</style>