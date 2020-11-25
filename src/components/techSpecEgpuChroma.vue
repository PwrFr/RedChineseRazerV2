<template>
  <section>
    <div class="techSpecsBox justify-content-center data-golf">
      <!-- <h4 id="headerText">TECH SPECS</h4> -->
      <div class="row pt-4">
        <h4 id="headerText">TECH SPECS</h4>
      </div>
      <div class="row line-tech">
        <div class="col-lg-4 text-center-tech data-golf-data upHead">
          Input & Output
        </div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          <li v-for="row01 in data1" :key="row01">{{ row01 }}</li>
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-4 text-center-tech data-golf-data upHead">
          Internal Power Supply
        </div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{ data2 }}
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-4 text-center-tech data-golf-data upHead">
          Laptop Power Delivery
        </div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{ data3 }}
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-4 text-center-tech data-golf-data upHead">
          Thunderbolt™ 3 cable length
        </div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{ data4 }}
        </div>
      </div>
      <!-- row 3-->
      <span id="more" ref="more">
        <div class="row line-tech">
          <div class="col-lg-4 text-center-tech data-golf-data upHead">
            Razer Core Approx. Size
          </div>
          <div class="col-lg-5 text-center-tech data-golf-data">
            <li v-for="row4 in data5" :key="row4">{{ row4 }}</li>
          </div>
        </div>
        <div class="row line-tech">
          <div class="col-lg-4 text-center-tech data-golf-data upHead">
            Weight
          </div>
          <div class="col-lg-5 text-center-tech data-golf-data">
            {{ data6 }}
          </div>
        </div>
        <div class="row line-tech">
          <div class="col-lg-4 text-center-tech data-golf-data upHead">
            Laptop Requirements (Laptop not included)
          </div>
          <div class="col-lg-5 text-center-tech data-golf-data">
            <b>Connection to system</b>
            <p>
              Systems require a Thunderbolt™ 3 port with external graphics
              support. Please check with your laptop manufacture to confirm if
              your laptop supports Thunderbolt 3 external graphics.
            </p>
            <p>
              Please also ensure your laptop has the latest BIOS, firmware,
              Thunderbolt software, and other applicable updates before
              connecting toRazer Core X Chroma.
            </p>
            <u> macOS Systems Requirements </u>
            <li>
              Thunderbolt™ 3 equipped Macs running macOS High Sierra 10.13.4 or
              later.
            </li>
            <li>Compatible AMD graphics card sold separately.</li>
            <li>Razer Synapse 3 software not available on macOS.</li>

            <u>Windows System Requirements</u>
            <li>Windows 10 64bit RS5 or above with Thunderbolt™ 3 port.</li>
            <li>Compatible NVIDIA or AMD graphics card sold separately.</li>
          </div>
        </div>
        <div class="row line-tech">
          <div class="col-lg-4 text-center-tech data-golf-data upHead">
            Graphics Cards Requirements (Graphics card not included)
          </div>
          <div class="col-lg-5 text-center-tech data-golf-data">
            <u>Max inner dimensions</u>
            <p>
              Max inner dimensions Length : 12.99”/ 330 mm <br />
              Height*: 6.29” / 160 mm <br />
              Width : 2.24” / 57 mm
            </p>
            <p>
              * Height measured from top of PCIe connector to the bottom of the
              locking pin ramps.
            </p>
            <img
              :src="require('@/assets/products/2eGPUs/core-x-dimension.png')"
              alt=""
            />
            <p>
              <u>GPU Type</u> <br>
             Up to 3-Slot wide, full-length, PCI-Express x16 graphics
              card. Graphics cards <br> <br> use varied designs based around a common
              graphics chip. Please ensure the GPU selected meets all size,
              power, and additional requirements.  <br> <br> <u>GPU Max Power Support</u> <br> 500
              Watts
            </p>
          </div>
        </div>
        <div class="row line-tech">
          <div class="col-lg-3 text-center-tech data-golf-data upHead">
                      macOS Compatible Graphics Chipsets

          </div>
          <div class="col-lg-5 text-center-tech data-golf-data">
            <u>Compatible AMD graphics chipsets: </u>
              <p v-for="row8c in data9" :key="row8c">{{ row8c }}</p>
          </div>
        </div>
        <div class="row line-tech">
          <div class="col-lg-3 text-center-tech data-golf-data upHead">
            Windows 10 Compatible Graphics Chipsets
          </div>
          <div class="col-lg-5 text-center-tech data-golf-data">
            <b>Qualified NVIDIA ® GeForce ® graphics chipsets</b>
                <p
                  v-for="row9c in data10.Qualified_NVIDIA_GeForce_graphics_chipsets"
                  :key="row9c"
                >{{ row9c }}</p>
            
              <div class="data pt-4">
                <b>
                  <u>Qualified NVIDIA ® Quadro ® graphics chipsets</u>
                </b>
                <p
                  v-for="row9c1 in data10.Qualified_NVIDIA_Quadro_graphics_chipsets"
                  :key="row9c1"
                >{{ row9c1 }}</p>
              </div>
              <div class="data pt-4">
                <b>
                  <u>Qualified AMD Radeon™ graphics chipsets</u>
                </b>
                <p
                  class="data"
                  v-for="row9c2 in data10.Qualified_AMD_Radeon_graphics_chipsets"
                  :key="row9c2"
                >{{ row9c2 }}</p>

          </div>
        </div>
        </div>
        <div class="row line-tech">
          <div class="col-lg-3 text-center-tech data-golf-data upHead">
            Input & Output
          </div>
          <div class="col-lg-5 text-center-tech data-golf-data">
            <li>{{ data13 }}</li>
            <li>{{ data14 }}</li>
            <li>{{ data15 }}</li>
            <li>{{ data16 }}</li>
          </div>
        </div>
      </span>
    </div>

    <div id="seeLess" ref="seeless" class="m-0">
      <p @click="test()" class="seeBox pt-2" ref="text">
        {{ text }}
        <svg
          ref="arrowGreen"
          id="arrow"
          width="2em"
          height="1em"
          border="20px"
          viewBox="0 0 16 16"
          class="bi bi-chevron-up arrow"
          fill="#45D52C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </p>
    </div>
  </section>
</template>
<style>
.data-golf-data2 {
  padding-left: 0.5rem;
  color: gray;
}

.techSpecsBox {
  margin: 10px;
  background-color: #252525;
  color: white;
}
.techSpecs {
  padding: 10px;
  color: white;
}
.row-line {
  border-bottom: solid 1px #999;
}
#headerText {
  text-align: left;
  margin-top: 30px;
  margin-bottom: 45px;
  font-size: 1.3125rem;
}
.dataRow {
  /* padding: 1.5rem; */
  border-bottom: solid 1px #999;
  padding: 0rem;
  padding-left: -1rem;
  font-size: 0.875rem;
  text-align: left;
  font-size: 0.875rem;
}
.data {
  text-align: left;
  color: #999;
}
ul {
  padding: 0px;
}
.trDisplay {
  border-bottom: solid 1px #999;
}
.dataBul {
  padding-top: 1rem;
  padding-bottom: 0;
}
.dataSingle {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
#more {
  /* display: inline; */
  display: none;
}
#seeLess {
  display: inline;
}
#arrow {
  transform: rotate(180deg);
}
.seeBox {
  background-color: #333;
  height: 2.5rem;
  text-align: center;
  width: 100%;
  color: #999;
}
</style>
<script>
import datas from "@/models/data.js";
export default {
  name: "techSpecEgpu",
  data() {
    return {
      text: "",
      status: 0,
      ty: {},
      data1: datas.eGPU[2].specs.InputOutput,
      data2: datas.eGPU[2].specs.Internal_Power_Supply,
      data3: datas.eGPU[2].specs.Laptop_Power_Delivery,
      data4: datas.eGPU[2].specs.Thunderbolt_3_cable_length,
      data5: datas.eGPU[2].specs.Razer_Core_Approx_Size,
      data6: datas.eGPU[2].specs.Weight,
      data7: datas.eGPU[2].specs.Laptop_Requirements_Laptop_not_included,
      data8:
        datas.eGPU[2].specs
          .GRAPHICS_CARDS_REQUIREMENTS_GRAPHICS_CARD_NOT_INCLUDED,
      data8img:
        datas.eGPU[2].specs
          .GRAPHICS_CARDS_REQUIREMENTS_GRAPHICS_CARD_NOT_INCLUDED.img,
      data9: datas.eGPU[2].specs.MACOS_COMPATIBLE_GRAPHICS_CHIPSETS[0],
      data10: datas.eGPU[2].specs.WINDOWS_10_COMPATIBLE_GRAPHICS_CHIPSETS,
    };
  },
  // created(){
  //   ty = {}
  //   this.ty = datas["monitors"][0]
  //   // console.log(ty.specs.Bezels[0])
  // }
  methods: {
    test() {
      if (this.status == 0) {
        //when user press see More v
        var more = this.$refs.more;
        more.style.display = "contents";
        //bt seeMore hide

        this.text = "See less";
        var arrow = this.$refs.arrowGreen;
        arrow.style.transform = "rotate(0deg)";

        var btLess = this.$refs.seeless;
        btLess.style.display = "contents";

        this.status = 1;
      } else if (this.status == 1) {
        //when user press seeless v
        var more = this.$refs.more;
        more.style.display = "none";

        this.text = "See more";

        var arrow = this.$refs.arrowGreen;
        arrow.style.transform = "rotate(180deg)";

        this.status = 0;
      }
      console.log(this.status);
    },
  },
  created() {
    this.text = "See More";
    console.log(this.data8.img);
  },
};
</script>
