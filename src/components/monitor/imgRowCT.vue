<template>
  <div
    style="background-position-x: center"
    v-bind:style="{ backgroundImage: 'url(' + bg + ')' }"
  >
    <div class="text-center container razerf5 pt-4">
      <div>
        <h3 class="pt-5">CABLE MANAGEMENT FIT FOR YOUR BATTLESTATION</h3>
        <p style="font-size: 1.2rem; padding: 0rem 4rem">
          Not only was the base engineered with height, tilt and swivel
          adjustments to provide the best ergonomics, but also designed with a
          cable management system that’ll please the most demanding PC builders.
          The base is forged out of a single piece of aluminum, with channels
          designed for the cables to ensure a clean and clutter-free desktop,
          while providing absolute stability.
        </p>
      </div>
      <div
        class="row mt-4"
        align="center"
        style="justify-content: center; justify-items: center"
      >
        <div class="col-3">
          <div
            class="mb-3"
            style="width: 3.3rem; height: 3.3rem"
            v-bind:style="{ backgroundImage: 'url(' + icon1 + ')' }"
          ></div>
          <div class="row align-items-end justify-content-center">
            <h6 class="m-0">POWERED BY RAZER CHROMA</h6>
          </div>
          <div class="w-75" style="font-size: 0.9rem">
            <p>
              Customizable and animated 16.8 million colors through Razer
              Synapse 3
            </p>
          </div>
        </div>
        <div class="offset-1 col-3">
          <div
            class="mb-3"
            style="width: 3.3rem; height: 3.3rem"
            v-bind:style="{ backgroundImage: 'url(' + icon2 + ')' }"
          ></div>
          <div class="row align-items-end justify-content-center">
            <h6 class="m-0">CONNECT IT ALL</h6>
          </div>
          <div class="w-75" style="font-size: 0.9rem">
            <p>
              HDMI 2.0b, DP, USB-C, 2x USB3.2 Gen 2, DP (via USB-C), Headphone
              Jack
            </p>
          </div>
        </div>
        <div class="col-3 offset-1">
          <div
            class="mb-3"
            style="width: 3.3rem; height: 3.3rem"
            v-bind:style="{ backgroundImage: 'url(' + icon3 + ')' }"
          ></div>
          <div class="row justify-content-center">
            <h6 class="m-0">EDGE-TO-EDGE SCREEN</h6>
          </div>
          <div class="w-75" style="font-size: 0.9rem">
            <p>
              With a bezel-less viewing area and unique metal-and-fabric blended
              design
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bg: String,
    icon1: String,
    icon2: String,
    icon3: String,
  },
};
</script>

<style></style>
