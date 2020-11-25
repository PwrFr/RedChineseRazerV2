<template>
  <section>
    <div
      class="bgRL d-flex align-items-center"
      v-bind:style="{
        backgroundImage: 'url(' + require('@/' + bgimgRR) + ')',
      }"
    >
      <div
        class="ml-5 pl-5 product-access-title pl-0 pr-0 row justify-content-end"
      >
        <div class="col-4 pr-4 mr-4 pl-0 razerf5">
          <h1 class="" style="font-size: 1.7rem; padding-right: 4rem">
            {{ title }}
          </h1>
          <p class="pr-5 mr-1" style="color: #999999; font-size: 1.2rem">
            {{ dis }}
          </p>
          <div class="m-3" style="height: 6rem; width: 6rem"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bgimgRR: String,
    title: String,
    dis: String,
    probb: String,
  },
};
</script>

<style></style>
