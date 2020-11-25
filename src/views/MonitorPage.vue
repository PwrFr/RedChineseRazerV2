<template>
  <MenuBar />
  <div>
    <ProductSlot
      class="mt-5"
      imageAmount="5"
      imageTab1="/src/assets/products/4Monitors/productImage/bar/1.jpg"
      imageTab2="/src/assets/products/4Monitors/productImage/bar/2.jpg"
      imageTab3="/src/assets/products/4Monitors/productImage/bar/3.jpg"
      imageTab4="/src/assets/products/4Monitors/productImage/bar/4.jpg"
      imageTab5="/src/assets/products/4Monitors/productImage/bar/5.jpg"
      backgroundSrc="/src/assets/products/4Monitors/productImage/1.jpg"
      imageLocateSrc="/src/assets/products/4Monitors/productImage/"
      :headerText="headerJson"
      :headerDes="desJson"
      :priceText="priceJson"
      :desAmount="detailAmountJson"
      :description1="detailJson1"
      :description2="detailJson2"
      :description3="detailJson3"
      modelBoxDisappear="1"
      :modelAmount="modelItemAmount"
      modelLink1="https://fb.com"
      modelLink2="https://www.youtube.com/watch?v=-m4ge-XdCiA"
      modelLink3="https://www.youtube.com"
      :modelName1="modelItem1"
      :modelName2="modelItem2"
      :modelName3="modelItem3"
      :modelFirstItem="modelFirstNameJson"
      :shippingDate="shipStatusJson"
      :buyingStatus="buttonJson"
      buyingAt="Also Available At"
    />
    <monitorRow1 />
    <headerAccessProduct
      class="pb-5"
      title="PIXEL PERFECT"
      dis="A gaming monitor requires extreme performance with speed and clarity, so you can react in a split-second. It also needs to be able to display deep vibrant colors and a natural life-like image to create a sense of immersion. The Razer Raptor was created to be a true expression of this, and more—a no-compromise display that produces breathtaking image quality for your battlestation."
    />
    <monitorRow3 />
    <SideImgRowR
      style="height: 51rem"
      class="pr-5 pt-5"
      bgimgRR="../src/assets/monitor/raptor-update-dev_02-usp-light.jpg"
      title="LIGHTNING FAST
144HZ PRECISION"
      dis="While 60Hz monitors may cut it for some, the ultimate gaming experience requires a much higher rate. With a blistering 144Hz refresh rate, The Razer Raptor can display more than double the frames than the industry standard while the Ultra Low Motion Blur technology further enhances the sharpness of each individual frame. This produces an incredible image with stunning clarity and life-like fluid motion, so no matter how hectic the action gets, you can react faster with more precision"
    />
    <testingRow
      testL="../src/assets/monitor/raptor-update-dev_03-gameplay-1.jpg"
      testR="../src/assets/monitor/raptor-update-dev_05-gameplay-2.jpg"
    />
    <imgRowC
      style="height: 41rem"
      bg="../src/assets/monitor/raptor-update-dev_07-usp3.jpg"
    />
    <SideImgRowR
      style="height: 39rem"
      class="pr-5 pt-5"
      bgimgRR="../src/assets/monitor/raptor-update-dev_08-usp4.jpg"
      title="SYNAPSE CONTROL"
      dis="Whether you're gaming, streaming, creating, or working the built-in profiles within the Razer Raptor 27 are optimized for each and every task. Change profiles on the fly and set the mood directly through your PC. Adjusting brightness and contrast has never been easier with a click of a mouse or push of a keyboard."
      probb="../src/assets/monitor/raptor-update-logo-usp.png"
    />
    <imgRowCT
      style="height: 61rem"
      bg="../src/assets/monitor/raptor-update-dev_09-usp5.jpg"
      icon1="../src/assets/monitor/raptor-update-dev_10-razer-chroma.png"
      icon2="../src/assets/monitor/razer-raptor-27-connect-icon.png"
      icon3="../src/assets/monitor/razer-raptor-27-screen-icon.png"
    />
    <techSpecMonitor />

    <Footer />
  </div>
</template>

<script>
import SideImgRowR from "./components/SideImgRowR.vue";
import testingRow from "./components/monitor/testingRow.vue";
import MenuBar from "./components/MenuBar.vue";
import ProductSlot from "./components/ProductSlot.vue";
import Footer from "./components/Footer.vue";
import datas from "./assets/data.json";
import headerAccessProduct from "./components/headerAccesssProduct.vue";
import imgRowC from "./components/monitor/imgRowC.vue";
import monitorRow1 from "./components/monitor/monitorRow1.vue";
import imgRowCT from "./components/monitor/imgRowCT.vue";

import monitorRow3 from "./components/monitor/monitorRow3.vue";

//Row5 use same component with row3
import techSpecMonitor from "./components/techSpecMonitor.vue";

export default {
  props: {},
  name: "MonitorPage",
  components: {
    headerAccessProduct,
    ProductSlot,
    MenuBar,
    techSpecMonitor,
    monitorRow1,
    monitorRow3,
    SideImgRowR,
    testingRow,
    imgRowC,
    imgRowCT,
    Footer,
  },
  data() {
    return {
      headerJson: datas.monitors[0].name,
      desJson: datas.monitors[0].des,
      priceJson: datas.monitors[0].price,
      detailAmountJson: datas.monitors[0].detail.length,
      detailJson1: datas.monitors[0].detail[0],
      detailJson2: datas.monitors[0].detail[1],
      detailJson3: datas.monitors[0].detail[2],
      shipStatusJson: datas.monitors[0].ship_status,
      buttonJson: datas.monitors[0].add_to_card_bnt,
    };
  },
  created() {
    console.log(datas.monitors[0].name);
  },
};
</script>
