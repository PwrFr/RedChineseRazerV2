<template>
  <div class="">.</div>
  <div
    class="gamingBoxButton container pd-5"
    style="background-image: url('src/assets/products/1Laptops/bg5.jpg')"
  >
    <div
      style="
        font-size: 1.6875rem;
        font-family: Razerf5, Sans-Serif;
        color: #44d62c;
        font-weight: bold;
        padding: 3.4375rem 0 0 1.875rem;
      "
    >
      <!-- RAZER LAPTOP ACCESSORIES -->
      {{ title }}
    </div>

    <p
      style="
        font-size: 1.125rem;
        font-family: Razerf5, Sans-Serif;
        color: #888;
        font-weight: bold;
        padding: 0.1rem 0 0 1.875rem;
      "
    >
      <!-- Maximize your laptop experience -->
      {{ description }}
    </p>


<a href="#"><p
      style="
        font-size: 1.125rem;
        font-family: Razerf5, Sans-Serif;
        color: #44d62c;
        font-weight: bold;
        padding: 1rem 0 0 1.875rem;
      "
    >
       
      {{ bot }}
    </p></a>
    

    <!-- <a
      style="
        font-size: 1.125rem;
        font-family: Razerf5, Sans-Serif;
        color: #44d62c;
        font-weight: bold;
        padding: 1rem 0 0 1.875rem;
      "
      href="#"
      >{{ bot }}</a
    > -->
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
