<template >
  <div>
    <div class="container-fluid" style="padding: 0px; background-color: black">
      <div class="row p-0 mt-0 row-product">
        <div
          class="col-xl-9 col-md-12 col-img-full"
          v-bind:style="{ backgroundImage: 'url(' + bgComponent + ')' }"
        >
          <div class="image-tab">
            <lable>
              <div class="image-tab-list">
                <input type="radio" name="test" @click="changeImage(1)" class="rdo_style" checked />
                <img :src="imageTab1" class="image-tab-border" />
              </div>
            </lable>
            <lable>
              <div class="image-tab-list">
                <input type="radio" name="test" @click="changeImage(2)" class="rdo_style" />
                <img :src="imageTab2" class="image-tab-border" />
              </div>
            </lable>
            <lable>
              <div class="image-tab-list">
                <input type="radio" name="test" @click="changeImage(3)" class="rdo_style" />
                <img :src="imageTab3" class="image-tab-border" />
              </div>
            </lable>
            <lable>
              <div class="image-tab-list">
                <div v-if="4 - imageAmount > 0">
                  <img :src="imageTab4" class="image-tab-border" :style="hiddenBorder4" />
                </div>
                <div v-else>
                  <input type="radio" name="test" @click="changeImage(4)" class="rdo_style" />
                  <img :src="imageTab4" class="image-tab-border" />
                </div>
              </div>
            </lable>
            <lable>
              <div class="image-tab-list">
                <div v-if="5 - imageAmount > 0">
                  <img :src="imageTab5" class="image-tab-border" :style="hiddenBorder5" />
                </div>
                <div v-else>
                  <input type="radio" name="test" @click="changeImage(5)" class="rdo_style" />
                  <img :src="imageTab5" class="image-tab-border" />
                </div>
              </div>
            </lable>
            <lable>
              <div class="image-tab-list">
                <div v-if="6 - imageAmount > 0">
                  <img :src="imageTab6" class="image-tab-border" :style="hiddenBorder6" />
                </div>
                <div v-else>
                  <input type="radio" name="test" @click="changeImage(6)" class="rdo_style" />
                  <img :src="imageTab6" class="image-tab-border" />
                </div>
              </div>
            </lable>
          </div>
        </div>

        <!--leftside -->

        <div class="col-xl-3 col-md-12 right-box w-100 pl-4 pt-2 pr-5">
          <p class="header">{{headerText}}</p>
          <p class="head-description">{{headerDes}}</p>
          <p class="head-price">US${{priceText}}</p>
          <div class="ul-session">
            <ul>
              <li>{{description1}}</li>
              <li v-if="2 <= desAmount">{{description2}}</li>
              <li v-if="3 <= desAmount">{{description3}}</li>
              <li v-if="4 <= desAmount">{{description4}}</li>
              <li v-if="5 <= desAmount">{{description5}}</li>
              <li v-if="6 <= desAmount">{{description6}}</li>
              <li v-if="7 <= desAmount">{{description7}}</li>
              <li v-if="8 <= desAmount">{{description8}}</li>
              <li v-if="9 <= desAmount">{{description9}}</li>
              <li v-if="10 <= desAmount">{{description10}}</li>
              <li v-if="11 <= desAmount">{{description11}}</li>
            </ul>
          </div>

          <!-- boos here --->
          <div v-if="modelBoxDisappear == 0">
            <div class="model-box-div">
              <div id="box" class="model-box">
                <div class="select-box" @click="onClickColor()">
                  <div class="model-options-container" ref="here">
                    <div @click="myFunction('1','2','3')" class="box-option">
                      <input type="radio" class="model-radio" id="Standard - Black" name="category" />
                      <label id="1" for="Standard - Black">Standard - Black</label>
                    </div>

                    <div @click="myFunction('2','1','3')" class="box-option">
                      <input
                        type="radio"
                        class="model-radio"
                        id="Standard - Mercury"
                        name="category"
                      />
                      <label id="2" for="Standard - Mercury">Standard - Mercury</label>
                    </div>

                    <div @click="myFunction('3','1','2')" class="box-option">
                      <input type="radio" class="model-radio" id="Chroma" name="category" />
                      <label id="3" for="Chroma">Chroma</label>
                    </div>
                  </div>

                  <div class="selected">{{modelFirstItem}}</div>
                </div>
              </div>
              <div class="model-box-1" id="box1">
                <b>Model</b>
              </div>
            </div>
          </div>
          <!-- end --->

          <p class="shipping-date">{{shippingDate}}</p>
          <button class="order-button">{{buyingStatus}}</button>

          <p class="product-status">{{buyingAt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/styles/productslot.css";
</style>



<script>
export default {
  props: {
    //Src of image
    imageTab1: String,
    imageTab2: String,
    imageTab3: String,
    imageTab4: String,
    imageTab5: String,
    backgroundSrc: String,
    imageLocateSrc: String,
    //Description
    headerText: String,
    headerDes: String,
    priceText: String,
    desAmount: Number,
    description1: String,
    description2: String,
    description3: String,
    description4: String,
    description5: String,
    description6: String,
    description7: String,
    description8: String,
    description9: String,
    description10: String,
    description11: String,
    shippingDate: String,
    buyingStatus: String,
    buyingAt: String,
    //model Box
    modelBoxDisappear: Number,
    modelFirstItem: String,
    //value of picture
    imageAmount: Number,
    testCase: Number
  },
  data() {
    return {
      nnum: 0,
      onum: 0,

      hiddenBorder4: {
        border: "0px"
      },
      hiddenBorder5: {
        border: "0px"
      },
      hiddenBorder6: {
        border: "0px"
      },
      //imageTab1: "/src/assets/products/cases/bar/1.jpg",
      //imageTab2: "/src/assets/products/cases/bar/2.jpg",
      //imageTab3: "/src/assets/products/cases/bar/3.jpg",
      //imageTab4: "/src/assets/products/cases/bar/4.jpg",
      //imageTab5: "/src/assets/products/cases/bar/5.jpg",
      //wasd: "/src/assets/products/cases/1.jpg"
      bgComponent: this.backgroundSrc
    };
  },
  mounted() {
    this.test();
  },
  methods: {
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

      optionsList.forEach(o => {
        o.addEventListener("click", () => {
          selected.innerHTML = o.querySelector("label").innerHTML;
          optionsContainer.classList.remove("active");
          if (o.querySelector("label").innerHTML == "Standard - Black") {
            location.href = "https://www.youtube.com/watch?v=VNM5yaCcua8";
          } else if (
            o.querySelector("label").innerHTML == "Standard - Mercury"
          ) {
            location.href = "https://www.youtube.com/watch?v=-m4ge-XdCiA";
          } else if (o.querySelector("label").innerHTML == "Chroma") {
            location.href =
              "https://www.youtube.com/watch?v=VadBrjU1ye0&list=PLwlgG919_nRXidl7mXzgMmk_GQoTp1KoT";
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
          .setAttribute("style", "outline: 2px solid #43d32b !important;");
        document
          .getElementById("box1")
          .setAttribute("style", "color: #43d32b;");
        console.log("el");
      }

      this.onum = this.nnum;
      // console.log(this.onum);
      // console.log(this.nnum);
    }
  }
};
</script>