<template>
  <div
    class="bgRL d-flex align-items-center"
    v-bind:style="{ backgroundImage: 'url(' + bgimgRL + ')' }"
  >
    <div class="container product-access-title pl-0">
      <div class="col-4 pr-1 pl-0 razerf5">
        <h1 class="pr-5" style="font-size: 1.7rem">{{ title }}</h1>
        <p class="pr-2" style="color: #999999; font-size: 1.2rem">{{ dis }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgimgRL: String,
    title: String,
    dis: String,
  },
};
</script>

<style></style>
