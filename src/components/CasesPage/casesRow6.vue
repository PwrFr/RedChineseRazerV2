<template>
  <section>
    <div
      class="cases-row6-full"
      v-bind:style="{
        backgroundImage:
          'url(' + require('@/assets/products/cases/row6.jpg') + ')',
      }"
    >
      <div class="row">
        <div class="col-3"></div>
        <div class="col cases-row6-text-range">
          <div class="row cases-row6-margin">
            <div class="col-1" style="padding-top: 10px">
              <img src="@/assets/products/3Cases/row6-logo.png" alt />
            </div>
            <div class="col cases-row6-text text-left">
              <div class="row cases-row6-header">
                POWERED BY RAZER CHROMA™ RGB
              </div>
              <div class="row cases-row6-des">
                To complement the Chroma-enabled hardware inside, both our
                mini-ITX and mid-tower ATX gaming cases have a sleek underglow
                integrated into their engineering. With 16.8 million colors and
                a suite of effects, sync it up with the rest of your
                battlestation and enjoy greater immersion as it dynamically
                reacts with over 150 integrated games.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.cases-row6-full {
  background-color: #222;
  background-position: center;
  width: 100%;
  height: 691px;
  color: white;
}
.cases-row6-margin {
  padding-top: 485.5px;
  padding-left: 25px;
}
.cases-row6-text-range {
}
.cases-row6-text {
  padding-left: 60px;
}
.cases-row6-header {
  margin-top: 0px;
  color: #44d62c;
  font-family: "RazerF5", Arial, Helvetica, sans-serif;
  font-size: 1.75rem;
  font-weight: 200;
  letter-spacing: 0.0625rem;
  line-height: 1.875rem;

  margin-bottom: 15px;
}
.cases-row6-des {
  align-self: center;
  box-sizing: border-box;
  color: #888;
  font-family: "Robo-light", sans-serif;
  font-size: 1.125em;
  font-weight: 300;
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  line-height: 1.5em;
  max-width: 745px;
}
</style>