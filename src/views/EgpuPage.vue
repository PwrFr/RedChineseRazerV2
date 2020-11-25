<template>
  <section>
    <div>
      <div
        class="container-fluid text-left"
        style="padding: 0px; background-color: black"
      >
        <div class="row p-0 mt-0 row-product">
          <div
            class="col-xl-10 col-md-12 col-img-full"
            v-bind:style="{
              backgroundImage: 'url(' + require('@/' + bgComponent) + ')',
            }"
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
                  <img
                    :src="require('@/' + imageTab1)"
                    class="image-tab-border"
                  />
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
                  <img
                    :src="require('@/' + imageTab2)"
                    class="image-tab-border"
                  />
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
                  <img
                    :src="require('@/' + imageTab3)"
                    class="image-tab-border"
                  />
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <div v-if="4 - imageAmount > 0">
                    <img
                      :src="require('@/' + imageTab4)"
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
                    <img
                      :src="require('@/' + imageTab4)"
                      class="image-tab-border"
                    />
                  </div>
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <div v-if="5 - imageAmount > 0">
                    <img
                      :src="require('@/' + imageTab5)"
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
                    <img
                      :src="require('@/' + imageTab5)"
                      class="image-tab-border"
                    />
                  </div>
                </div>
              </lable>
              <lable>
                <div class="image-tab-list">
                  <div v-if="6 - imageAmount > 0">
                    <img
                      :src="imageTab6 !== null ? require('@/' + imageTab6) : ''"
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
                    <img
                      :src="imageTab6 !== null ? require('@/' + imageTab6) : ''"
                      class="image-tab-border"
                    />
                  </div>
                </div>
              </lable>
            </div>
          </div>

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
            <p class="shipping-date">{{ shippingDate }}</p>
            <button class="order-button">{{ buyingStatus }}</button>

            <p class="product-status">{{ buyingAt }}</p>
          </div>
        </div>
      </div>

      <EGPU1 />
      <eGPU2 />
      <eGPU3 />
      <eGPU4 />
      <eGPU5 />
      <eGPU6 />
      <eGPU7 />
    </div>

    <eGPUbottom />
    <div v-if="specSwitch == 0">
      <!-- spec 1 here -->
      <techSpecEgpuBlack />
    </div>
    <div v-if="specSwitch == 1">
      <!-- spec 2 here -->
      <techSpecEgpuBlack />
    </div>
    <div v-if="specSwitch == 2">
      <!-- spec 3 here -->
      <techSpecEgpu />
    </div>
  </section>
</template>

<script>
const eGPU2 = () => import("@/components/eGPUsPage/eGPU2.vue");
const eGPU3 = () => import("@/components/eGPUsPage/eGPU3.vue");
const eGPU4 = () => import("@/components/eGPUsPage/eGPU4.vue");
const eGPU5 = () => import("@/components/eGPUsPage/eGPU5.vue");
const eGPU6 = () => import("@/components/eGPUsPage/eGPU6.vue");
const eGPU7 = () => import("@/components/eGPUsPage/eGPU7.vue");
const techSpecEgpu = () => import("@/components/techSpecEgpuChroma.vue");
const techSpecEgpuBlack = () => import("@/components/techSpecEgpuBlack.vue");

const eGPUbottom = () => import("@/components/eGPUsPage/eGPUbottom.vue");
import datas from "@/models/data.js";
const EGPU1 = () => import("@/components/eGPUsPage/eGPU1");

export default {
  created() {},
  data() {
    return {
      nnum: 0,
      specSwitch: 2,
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

      headerJson: datas.eGPU[2].name,
      desJson: datas.eGPU[2].des,

      priceJson: datas.eGPU[2].price,
      detailAmountJson: datas.eGPU[2].detail.length,
      detailJson1: datas.eGPU[2].detail[0],
      detailJson2: datas.eGPU[2].detail[1],
      detailJson3: datas.eGPU[2].detail[2],
      modelItemAmount: datas.eGPU[2].model.length,
      modelFirstNameJson: datas.eGPU[2].model[2],
      modelItem1: datas.eGPU[2].model[0],
      modelItem2: datas.eGPU[2].model[1],
      modelItem3: datas.eGPU[2].model[2],

      imageAmount: "5",
      imageTab1: "assets/img/eGPUs/Chroma/s1.jpg",
      imageTab2: "assets/img/eGPUs/Chroma/s2.jpg",
      imageTab3: "assets/img/eGPUs/Chroma/s3.jpg",
      imageTab4: "assets/img/eGPUs/Chroma/s4.jpg",
      imageTab5: "assets/img/eGPUs/Chroma/s5.jpg",
      imageTab6: null,
      bgComponent: "assets/img/eGPUs/Chroma/1.jpg",
      imageLocateSrc: "assets/img/eGPUs/Chroma/",
      modelBoxDisappear: "0",
      shippingDate: "Ships next business day",
      buyingStatus: "ADD TO CART",
      buyingAt: "Also Available At",
      whiteSelecterText: "2",
    };
  },
  mounted() {
    this.test();
  },
  components: {
    techSpecEgpu,
    techSpecEgpuBlack,
    eGPU2,
    eGPU3,
    eGPUbottom,
    eGPU4,
    eGPU5,
    eGPU6,
    eGPU7,
    EGPU1,
  },
  methods: {
    firstSelecter() {
      this.headerJson = datas.eGPU[0].name;
      this.desJson = datas.eGPU[0].des;

      this.priceJson = datas.eGPU[0].price;
      this.detailAmountJson = datas.eGPU[0].detail.length;
      this.detailJson1 = datas.eGPU[0].detail[0];
      this.detailJson2 = datas.eGPU[0].detail[1];
      this.detailJson3 = datas.eGPU[0].detail[2];
      this.modelItemAmount = datas.eGPU[0].model.length;
      this.modelFirstNameJson = datas.eGPU[0].model[0];
      this.modelItem1 = datas.eGPU[0].model[0];
      this.modelItem2 = datas.eGPU[0].model[1];
      this.modelItem3 = datas.eGPU[0].model[2];

      this.imageAmount = "6";
      this.imageTab1 = "assets/img/eGPUs/RazerCoreX-Black/s1.jpg";
      this.imageTab2 = "assets/img/eGPUs/RazerCoreX-Black/s2.jpg";
      this.imageTab3 = "assets/img/eGPUs/RazerCoreX-Black/s3.jpg";
      this.imageTab4 = "assets/img/eGPUs/RazerCoreX-Black/s4.jpg";
      this.imageTab5 = "assets/img/eGPUs/RazerCoreX-Black/s5.jpg";
      this.imageTab6 = "assets/img/eGPUs/RazerCoreX-Black/s6.jpg";
      this.bgComponent = "assets/img/eGPUs/RazerCoreX-Black/1.jpg";
      this.imageLocateSrc = "assets/img/eGPUs/RazerCoreX-Black/";
      this.modelBoxDisappear = "0";
      this.shippingDate = "Ships next business day";
      this.buyingStatus = "ADD TO CART";
      this.buyingAt = "Also Available At";
      this.whiteSelecterText = "0";
      this.specSwitch = "0";
    },
    secondSelecter() {
      this.headerJson = datas.eGPU[1].name;
      this.desJson = datas.eGPU[1].des;

      this.priceJson = datas.eGPU[1].price;
      this.detailAmountJson = datas.eGPU[1].detail.length;
      this.detailJson1 = datas.eGPU[1].detail[0];
      this.detailJson2 = datas.eGPU[1].detail[1];
      this.detailJson3 = datas.eGPU[1].detail[2];
      this.modelItemAmount = datas.eGPU[1].model.length;
      this.modelFirstNameJson = datas.eGPU[1].model[1];
      this.modelItem1 = datas.eGPU[1].model[0];
      this.modelItem2 = datas.eGPU[1].model[1];
      this.modelItem3 = datas.eGPU[1].model[2];

      this.imageAmount = "6";
      this.imageTab1 = "assets/img/eGPUs/RazerCoreX-Mercury/s1.jpg";
      this.imageTab2 = "assets/img/eGPUs/RazerCoreX-Mercury/s2.jpg";
      this.imageTab3 = "assets/img/eGPUs/RazerCoreX-Mercury/s3.jpg";
      this.imageTab4 = "assets/img/eGPUs/RazerCoreX-Mercury/s4.jpg";
      this.imageTab5 = "assets/img/eGPUs/RazerCoreX-Mercury/s5.jpg";
      this.imageTab6 = "assets/img/eGPUs/RazerCoreX-Mercury/s6.jpg";
      this.bgComponent = "assets/img/eGPUs/RazerCoreX-Mercury/1.jpg";
      this.imageLocateSrc = "assets/img/eGPUs/RazerCoreX-Mercury/";
      this.modelBoxDisappear = "0";
      this.shippingDate = "Ships next business day";
      this.buyingStatus = "ADD TO CART";
      this.buyingAt = "Also Available At";
      this.whiteSelecterText = "1";
      this.specSwitch = "1";
    },
    thirdSelecter() {
      this.headerJson = datas.eGPU[2].name;
      this.desJson = datas.eGPU[2].des;

      this.priceJson = datas.eGPU[2].price;
      this.detailAmountJson = datas.eGPU[2].detail.length;
      this.detailJson1 = datas.eGPU[2].detail[0];
      this.detailJson2 = datas.eGPU[2].detail[1];
      this.detailJson3 = datas.eGPU[2].detail[2];
      this.modelItemAmount = datas.eGPU[2].model.length;
      this.modelFirstNameJson = datas.eGPU[2].model[2];
      this.modelItem1 = datas.eGPU[2].model[0];
      this.modelItem2 = datas.eGPU[2].model[1];
      this.modelItem3 = datas.eGPU[2].model[2];

      this.imageAmount = "5";
      this.imageTab1 = "assets/img/eGPUs/Chroma/s1.jpg";
      this.imageTab2 = "assets/img/eGPUs/Chroma/s2.jpg";
      this.imageTab3 = "assets/img/eGPUs/Chroma/s3.jpg";
      this.imageTab4 = "assets/img/eGPUs/Chroma/s4.jpg";
      this.imageTab5 = "assets/img/eGPUs/Chroma/s5.jpg";
      this.imageTab6 = null;
      this.bgComponent = "assets/img/eGPUs/Chroma/1.jpg";
      this.imageLocateSrc = "assets/img/eGPUs/Chroma/";
      this.modelBoxDisappear = "0";
      this.shippingDate = "Ships next business day";
      this.buyingStatus = "ADD TO CART";
      this.buyingAt = "Also Available At";
      this.whiteSelecterText = "2";
      this.specSwitch = "2";
    },
    changeImage(num) {
      if (num <= this.imageAmount) {
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

      if (this.onum === this.nnum || this.nnum % 2 == 0) {
        document
          .getElementById("box")
          .setAttribute("style", "border: 1px solid #adadad;");
        document
          .getElementById("box1")
          .setAttribute("style", "color: #adadad;");

        if (this.nnum % 2 != 0) {
          optionsContainer.classList.remove("active");
          this.nnum += 1;
        }
      } else {
        document
          .getElementById("box")
          .setAttribute("style", "border: 2px solid #43d32b !important;");
        document
          .getElementById("box1")
          .setAttribute("style", "color: #43d32b;");
      }

      this.onum = this.nnum;
      // console.log(this.onum);
      // console.log(this.nnum);
    },
  },
};
</script>
<style>
