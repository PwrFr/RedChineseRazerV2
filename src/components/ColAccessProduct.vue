<template>
  <div class="pt-4" style="background-color: black">
    <div class="container p-5 text-center razerf5">
      <div class="row text-white">
        <div class="col-4">
          <div
            class="colimgProduct"
            v-bind:style="{ backgroundImage: 'url(' + colimgProduct0 + ')' }"
          ></div>
          <h4 class="pt-3">{{ titleL }}</h4>
          <p style="color: #999999; font-size: 1rem" class="pl-4 pr-4">
            {{ disL }}
          </p>
        </div>
        <div class="col-4">
          <div
            class="colimgProduct"
            v-bind:style="{ backgroundImage: 'url(' + colimgProduct1 + ')' }"
          ></div>
          <h4 class="pt-3">{{ titleC }}</h4>
          <p style="color: #999999; font-size: 1rem" class="pl-4 pr-4">
            {{ disC }}
          </p>
        </div>
        <div class="col-4">
          <div
            class="colimgProduct"
            v-bind:style="{ backgroundImage: 'url(' + colimgProduct2 + ')' }"
          ></div>
          <h4 class="pt-3">{{ titleR }}</h4>
          <p style="color: #999999; font-size: 1rem" class="pl-4 pr-4">
            {{ disR }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colimgProduct0: String,
    colimgProduct1: String,
    colimgProduct2: String,
    titleL: String,
    titleC: String,
    titleR: String,
    disL: String,
    disC: String,
    disR: String,
  },
};
</script>

<style></style>
