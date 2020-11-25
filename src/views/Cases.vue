<template>
  <section>
    <div>
      <div
        class="container-fluid mt-5"
        style="padding: 0px; background-color: black"
      >
        <div class="row p-0 mt-0 row-product">
          <div
            class="col-xl-10 col-md-12 col-img-full"
            v-bind:style="{ backgroundImage: 'url(' + bgComponent + ')' }"
          >
            <div class="image-tab">
              <lable>
                <div class="image-tab-list">
                  <input
                    type="radio"
                    name="test"
                    @click="changeImage(1)"
                    class="rdo_style"
                    checked
                  />
                  <img :src="imageTab1" class="image-tab-border" />
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <input
                    type="radio"
                    name="test"
                    @click="changeImage(2)"
                    class="rdo_style"
                  />
                  <img :src="imageTab2" class="image-tab-border" />
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <input
                    type="radio"
                    name="test"
                    @click="changeImage(3)"
                    class="rdo_style"
                  />
                  <img :src="imageTab3" class="image-tab-border" />
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <div v-if="4 - imageAmount > 0">
                    <img
                      :src="imageTab4"
                      class="image-tab-border"
                      :style="hiddenBorder4"
                    />
                  </div>
                  <div v-else>
                    <input
                      type="radio"
                      name="test"
                      @click="changeImage(4)"
                      class="rdo_style"
                    />
                    <img :src="imageTab4" class="image-tab-border" />
                  </div>
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <div v-if="5 - imageAmount > 0">
                    <img
                      :src="imageTab5"
                      class="image-tab-border"
                      :style="hiddenBorder5"
                    />
                  </div>
                  <div v-else>
                    <input
                      type="radio"
                      name="test"
                      @click="changeImage(5)"
                      class="rdo_style"
                    />
                    <img :src="imageTab5" class="image-tab-border" />
                  </div>
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <div v-if="6 - imageAmount > 0">
                    <img
                      :src="imageTab6"
                      class="image-tab-border"
                      :style="hiddenBorder6"
                    />
                  </div>
                  <div v-else>
                    <input
                      type="radio"
                      name="test"
                      @click="changeImage(6)"
                      class="rdo_style"
                    />
                    <img :src="imageTab6" class="image-tab-border" />
                  </div>
                </div>
              </lable>
            </div>
          </div>

          <!--leftside -->

          <div class="col right-box w-100 pr-5">
            <p class="header">{{ headerJson }}</p>
            <p class="head-description">{{ desJson }}</p>
            <p class="head-price">{{ priceJson }}</p>
            <div class="ul-session">
              <ul>
                <li>{{ detailJson1 }}</li>
                <li v-if="2 <= detailAmountJson">{{ detailJson2 }}</li>
                <li v-if="3 <= detailAmountJson">{{ detailJson3 }}</li>
                <li v-if="4 <= detailAmountJson">{{ detailJson4 }}</li>
                <li v-if="5 <= detailAmountJson">{{ detailJson5 }}</li>
                <li v-if="6 <= detailAmountJson">{{ detailJson6 }}</li>
                <li v-if="7 <= detailAmountJson">{{ detailJson7 }}</li>
                <li v-if="8 <= detailAmountJson">{{ detailJson8 }}</li>
                <li v-if="9 <= detailAmountJson">{{ detailJson9 }}</li>
                <li v-if="10 <= detailAmountJson">{{ detailJson10 }}</li>
                <li v-if="11 <= detailAmountJson">{{ detailJson11 }}</li>
              </ul>
            </div>

            <!-- boos here --->
            <div v-if="modelBoxDisappear == 0">
              <div class="model-box-div">
                <div id="box" class="model-box">
                  <div class="select-box" @click="onClickColor()">
                    <div class="model-options-container" ref="here">
                      <div
                        class="box-option"
                        v-if="1 <= modelItemAmount"
                        @click="firstSelecter()"
                      >
                        <input
                          type="radio"
                          class="model-radio"
                          id="Standard - Black"
                          name="category"
                        />
                        <div v-if="whiteSelecterText == 0" style="color: white">
                          <label id="1" for="Standard - Black">
                            {{ modelItem1 }}
                          </label>
                        </div>
                        <div v-else>
                          <label id="1" for="Standard - Black">
                            {{ modelItem1 }}
                          </label>
                        </div>
                      </div>

                      <div
                        class="box-option"
                        v-if="2 <= modelItemAmount"
                        @click="secondSelecter()"
                      >
                        <input
                          type="radio"
                          class="model-radio"
                          id="Standard - Mercury"
                          name="category"
                        />
                        <div v-if="whiteSelecterText == 1" style="color: white">
                          <label id="2" for="Standard - Black">
                            {{ modelItem2 }}
                          </label>
                        </div>
                        <div v-else>
                          <label id="2" for="Standard - Black">
                            {{ modelItem2 }}
                          </label>
                        </div>
                      </div>

                      <div
                        class="box-option"
                        v-if="3 <= modelItemAmount"
                        @click="thirdSelecter()"
                      >
                        <input
                          type="radio"
                          class="model-radio"
                          id="Chroma"
                          name="category"
                          @click="thirdSelecter"
                        />
                        <div v-if="whiteSelecterText == 2" style="color: white">
                          <label id="3" for="Standard - Black">
                            {{ modelItem3 }}
                          </label>
                        </div>
                        <div v-else>
                          <label id="3" for="Standard - Black">
                            {{ modelItem3 }}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="selected">{{ modelFirstNameJson }}</div>
                  </div>
                </div>
                <div class="model-box-1" id="box1">
                  <b>Model</b>
                </div>
              </div>
            </div>
            <!-- end --->

            <p class="shipping-date">{{ shippingDate }}</p>
            <button class="order-button">{{ buyingStatus }}</button>

            <p class="product-status">{{ buyingAt }}</p>
          </div>
        </div>
      </div>

      <VideoSession />

      <Row1 />
      <Row2 />
      <Row3
        casesRow3Img="/src/assets/products/3Cases/row3.jpg"
        casesRow3Header="DUAL-SIDED TEMPERED GLASS SWIVEL DOORS"
        casesRow3Des="Installing new parts has never been this convenient or straightforward, with forward-opening doors that can also be detached for more room to focus on your build. Made of tough, tempered glass, they offer the perfect protection while showing off the power and performance of Chroma-enabled hardware within."
        paddingTopInput="10"
        heightRow3Input="600"
      />
      <Row4 />
      <Row3
        casesRow3Img="/src/assets/products/3Cases/row5.jpg"
        casesRow3Header="FRONT PANEL CONNECTIVITY"
        casesRow3Des="The Razer Tomahawk’s front panel is designed for convenient setup, sporting the latest USB 3.2 Gen 2 Type-C port for faster connection with the latest devices, a dedicated mic port for streamers, a mic/headphone combo port, and 2 standard USB Type-A ports."
        paddingTopInput="11.8"
        heightRow3Input="597"
      />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <div v-if="specSwitch == 0">
        <techSpecCaseMini />
      </div>
      <div v-if="specSwitch == 1">
        <techSpecCase />
      </div>
    </div>
  </section>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";

import Footer from "./components/Footer.vue";
import datas from "./assets/data.json";
import VideoSession from "./components/CasesPage/casesVideo.vue";
import Row1 from "./components/CasesPage/casesRow1.vue";
import Row2 from "./components/CasesPage/casesRow2.vue";
import Row3 from "./components/CasesPage/casesRow3.vue";
import Row4 from "./components/CasesPage/casesRow4.vue";
import Row6 from "./components/CasesPage/casesRow6.vue";
import Row7 from "./components/CasesPage/casesRow7.vue";
import Row8 from "./components/CasesPage/casesRow8.vue";
import Row9 from "./components/CasesPage/casesRow9.vue";
//Row5 use same component with row3
import techSpecCase from "./components/CasesPage/techSpecCase.vue";
import techSpecCaseMini from "./components/CasesPage/techSpecCaseMini.vue";

export default {
  created() {},
  data() {
    return {
      nnum: 0,
      specSwitch: 1,
      onum: 0,
      hiddenBorder4: {
        border: "0px",
      },
      hiddenBorder5: {
        border: "0px",
      },
      hiddenBorder6: {
        border: "0px",
      },
      //imageTab1: "/src/assets/products/cases/bar/1.jpg",
      //imageTab2: "/src/assets/products/cases/bar/2.jpg",
      //imageTab3: "/src/assets/products/cases/bar/3.jpg",
      //imageTab4: "/src/assets/products/cases/bar/4.jpg",
      //imageTab5: "/src/assets/products/cases/bar/5.jpg",
      //wasd: "/src/assets/products/cases/1.jpg"

      headerJson: datas.Cases[1].name,
      desJson: datas.Cases[1].des,
      priceJson: datas.Cases[1].price,
      detailAmountJson: datas.Cases[1].detail.length,
      detailJson1: datas.Cases[1].detail[0],
      detailJson2: datas.Cases[1].detail[1],
      detailJson3: datas.Cases[1].detail[2],
      modelItemAmount: datas.Cases[1].model.length,
      modelFirstNameJson: datas.Cases[1].model[1],
      modelItem1: datas.Cases[1].model[0],
      modelItem2: datas.Cases[1].model[1],
      modelItem3: datas.Cases[1].model[2],

      imageAmount: "6",
      imageTab1: "/src/assets/products/3Cases/ATX/bar/1.jpg",
      imageTab2: "/src/assets/products/3Cases/ATX/bar/2.jpg",
      imageTab3: "/src/assets/products/3Cases/ATX/bar/3.jpg",
      imageTab4: "/src/assets/products/3Cases/ATX/bar/4.jpg",
      imageTab5: "/src/assets/products/3Cases/ATX/bar/5.jpg",
      imageTab6: "/src/assets/products/3Cases/ATX/bar/6.jpg",
      bgComponent: "/src/assets/products/3Cases/ATX/1.jpg",
      imageLocateSrc: "/src/assets/products/3Cases/ATX/",
      modelBoxDisappear: "0",
      modelLink1: "https://fb.com",
      modelLink2: "https://www.youtube.com/watch?v=-m4ge-XdCiA",
      modelLink3: "https://www.youtube.com",
      shippingDate: "Ships on December 03, 2020",
      buyingStatus: "PRE-ORDER",
      buyingAt: "Also Available At",
      whiteSelecterText: "1",
    };
  },
  mounted() {
    this.test();
  },
  components: {
    MenuBar,
    VideoSession,
    Row1,
    Row2,
    Row3,
    Row4,
    Row6,
    Row7,
    Row8,
    Row9,
    techSpecCase,
    techSpecCaseMini,
    Footer,
  },
  methods: {
    firstSelecter() {
      this.headerJson = datas.Cases[0].name;
      this.desJson = datas.Cases[0].des;
      this.priceJson = datas.Cases[0].price;
      this.detailAmountJson = datas.Cases[0].detail.length;
      this.detailJson1 = datas.Cases[0].detail[0];
      this.detailJson2 = datas.Cases[0].detail[1];
      this.detailJson3 = datas.Cases[0].detail[2];
      this.modelItemAmount = datas.Cases[0].model.length;
      this.modelFirstNameJson = datas.Cases[0].model[0];
      this.modelItem1 = datas.Cases[0].model[0];
      this.modelItem2 = datas.Cases[0].model[1];
      this.modelItem3 = datas.Cases[0].model[2];
      this.imageAmount = "5";
      this.imageTab1 = "/src/assets/products/3Cases/bar/1.jpg";
      this.imageTab2 = "/src/assets/products/3Cases/bar/2.jpg";
      this.imageTab3 = "/src/assets/products/3Cases/bar/3.jpg";
      this.imageTab4 = "/src/assets/products/3Cases/bar/4.jpg";
      this.imageTab5 = "/src/assets/products/3Cases/bar/5.jpg";
      this.imageTab6 = null;
      this.bgComponent = "/src/assets/products/3Cases/2.jpg";
      this.imageLocateSrc = "/src/assets/products/3Cases/";
      this.modelBoxDisappear = "0";
      this.shippingDate = "Ships on December 03, 2020";
      this.buyingStatus = "PRE-ORDER";
      this.buyingAt = "Also Available At";
      this.whiteSelecterText = "0";
      this.specSwitch = "0";
    },
    secondSelecter() {
      this.headerJson = datas.Cases[1].name;
      this.desJson = datas.Cases[1].des;
      this.priceJson = datas.Cases[1].price;
      this.detailAmountJson = datas.Cases[1].detail.length;
      this.detailJson1 = datas.Cases[1].detail[0];
      this.detailJson2 = datas.Cases[1].detail[1];
      this.detailJson3 = datas.Cases[1].detail[2];
      this.modelItemAmount = datas.Cases[1].model.length;
      this.modelFirstNameJson = datas.Cases[1].model[1];
      this.modelItem1 = datas.Cases[1].model[0];
      this.modelItem2 = datas.Cases[1].model[1];
      this.modelItem3 = datas.Cases[1].model[2];
      this.imageAmount = "6";
      this.imageTab1 = "/src/assets/products/3Cases/ATX/bar/1.jpg";
      this.imageTab2 = "/src/assets/products/3Cases/ATX/bar/2.jpg";
      this.imageTab3 = "/src/assets/products/3Cases/ATX/bar/3.jpg";
      this.imageTab4 = "/src/assets/products/3Cases/ATX/bar/4.jpg";
      this.imageTab5 = "/src/assets/products/3Cases/ATX/bar/5.jpg";
      this.imageTab6 = "/src/assets/products/3Cases/ATX/bar/6.jpg";
      this.bgComponent = "/src/assets/products/3Cases/ATX/1.jpg";
      this.imageLocateSrc = "/src/assets/products/3Cases/";
      this.modelBoxDisappear = "0";
      this.shippingDate = "Ships on December 03, 2020";
      this.buyingStatus = "PRE-ORDER";
      this.buyingAt = "Also Available At";
      this.whiteSelecterText = "1";
      this.specSwitch = "1";
    },
    thirdSelecter() {
      this.headerJson = datas.Cases[1].name;
      this.desJson = datas.Cases[1].des;
      this.priceJson = datas.Cases[1].price;
      this.detailAmountJson = datas.Cases[1].detail.length;
      this.detailJson1 = datas.Cases[1].detail[0];
      this.detailJson2 = datas.Cases[1].detail[1];
      this.detailJson3 = datas.Cases[1].detail[2];
      this.modelItemAmount = datas.Cases[1].model.length;
      this.modelFirstNameJson = datas.Cases[1].model[1];
      this.modelItem1 = datas.Cases[1].model[0];
      this.modelItem2 = datas.Cases[1].model[1];
      this.modelItem3 = datas.Cases[1].model[2];
      this.imageAmount = "6";
      this.imageTab1 = "/src/assets/products/3Cases/ATX/bar/1.jpg";
      this.imageTab2 = "/src/assets/products/3Cases/ATX/bar/2.jpg";
      this.imageTab3 = "/src/assets/products/3Cases/ATX/bar/3.jpg";
      this.imageTab4 = "/src/assets/products/3Cases/ATX/bar/4.jpg";
      this.imageTab5 = "/src/assets/products/3Cases/ATX/bar/5.jpg";
      this.imageTab6 = "/src/assets/products/3Cases/ATX/bar/6.jpg";
      this.bgComponent = "/src/assets/products/3Cases/ATX/1.jpg";
      this.imageLocateSrc = "/src/assets/products/3Cases/";
      this.modelBoxDisappear = "0";
      this.shippingDate = "Ships on December 03, 2020";
      this.buyingStatus = "PRE-ORDER";
      this.buyingAt = "Also Available At";
      this.whiteSelecterText = "1";
      this.specSwitch = "1";
    },
    changeImage(num) {
      if (num <= this.imageAmount) {
        console.log("can");
        this.bgComponent = this.imageLocateSrc + num + ".jpg";
      }
    },

    test() {
      const selected = document.querySelector(".selected");
      const optionsContainer = document.querySelector(
        ".model-options-container"
      );
      const optionsList = document.querySelectorAll(".box-option");

      selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
        this.nnum += 1;
      });

      optionsList.forEach((o) => {
        o.addEventListener("click", () => {
          selected.innerHTML = o.querySelector("label").innerHTML;
          optionsContainer.classList.remove("active");
          if (o.querySelector("label").innerHTML == this.modelItem1) {
          } else if (o.querySelector("label").innerHTML == this.modelItem2) {
            //location.href = this.modelLink2;
          } else if (o.querySelector("label").innerHTML == this.modelItem3) {
            location.href = this.modelLink3;
          }
        });
      });
    },

    myFunction(change, not_change1, not_change2) {
      document
        .getElementById(change)
        .setAttribute("style", "color: #f5f5f5;font-size:inherit");
      document
        .getElementById(not_change1)
        .setAttribute("style", "color: 8d8d8d");
      document
        .getElementById(not_change2)
        .setAttribute("style", "color: 8d8d8d");
    },

    onClickColor() {
      const optionsContainer = document.querySelector(
        ".model-options-container"
      );
      console.log(this.onum);
      console.log(this.nnum);

      console.log("nomal");

      if (this.onum === this.nnum || this.nnum % 2 == 0) {
        document
          .getElementById("box")
          .setAttribute("style", "border: 1px solid #adadad;");
        document
          .getElementById("box1")
          .setAttribute("style", "color: #adadad;");
        console.log("bigif");

        if (this.nnum % 2 != 0) {
          optionsContainer.classList.remove("active");
          this.nnum += 1;

          console.log("if");
        }
      } else {
        document
          .getElementById("box")
          .setAttribute("style", "border: 2px solid #43d32b !important;");
        document
          .getElementById("box1")
          .setAttribute("style", "color: #43d32b;");
        console.log("el");
      }

      this.onum = this.nnum;
      // console.log(this.onum);
      // console.log(this.nnum);
    },
  },
};
</script>
<style>
@import "./index.css";
</style>