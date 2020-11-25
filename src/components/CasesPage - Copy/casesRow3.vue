<template>
  <div
    class="cases-row3-full"
    v-bind:style="{ backgroundImage: 'url(' + casesRow3Img + ')',
     paddingTop: paddingTopInput + 'rem',
     height: heightRow3Input + 'px' }"
  >
    <div class="row" v-bind:style=" {}">
      <div class="col-7"></div>
      <div class="col cases-row3-text-range">
        <div class="row cases-row3-header">{{casesRow3Header}}</div>
        <div class="row cases-row3-des">{{casesRow3Des}}</div>
      </div>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: Roba;
  src: url("../../assets/font/Roboto/Roboto-Light.ttf");
}
.cases-row3-full {
  background-color: #222;

  width: 1920px;

  color: white;
}
.cases-row3-text-range {
  max-width: 430px;
}
.cases-row3-header {
  color: #44d62c;
  font-family: "RazerF5", Arial, Helvetica, sans-serif;
  font-size: 1.75rem;
  font-weight: 200;
  letter-spacing: 0.0625rem;
  line-height: 1.875rem;
  margin: 1rem 0;
}
.cases-row3-des {
  align-self: center;
  box-sizing: border-box;
  color: #888;
  font-family: "Robo-light", sans-serif;

  font-size: 1.125em;
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  line-height: 1.5em;
  margin: 0 auto;
}
</style>
<script>
export default {
  props: {
    casesRow3Img: String,
    casesRow3Header: String,
    casesRow3Des: String,
    paddingTopInput: Number,
    heightRow3Input: Number
  }
};
</script>