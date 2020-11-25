<template>
  <div
    class="bgrowc text-center"
    v-bind:style="{ backgroundImage: 'url(' + bg + ')' }"
  >
    <div class="container text-row-c">
      <h3 class="razerf5 text-black">TUNED TO YOUR COMFORT</h3>
      <p class="razerf5" style="font-size: 1.2rem">
        Crafted with a dual-rail design the Razer Raptor 27 glides seamlessly to
        the desired height that provides the best comfort for use. Wrapped in
        aluminum and fabric, the Razer Raptor 27 tilts up to 90º so all the
        ports can be revealed and accessed with ease.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bg: String,
  },
};
</script>

<style>
.bgrowc {
  background-position-x: center;
}
.text-row-c {
  padding-top: 31rem;
  width: 60%;
}
</style>
