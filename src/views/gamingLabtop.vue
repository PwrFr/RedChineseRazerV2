<template>
  <section>
    <GamingTop />
    <div class="container">
      <div class="row d-flex justify-content-between mt-4">
        <GamingSmallBox
          v-for="(i, index) in json.gaming_laptop"
          :key="index"
          :card="json.gaming_laptop[index]"
        />
      </div>
    </div>
    <div class="mt-4">
      <GamingBigBox
        v-for="(i, index) in json.gaming_laptop_1"
        :key="index"
        :imgshow="json.gaming_laptop_1[index]"
      />
    </div>
    <div class="container-gaming">
      <GamingBoxBottom
        title="RAZER LAPTOP ACCESSORIES"
        description="Maximize your laptop experience"
        bot="Learn More>"
      />

      <GamingBoxBottom2
        title="Get 3 years of repair support including accidental damage coverage with RazerCare Elite."
        bot="Protect your Razer Blade today>"
      />

      <GamingBoxBottom3
        title="Razer Education Program"
        description1="Get special privileges
      only for students."
        description2="5% OFF Razer Blade laptops"
        description3="15% OFF Razer gaming gear &amp; Razer Customs"
        bot="Sign Up
      Now >"
      />
    </div>
    <div>
      <GamingBoxBottom4
        title="#MADEWITHBLADE"
        description="#MADEWITHBLADE is an exploration into the cutting-edge creativity of some of the most talented artists in the world. Come inside their studios and behind-the scenes as these artists share exclusive stories about how Razer Blade laptops are helping them push the envelope of music production, visual effects, digital illustration and 3D animation."
        bot="More #MADEWITHBLADE stories>"
      />
    </div>
  </section>
</template>

<script>
const GamingBigBox = () => import("@/components/gaming-big-box");
const GamingSmallBox = () => import("@/components/gaming-small-box");
const GamingTop = () => import("@/components/gaming-top");
const GamingBoxBottom = () => import("@/components/gaming-box-bottom");
import datas from "@/models/data.js";
const GamingBoxBottom4 = () => import("@/components/gaming-box-bottom4");
const GamingBoxBottom3 = () => import("@/components/gaming-box-bottom3");
const GamingBoxBottom2 = () => import("@/components/gaming-box-bottom2");

export default {
  name: "gamingLabtop",
  components: {
    GamingTop,
    GamingSmallBox,
    GamingBigBox,
    GamingBoxBottom,
    GamingBoxBottom2,
    GamingBoxBottom3,
    GamingBoxBottom4,
  },
  data() {
    return {
      json: datas,
    };
  },
  mounted() {},
};
</script>

<style></style>
