<template>
  <div
    class="product-size razerf5 text-center"
    v-bind:style="{ backgroundImage: 'url(' + proSize + ')' }"
  >
    <h2 class="pt-5" style="color: #44d62c; font-size: 1.8rem">{{ title }}</h2>
    <p class="text-white" style="font-size: 1.2rem">{{ dis }}</p>
  </div>
</template>

<script>
export default {
  props: {
    proSize: String,
    title: String,
    dis: String,
  },
};
</script>

<style></style>
