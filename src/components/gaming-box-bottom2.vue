<template>
  <div class="">.</div>
  <div
    class="gamingBoxButton container pd-5"
    style="background-image: url('src/assets/products/1Laptops/bg6.jpg')"
  >
    <div
      style="
        font-size: 1.25rem;
        font-family: 'RazerF5', Sans-Serif;
        color: #fff;
        font-weight: bold;
        padding: 4.5rem 0 0 1.875rem;
        margin-left: 49%;
      "
    >
      {{ title }}
    </div>
    <a href="#">
         <p
      style="
        font-size: 1.125rem;
        font-family: Razerf5, Sans-Serif;
        color: #44d62c;
        font-weight: bold;
        padding: 0.5rem 0 0 1.875rem;
        margin-left: 49%;
      "
    >
      <!-- Learn More> -->
      {{ bot }}
    </p>
    </a>

   
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    bot: String,
  },
};
</script>

<style></style>
