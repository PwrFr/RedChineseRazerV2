<template>
  <div class="pt-3" style="background-color: #000">
    <div style="background-color: #100e13">
      <div
        style="
          background-image: url('src/assets/products/1Laptops/bg8.jpg');
          width: 100%;
          height: 25rem;
          margin-left: -13%;
        "
      >
        <div
          style="
            font-size: 1.75rem;
            font-family: 'RazerF5', Sans-Serif;
            color: #fff;
            padding: 3.7rem 0 0 1.875rem;
            margin-left: 70%;
          "
        >
          {{ title }}
        </div>

        <p
          style="
            font-size: 1.125rem;
            font-family: Razerf5, Sans-Serif;
            color: #888;
            padding: 0.7rem 0 0 1.875rem;
            margin-left: 70%;
            line-height: 1.75rem;
          "
        >
          <!-- Maximize your laptop experience -->
          {{ description }}
        </p>

        <a href="#">
          <p
            style="
              font-size: 1rem;
              font-family: Razerf5, Sans-Serif;
              color: #44d62c;
              font-weight: bold;
              padding: 0.52rem 0 0 1.875rem;
              margin-left: 70%;
            "
          >
            <!-- Learn More> -->
            {{ bot }}
          </p></a
        >
      </div>
    </div>
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
