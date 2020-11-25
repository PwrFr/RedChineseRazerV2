<template>
  <!-- TechSpec Egpu chroma-->
  <div class="container-fluid techSpecsBox p-0">
    <div class="container techSpecs">
      <!-- <h4 id="headerText">TECH SPECS</h4> -->
      <table class="container-fluid">
        <tr>
          <h4 id="headerText">TECH SPECS</h4>
        </tr>
        <!-- row 1 -->
        <tr class="dataRow trDisplays dataBul">
          <th class="col-lg-3 p-0">
            <b>Input & Output</b>
          </th>
          <ul class="col-lg-9 data px-4">
            <li v-for="row01 in data1" :key="row01">
              {{ row01 }}
            </li>
          </ul>
        </tr>
        <!-- row 2 -->
        <tr class="dataRow trDisplays dataSingle">
          <th class="col-lg-3 p-0">
            <b>Internal Power Supply</b>
          </th>
          <td class="col-lg-9 data">{{ data2 }}</td>
        </tr>
        <!-- row 3 -->
        <tr class="dataRow trDisplays dataSingle">
          <th class="col-lg-3 p-0">
            <b>Laptop Power Delivery</b>
          </th>
          <td class="col-lg-9 data">{{ data3 }}</td>
        </tr>
        <!-- row 4 -->
        <tr class="dataRow trDisplays dataSingle">
          <th class="col-lg-3 p-0">
            <b>Thunderbolt™ 3 cable length</b>
          </th>
          <td class="col-lg-9 data">{{ data4 }}</td>
        </tr>
        <!-- row 4 -->
        <span id="more" ref="more">
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>Razer Core Approx. Size</b>
            </th>
            <td class="col-lg-9">
              <ul class="data p-2">
                <li v-for="row4 in data5" :key="row4">{{ row4 }}</li>
              </ul>
            </td>
          </tr>
          <!-- row 5 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Weight</b>
            </th>
            <td class="col-lg-9 data">{{ data6 }}</td>
          </tr>

          <!-- row 6 -->
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>Laptop Requirements (Laptop not included)</b>
            </th>
            <td class="col-lg-9">
              <div class="pb-1">
                <u class="data"><b>Connection to system</b> </u>
              </div>

              <p class="data">{{ data7.Connection_to_system }}</p>
              <div class="pt-1">
                <p class="data">{{ data7.test }}</p>
              </div>
              <div class="data pt-3">
                <u class="pb-2"><b> macOS Systems Requirements </b> </u>
                <ul class="px-2">
                  <li
                    v-for="row6c in data7.macOS_Systems_Requirements"
                    :key="row6c"
                  >
                    {{ row6c }}
                  </li>
                </ul>
              </div>

              <div class="data pt-3">
                <u class="pb-2"><b> Windows System Requirements</b> </u>
                <ul class="px-2">
                  <li
                    v-for="row7c in data7.Windows_System_Requirements"
                    :key="row7c"
                  >
                    {{ row7c }}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <!-- row 12  -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Graphics Cards Requirements (Graphics card not included)</b>
            </th>
            <td class="col-lg-9 data">
              <div class="data">
                <u><b>Max inner dimensions</b></u>
              </div>
              <div class="data">
                <p>
                  Length : 12.99” 330 mm <br />Height*: 6.29” / 160 mm<br />
                  Width : 2.24” / 57 mm
                </p>
                <p>
                  * Height measured from top of PCIe connector to the bottom of
                  the locking pin ramps.
                </p>
              </div>
              <div class="pt-4">
                <img :src="data8.img" alt="" width="500" height="500" />
              </div>
              <div class="data">
                <b>GPU Type </b>
                <p>{{ data8.GPU_Type[0] }}</p>

                <div class="pt-4">
                  <p>{{ data8.GPU_Type[1] }}</p>
                </div>
                <div class="pt-4">
                  <u><b> GPU Max Power Support </b></u>
                  <p>{{ data8.GPU_Max_Power_Support }}</p>
                </div>
              </div>
            </td>
          </tr>
          <!-- row 8 -->
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>macOS Compatible Graphics Chipsets</b>
            </th>
            <td class="col-lg-9">
              <ul class="data p-2">
                <p v-for="row8c in data9" :key="row8c">{{ row8c }}</p>
              </ul>
              <p class="data pb-3">*Not an exhaustive list</p>
            </td>
          </tr>
          <!-- row 9-->
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>Windows 10 Compatible Graphics Chipsets</b>
            </th>
            <td class="col-lg-9">
              <ul class="data p-2">
                <u><b>Qualified NVIDIA ® GeForce ® graphics chipsets</b></u>
                <p
                  v-for="row9c in data10.Qualified_NVIDIA_GeForce_graphics_chipsets"
                  :key="row9c"
                >
                  {{ row9c }}
                </p>
              </ul>
              <div class="data pt-4">
                <b><u>Qualified NVIDIA ® Quadro ® graphics chipsets</u></b>
                <p
                  v-for="row9c1 in data10.Qualified_NVIDIA_Quadro_graphics_chipsets"
                  :key="row9c1"
                >
                  {{ row9c1 }}
                </p>
              </div>
              <div class="data pt-4">
                <b><u>Qualified AMD Radeon™ graphics chipsets</u></b>
                <p
                  class="data"
                  v-for="row9c2 in data10.Qualified_AMD_Radeon_graphics_chipsets"
                  :key="row9c2"
                >
                  {{ row9c2 }}
                </p>
              </div>
              <div class="data pt-4">
                <u><b>Graphics Output</b></u>
                <p>Based on capabilities of installed graphics</p>
                <p class="data pb-3 pt-4">*Not an exhaustive list</p>
              </div>
            </td>
          </tr>
        </span>
      </table>
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
  </div>
</template>
<style>
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
import datas from "../assets/data.json";
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
        more.style.display = "inline";
        //bt seeMore hide

        this.text = "See less";
        var arrow = this.$refs.arrowGreen;
        arrow.style.transform = "rotate(0deg)";

        var btLess = this.$refs.seeless;
        btLess.style.display = "inline";

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
