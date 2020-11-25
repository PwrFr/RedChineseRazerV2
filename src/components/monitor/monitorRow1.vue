<template>
  <div class="container-fluid" id="bg-monitorRow1">
    <h2 class="pt-5"><b>THE EDITOR'S CHOICE FOR GAMING DISPLAYS</b></h2>
    <div class="container-fluid">
      <div class="row mid-center">
        <div class="col-lg-4 pt-3">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/fac6ba0c209bdfc6ab05e9a74b3e9e43/kraken-te-toms-guide-award.png"
            alt=""
          />
          <p class="pt-3">
            <b>
              “Razer's Raptor 27 gaming monitor is, quite <br />simply, a 144Hz
              HDR triumph.”
            </b>
          </p>
          <p class="gray-text-monitor">– PC Magazine</p>
        </div>
        <div class="col-lg-4 pt-3">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/fac6ba0c209bdfc6ab05e9a74b3e9e43/kraken-te-pcmag-award.png"
            alt=""
          />
          <p class="pt-3">
            <b>
              “The Razer Raptor 27 delivers high style and <br />
              performance and premium build quality. ”
            </b>
          </p>
          <p class="gray-text-monitor">– Tom's Hardware</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#bg-monitorRow1 {
  background-color: white;
  height: 22.5625rem;
  font-family: RazerF5, Arial, Helvetica, sans-serif;
  text-align: center;
}
.gray-text-monitor {
  color: rgb(136, 136, 136);
}
.mid-center {
  position: relative;
  right: -15%;
  /* transform: translate(-50%, -50%); */
}
</style>
<script>
export default {
  name: "monitorRow1",
};
</script>
