<template>
  <div class="access mt-5 pt-3">
    <div class="text-center container pt-3 mt-4">
      <h1 class="text-light pc-title pt-1 mb-4 pb-1">PC</h1>

      <div id="myDIV row d-flex justify-content-center mt-4">
        <button
          class="btnC"
          @click="
            select = 1;
            isActive1[0] = null;
            isActive2[0] = null;
            isActive3[0] = null;
          "
          :class="{ 'access-faro': select == 1 }"
        >
          LAPTOPS
        </button>
        <button
          class="btnC"
          @click="
            select = 2;
            isActive0[0] = null;
            isActive0[1] = null;
            isActive0[2] = null;
            isActive0[3] = null;
            isActive0[4] = null;
            isActive0[5] = null;
            isActive0[6] = null;
            isActive0[7] = null;
            isActive0[8] = null;
            isActive0[9] = null;
            isActive2[0] = null;
            isActive3[0] = null;
          "
          :class="{ 'access-faro': select == 2 }"
        >
          EGPUS
        </button>
        <button
          class="btnC"
          @click="
            select = 3;
            isActive0[0] = null;
            isActive0[1] = null;
            isActive0[2] = null;
            isActive0[3] = null;
            isActive0[4] = null;
            isActive0[5] = null;
            isActive0[6] = null;
            isActive0[7] = null;
            isActive0[8] = null;
            isActive0[9] = null;
            isActive1[0] = null;
            isActive3[0] = null;
          "
          :class="{ 'access-faro': select == 3 }"
        >
          ACCESSORIES
        </button>
        <button
          class="btnC"
          @click="
            select = 4;
            isActive0[0] = null;
            isActive0[1] = null;
            isActive0[2] = null;
            isActive0[3] = null;
            isActive0[4] = null;
            isActive0[5] = null;
            isActive0[6] = null;
            isActive0[7] = null;
            isActive0[8] = null;
            isActive0[9] = null;
            isActive1[0] = null;
            isActive2[0] = null;
          "
          :class="{ 'access-faro': select == 4 }"
        >
          MONITORS
        </button>
      </div>
    </div>
  </div>

  <div class="container access-body mt-3 p-0">
    <div class="row">
      <div class="col-3 pr-1 pt-4">
        <h4 class="fillter mb-4 pb-3">FILTER BY</h4>
        <div v-if="select === 1">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.LAPTOPS.Filter"
            :key="key"
            :class="{
              'underline-faro': index != 9,
            }"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive0[index] = !isActive0[index]"
            >
              {{ key }}
              <svg
                :class="{
                  ['arrowUp']: isActive0[index] == true,
                  ['arrowDown']: isActive0[index] == false,
                }"
                class="arrow-access align-middle mr-3"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 18 24"
              >
                <path
                  d="M6.028 0 v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
                />
              </svg>
            </p>

            <div
              :class="{
                ['cursor-point']: true,
                ['active-faro']: isActive0[index] == false,
                ['distive-faro']: isActive0[index] == true,
                ['null-faro']: isActive0[index] == null,
              }"
              v-for="(value, key) in value"
              :key="key"
            >
              <label class="wrap-checkbox m-0">
                {{ value }}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div v-if="select === 2">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.EGPUS.Filter"
            :key="key"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive1[index] = !isActive1[index]"
            >
              {{ key }}
              <svg
                :class="{
                  ['arrowUp']: isActive1[index] == true,
                  ['arrowDown']: isActive1[index] == false,
                }"
                class="arrow-access align-middle mr-3"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 18 24"
              >
                <path
                  d="M6.028 0 v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
                />
              </svg>
            </p>
            <div
              :class="{
                ['cursor-point']: true,
                ['active-faro']: isActive1[index] == false,
                ['distive-faro']: isActive1[index] == true,
                ['null-faro']: isActive1[index] == null,
              }"
              v-for="(value, key) in value"
              :key="key"
            >
              <label class="wrap-checkbox m-0">
                {{ value }}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div v-if="select === 3">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.ACCESSORIES
              .Filter"
            :key="key"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive2[index] = !isActive2[index]"
            >
              {{ key }}
              <svg
                :class="{
                  ['arrowUp']: isActive2[index] == true,
                  ['arrowDown']: isActive2[index] == false,
                }"
                class="arrow-access align-middle mr-3"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 18 24"
              >
                <path
                  d="M6.028 0 v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
                />
              </svg>
            </p>
            <div
              :class="{
                ['cursor-point']: true,
                ['active-faro']: isActive2[index] == false,
                ['distive-faro']: isActive2[index] == true,
                ['null-faro']: isActive2[index] == null,
              }"
              v-for="(value, key) in value"
              :key="key"
            >
              <label class="wrap-checkbox m-0">
                {{ value }}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div v-if="select === 4">
          <div
            class="pl-3 fillter-pad"
            v-for="(value, key, index) in json_obj.PC_Acessories.MONITORS
              .Filter"
            :key="key"
          >
            <p
              class="text-uppercase cursor-point font-weight-bold"
              @click="isActive3[index] = !isActive3[index]"
            >
              {{ key }}
              <svg
                :class="{
                  ['arrowUp']: isActive3[index] == true,
                  ['arrowDown']: isActive3[index] == false,
                }"
                class="arrow-access align-middle mr-3"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 18 24"
              >
                <path
                  d="M6.028 0 v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z"
                />
              </svg>
            </p>
            <div
              :class="{
                ['cursor-point']: true,
                ['active-faro']: isActive3[index] == false,
                ['distive-faro']: isActive3[index] == true,
                ['null-faro']: isActive3[index] == null,
              }"
              v-for="(value, key) in value"
              :key="key"
            >
              <label class="wrap-checkbox m-0">
                {{ value }}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div v-if="select === 1" class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.LAPTOPS.Product.length }} products
          </div>
          <div v-else-if="select === 2" class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.EGPUS.Product.length }} products
          </div>
          <div v-else-if="select === 3" class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.ACCESSORIES.Product.length }} products
          </div>
          <div v-else class="pt-3 pl-2 mt-1 amount-products">
            {{ json_obj.PC_Acessories.MONITORS.Product.length }} products
          </div>
          <div class="d-flex align-items-end icon-row">
            <svg
              @click="icon_select = 1"
              :class="{
                'icon-select': icon_select == 1,
                ['cursor-point']: true,
              }"
              class="icon-layout"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"
              />
            </svg>
            <svg
              @click="icon_select = 2"
              :class="{
                'icon-select': icon_select == 2,
                ['cursor-point']: true,
              }"
              class="icon-list"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"
              />
            </svg>
            <!-- boos here --->
            <div>
              <div class="model-box-div-faro mt-2 ml-3 mr-3">
                <div id="box" class="model-box-fff">
                  <div class="select-box" @click="onClickColor()">
                    <div class="model-options-container" ref="here">
                      <div @click="testfuck()" class="box-option">
                        <input
                          type="radio"
                          class="model-radio"
                          id="Standard - Black"
                          name="category"
                        />

                        <div @click="myFunction('3', '2', '1')">
                          <label
                            id="1"
                            for="Standard - Black"
                            @click="product_select = 1"
                            >Newest</label
                          >
                        </div>
                      </div>

                      <div
                        @click="myFunction('2', '1', '3')"
                        class="box-option"
                      >
                        <input
                          type="radio"
                          class="model-radio"
                          id="Standard - Mercury"
                          name="category"
                        />

                        <div>
                          <label
                            id="2"
                            for="Standard - Black"
                            @click="product_select = 2"
                            >Price (Low to High)</label
                          >
                        </div>
                      </div>

                      <div
                        @click="myFunction('3', '1', '2')"
                        class="box-option"
                      >
                        <input
                          type="radio"
                          class="model-radio"
                          id="Chroma"
                          name="category"
                        />

                        <div>
                          <label
                            id="3"
                            for="Standard - Black"
                            @click="product_select = 3"
                            >Price (High to Low)</label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="selected">Newest</div>
                  </div>
                </div>
                <div class="model-box-1-faro" id="box1">
                  <b>Sort by</b>
                </div>
              </div>
            </div>
            <!-- end --->
          </div>
        </div>

        <div v-if="select === 1" class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.LAPTOPS.Product"
            :key="index"
            :item="json_obj.PC_Acessories.LAPTOPS.Product[index]"
            :number="select"
          />
        </div>
        <div v-else-if="select === 2" class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.EGPUS.Product"
            :key="index"
            :item="json_obj.PC_Acessories.EGPUS.Product[index]"
            :number="select"
          />
        </div>
        <div v-else-if="select === 3" class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.ACCESSORIES.Product"
            :key="index"
            :item="json_obj.PC_Acessories.ACCESSORIES.Product[index]"
            :refs="index"
          />
        </div>
        <div v-else class="row mt-3 row-product-faro">
          <card
            v-for="(i, index) in json_obj.PC_Acessories.MONITORS.Product"
            :key="index"
            :item="json_obj.PC_Acessories.MONITORS.Product[index]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datas from "../assets/data.json";
import card from "./PCaccessCard.vue";
export default {
  data() {
    return {
      icon_select: 1,
      select: 3,
      json_obj: datas,
      isActive0: [null, null, null, null, null, null, null, null, null, null],
      isActive1: [null],
      isActive2: [null],
      isActive3: [null],
      product_select: 0,
    };
  },
  components: {
    card,
  },
  mounted() {
    this.test();
  },
  methods: {
    change() {
      number = 10;
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
          if (o.querySelector("label").innerHTML == "A") {
            valX = 0;
          } else if (o.querySelector("label").innerHTML == "B") {
            //location.href = this.modelLink2;
          } else if (o.querySelector("label").innerHTML == "C") {
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

<style></style>
