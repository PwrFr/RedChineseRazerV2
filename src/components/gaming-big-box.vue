<template>
  <div
    class="bigimg-gaming"
    v-bind:style="{ backgroundImage: 'url(' + imgshow.img + ')' }"
    :class="{
      'size-small': imgshow.size == 'small',
      'size-big': imgshow.size == 'big',
    }"
  >
    <div class="pt-4" style="margin-left: 46.6%">
      <p
        class="font-weight-bold"
        :class="{
          ['pt-1']: true,
          topboxtag: imgshow.tag == 'orange',
          topboxtaggreen: imgshow.tag == 'green',
        }"
      >
        {{ imgshow.topbox }}
      </p>
      <p
        class="font-weight-bold pb-1 mb-3"
        style="font-size: 0.9rem"
        :class="{
          topboxtag: imgshow.tag == 'orange',
        }"
      >
        {{ imgshow.topbox2 }}
      </p>
    </div>
    <h1
      style="font-family: Razerf5; font-size: 1.8rem"
      class="text-white text-center"
    >
      {{ imgshow.title }}
    </h1>

    <h3
      style="font-family: Razerf5; color: #999999; font-size: 1.2rem"
      class="text-center"
    >
      {{ imgshow.discrip }}
    </h3>
    <div
      class="d-flex justify-content-center p-3"
      style="color: #44d62c; font-family: Razerf5"
    >
      <a class="mr-5" style="color: #44d62c; font-family: Razerf5" href="#">{{
        imgshow.learnMore
      }}</a>

      <a style="color: #44d62c; font-family: Razerf5" href="#">{{
        imgshow.viewAllModels
      }}</a>
      <!-- <p class="mr-5"></p> -->
      <!-- <p>{{ imgshow.viewAllModels }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgshow"],
};
</script>

<style></style>
