<template>
  <div class="container techSpcesBox">
    <div class="row">
      <div><h4 id="headerText">TECH SPECS</h4></div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech">Display</div>
      <div class="col-lg-5 text-center-tech">
        <li>27" WQHD (2560 x 1440px) resolution</li>
        <li>Non-Glare IPS Display with up to 178° wide viewing angles</li>
      </div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech">Display</div>
      <div class="col-lg-5 text-center-tech">
        <li>27" WQHD (2560 x 1440px) resolution</li>
        <li>Non-Glare IPS Display with up to 178° wide viewing angles</li>
      </div>
    </div>
  </div>
</template>
<style>
.techSpecsBox {
  background-color: #252525;
  color: white;
}
.line-tech {
  border-bottom: solid 1px #999;
  color: white;
}
.text-center-tech{
    text-align: left;
}
</style>
<script>
export default {
  name: "tmonitor",
};
</script>