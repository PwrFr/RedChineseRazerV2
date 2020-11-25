<template>
  <div style="background-color: #000; height: 54rem">
    <div class="container mb-5">
      <div class="row d-flex justify-content-center mb-5">
        <div class="card-gpu no-border col-4 card no-padding pt-4 pl-2 pr-4">
          <img
            class="card-img-top"
            v-bind:src="'src/assets/products/2eGPUs/' + '12' + '.jpg'"
            v-bind:alt="pic"
          />
          <h3 class="text-head-bottom razerf5">VERSATILE COMPATIBILITY</h3>
          <div class="text-description">
            The Razer Core X external graphic enclosure <br />
            is incredibly
            <strong>versatile and compatible</strong> with <br />
            <strong>Thunderbolt™ 3</strong> systems running Windows <br />
            10 RS5 or later and Macs running macOS <br />
            High Sierra 10.13.4 or later. Laptops require
            <br />
            a Thunderbolt 3 port with external graphics (eGFX) support.
          </div>
        </div>

        <div class="card-gpu no-border col-4 card no-padding pt-4 pl-2 pr-4">
          <img
            class="card-img-top"
            v-bind:src="'src/assets/products/2eGPUs/' + '13' + '.jpg'"
            v-bind:alt="pic"
          />
          <h3 class="text-head-bottom razerf5">FUTURE PROOF</h3>
          <div class="text-description">
            Stay at the top of your game by keeping your <br />
            performance maxed. Razer Core X series <br />
            lets you easily <strong>upgrade your graphics card, </strong> <br />
            so you can instantly give your laptop a <br />
            boost.
          </div>
        </div>

        <div class="card-gpu no-border col-4 card no-padding pt-4 pl-2 pr-4">
          <img
            class="card-img-top"
            v-bind:src="'src/assets/products/2eGPUs/' + '14' + '.jpg'"
            v-bind:alt="pic"
          />
          <h3 class="text-head-bottom razerf5">STAY COOL ALWAYS</h3>
          <div class="text-description">
            Perfectly sized to fit your setup, the Razer <br />
            Core X series feature additional cooling and <br />
            open vents in its aluminum body for <br />
            <strong>optimized thermal performance.</strong>
          </div>
        </div>
      </div>

      <p class="pt-5 mb-5" style="color: #888; font-size: 0.9em">
        Razer compatible laptops include the Razer Blade Stealth, Razer Blade,
        and Razer Blade Pro (GTX 1060 version) with Thunderbolt 3 port. <br />
        Laptops require a Thunderbolt 3 port with
        <strong class="text-white">external graphics (eGFX)</strong> support.
      </p>

      <div
        style="
          font-size: 0.6875rem;
          color: #888;
          margin-top: 6rem;
          margin-left: -1rem;
        "
      >
        Thunderbolt logo are trademarks of Intel Corporation in the U.S. and/or
        other countries.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
