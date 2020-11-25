<template>
  <div>
    <MenuBar />
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
    <productSize
      proSize="../src/assets/AC2/razer-protective-sleeves-v2-usp0-desktop.jpg"
      title="AVAILABLE IN"
      dis="13.3″ | 15.6″ | 17.3″"
    />
    <headerAccessProduct
      title="PROTECT YOUR UNFAIR ADVANTAGE"
      dis="Safeguard your unfair advantage at every turn with the Razer Protective Sleeve V2—a sleek, durable, and versatile sheath that keeps your Razer Blade laptop shielded from harm, no matter what the game throws your way."
    />

    <SideImgRowL
      bgimgRL="../src/assets/AC2/razer-protective-sleeves-v2-usp2-desktop.jpg"
      title="SMOOTH INTERIOR SURFACE WITH BUILT-IN MOUSE MAT"
      dis="Designed for dual usage, the sleeve’s interior features the same surface found on our mobile gaming mats, providing an ultra-slim layer of protection that transforms into a workstation."
    />
    <SideImgRowR
      bgimgRR="../src/assets/AC2/razer-protective-sleeves-v2-usp3-desktop.jpg"
      title="CUSTOM FIT FOR OUR RAZER BLADE LAPTOPS"
      dis="Made to measure, the Razer Protective Sleeve V2 is designed to perfectly accommodate all variants of our Razer Blade laptop, so you can carry the winning edge wherever you go."
    />
    <ColAccessProduct
      colimgProduct0="../src/assets/AC2/chromatic-wordmark.jpg"
      colimgProduct1="../src/assets/AC2/snag-free-velcro.jpg"
      colimgProduct2="../src/assets/AC2/slim-design.jpg"
      titleL="CHROMATIC WORDMARK"
      titleC="SNAG-FREE VELCRO"
      titleR="SLIM PROFILE DESIGN"
      disL="Blaze a trail across your commute with a bold, light-reactive holographic wordmark that leaves no doubt as to whose side you’re on."
      disC="Soft to the touch, snag-free Velcro strips along the flap and mouth of the sleeve keep the laptop securely in place without collecting unwanted material or catching on your clothes."
      disR="Equipped with a sleek silhouette, the sleeve’s slim form factor feels great in your hands, and fits snugly into similarly sized backpacks and briefcases, making portability a breeze."
    />
    <div v-if="specSwitch == 0">
      <!-- spec 1 here -->
    </div>
    <div v-if="specSwitch == 1">
      <!-- spec 2 here -->
    </div>
    <div v-if="specSwitch == 2">
      <!-- spec 3 here -->
    </div>
    <techAcc3 />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import headerAccessProduct from "./components/headerAccesssProduct.vue";
import productSize from "./components/accessSize.vue";
import SideImgRowL from "./components/SideImgRowL.vue";
import SideImgRowR from "./components/SideImgRowR.vue";
import ColAccessProduct from "./components/ColAccessProduct.vue";
import datas from "./assets/data.json";
import techAcc3 from "./components/techAcc3.vue";

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

      headerJson: datas.PC_Acessories.ACCESSORIES.Product[3].name,
      desJson: datas.PC_Acessories.ACCESSORIES.Product[1].des,

      priceJson: datas.PC_Acessories.ACCESSORIES.Product[3].price,
      detailAmountJson:
        datas.PC_Acessories.ACCESSORIES.Product[1].detail.length,
      detailJson1: datas.PC_Acessories.ACCESSORIES.Product[1].detail[0],
      detailJson2: datas.PC_Acessories.ACCESSORIES.Product[1].detail[1],
      detailJson3: datas.PC_Acessories.ACCESSORIES.Product[1].detail[2],
      modelItemAmount: datas.PC_Acessories.ACCESSORIES.Product[1].model.length,
      modelFirstNameJson: datas.PC_Acessories.ACCESSORIES.Product[1].model[2],
      modelItem1: datas.PC_Acessories.ACCESSORIES.Product[1].model[0],
      modelItem2: datas.PC_Acessories.ACCESSORIES.Product[1].model[1],
      modelItem3: datas.PC_Acessories.ACCESSORIES.Product[1].model[2],

      imageAmount: "5",
      imageTab1:
        "/src/assets/img/PC_Acessories/Accessories/ProtectiveSleeveV2/bar/1.jpg",
      imageTab2:
        "/src/assets/img/PC_Acessories/Accessories/ProtectiveSleeveV2/bar/2.jpg",
      imageTab3:
        "/src/assets/img/PC_Acessories/Accessories/ProtectiveSleeveV2/bar/3.jpg",
      imageTab4:
        "/src/assets/img/PC_Acessories/Accessories/ProtectiveSleeveV2/bar/4.jpg",
      imageTab5:
        "/src/assets/img/PC_Acessories/Accessories/ProtectiveSleeveV2/bar/5.jpg",
      bgComponent:
        "/src/assets/img/PC_Acessories/Accessories/ProtectiveSleeveV2/1.jpg",
      imageLocateSrc:
        "/src/assets/img/PC_Acessories/Accessories/ProtectiveSleeveV2/",
      modelBoxDisappear: "0",
      shippingDate: "Ships next business day",
      buyingStatus: "ADD TO CART",
      buyingAt: "",
      whiteSelecterText: "2",
    };
  },
  mounted() {
    this.test();
  },
  components: {
    MenuBar,
    SideImgRowL,
    SideImgRowR,
    headerAccessProduct,
    ColAccessProduct,
    productSize,
    techAcc3,
  },
  methods: {
    firstSelecter() {
      (this.headerJson = datas.PC_Acessories.ACCESSORIES.Product[1].name),
        (this.priceJson = datas.PC_Acessories.ACCESSORIES.Product[1].price),
        (this.whiteSelecterText = "0");
      this.specSwitch = "0";
    },
    secondSelecter() {
      (this.headerJson = datas.PC_Acessories.ACCESSORIES.Product[2].name),
        (this.priceJson = datas.PC_Acessories.ACCESSORIES.Product[2].price),
        (this.whiteSelecterText = "1");
      this.specSwitch = "1";
    },
    thirdSelecter() {
      (this.headerJson = datas.PC_Acessories.ACCESSORIES.Product[3].name),
        (this.priceJson = datas.PC_Acessories.ACCESSORIES.Product[3].price),
        (this.whiteSelecterText = "2");
      this.specSwitch = "2";
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
