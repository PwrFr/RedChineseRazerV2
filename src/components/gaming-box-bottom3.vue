<template>
  <div class="">.</div>
  <div
    class="gamingBoxButton container pd-5"
    style="background-image: url('src/assets/products/1Laptops/bg7.jpg')"
  >
    <div
      style="
        font-size: 1.6875rem;
        font-family: Razerf5, Sans-Serif;
        color: #44d62c;
        font-weight: bold;
        padding: 2rem 0 0 1.875rem;
        text-transform: uppercase;
      "
    >
      <!-- RAZER LAPTOP ACCESSORIES -->
      {{ title }}
    </div>

    <div style="margin-top: 1rem" class="gaming-description-bottom">
      {{ description1 }}
    </div>
    <br />
    <div class="gaming-description-bottom">{{ description2 }}</div>
    <br />
    <div class="gaming-description-bottom">{{ description3 }}</div>


<a href="#"><p
      style="
        font-size: 1.05rem;
        font-family: Razerf5, Sans-Serif;
        color: #44d62c;
        font-weight: bold;
        padding: 2rem 0 0 1.875rem;
      "
    >
      <!-- Learn More> -->
      {{ bot }}
    </p></a>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description1: String,
    description2: String,
    description3: String,
    bot: String,
  },
};
</script>

<style></style>
