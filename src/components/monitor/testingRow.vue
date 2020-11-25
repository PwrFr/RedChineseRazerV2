<template>
  <div class="pt-5" style="background-color: #212121">
    <div class="text-center container pt-3">
      <h3 class="razerf5 text-razer mb-1">ADAPT TO YOUR GAMEPLAY</h3>
      <p class="razerf5 text-grey pr-3 pl-3" style="font-size: 1.3rem">
        Gone are the days of screen tearing, with the latest in adaptive sync
        technology, the Razer Raptor 27 supports both AMD Freesync and NVIDIA
        G-sync Compatible standards. Play games without stuttter and eliminate
        input lag completely. Enjoy a variable refresh rate monitor that
        complements your graphics card as you embark on an adventure in a
        mystical world or turn the corner in a FPS shooter.
      </p>
      <div class="row justify-content-center mb-0">
        <div class="col-5 text-grey m-4">
          <div
            class="testingImg w-100"
            v-bind:style="{ backgroundImage: 'url(' + testL + ')' }"
          ></div>
          <p class="p-2 razerf5" style="font-size: 1.2rem">Screen tearing</p>
        </div>
        <div class="col-5 text-grey m-4">
          <div
            class="testingImg w-100"
            v-bind:style="{ backgroundImage: 'url(' + testR + ')' }"
          ></div>
          <p class="p-2 razerf5" style="font-size: 1.2rem">No tearing</p>
        </div>
      </div>
      <p class="razerf5 text-grey pt-3 pb-4" style="font-size: 0.8rem">
        *Screen tearing simulated for marketing purposes.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testL: String,
    testR: String,
  },
};
</script>

<style>
.testingImg {
  height: 20rem;
}
</style>
