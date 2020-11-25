<template>
  <!-- techSpecCase CaseMini -->
  <div class="container-fluid techSpecsBox p-0">
    <div class="container techSpecs">
      <!-- <h4 id="headerText">TECH SPECS </h4> -->
      <table class="container-fluid">
        <tr>
          <h4 id="headerText">PUSSY</h4>
        </tr>
        <tr class="dataRow trDisplay dataSingle">
          <th class="col-lg-3 p-0">
            <b>MODEL</b>
          </th>
          <td class="col-lg-9 data">KUY</td>
        </tr>
        <!-- row 2-->
        <tr class="dataRow trDisplay dataSingle">
          <th class="col-lg-3 p-0">
            <b>PRODUCT NUMBER</b>
          </th>
          <td class="col-lg-9 data">{{ data2 }}</td>
        </tr>
        <!-- row 2 -->
        <tr class="dataRow trDisplay dataSingle">
          <th class="col-lg-3 p-0">
            <b>CHASSIS FORM FACTOR</b>
          </th>
          <td class="col-lg-9 data">{{ data3 }}</td>
        </tr>
        <!-- row 3-->

        <tr class="dataRow trDisplays dataSingle">
          <th class="col-lg-3 p-0">
            <b>Supported Motherboards</b>
          </th>
          <td class="col-lg-9 data">{{ data4 }}</td>
        </tr>
        <!-- row 4 -->
        <span id="more" ref="more">
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Case Material</b>
            </th>
            <td class="col-lg-9 data">{{ data5 }}</td>
          </tr>
          <!-- row 5 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b># of Expansion Slots</b>
            </th>
            <td class="col-lg-9 data">{{ data6 }}</td>
          </tr>
          <!-- row 6 -->
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b># of Supported Drives</b>
            </th>
            <td class="col-lg-9">
              <ul class="data p-2">
                <li>{{ data7 }}</li>
                <li>{{ data8 }}</li>
              </ul>
            </td>
          </tr>
          <!-- row 7 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Radiator Compatibility</b>
            </th>
            <td class="col-lg-9 data">{{ data9 }}</td>
          </tr>
          <!-- row 8 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Maximum CPU Cooler Height</b>
            </th>
            <td class="col-lg-9 data">{{ data10 }}</td>
          </tr>

          <!-- row 9 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Maximum GPU Length</b>
            </th>
            <td class="col-lg-9 data">{{ data11 }}</td>
          </tr>
          <!-- row 10 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Maximum PSU Length</b>
            </th>
            <td class="col-lg-9 data">{{ data12 }}</td>
          </tr>
          <!-- row 11 -->
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>Input & Output</b>
            </th>
            <td class="col-lg-9">
              <ul class="data p-2">
                <li v-for="item in data13" :key="item">{{ item }}</li>
              </ul>
            </td>
          </tr>
          <!-- row 12  -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>RAZER Chroma™ Support</b>
            </th>
            <td class="col-lg-9 data">{{ data14 }}</td>
          </tr>
          <!-- row 13 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Warranty</b>
            </th>
            <td class="col-lg-9 data">{{ data15 }}</td>
          </tr>
          <!-- row 14 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Case Dimensions</b>
            </th>
            <td class="col-lg-9 data">{{ data16 }}</td>
          </tr>
          <!-- row 15 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Weight</b>
            </th>
            <td class="col-lg-9 data">{{ data17 }}</td>
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
import datas from "../../assets/data.json";
export default {
  name: "techSpecCaseMini",
  data() {
    return {
      text: "",
      status: 0,
      ty: {},
      data1: "TEST",
      data2: "KUY",
      data3: "ASDAsd",
      data4: datas.Cases[1].specs.SUPPORTED_MOTHERBOARDS,
      data5: datas.Cases[1].specs.CASE_MATERIAL,
      data6: datas.Cases[1].specs.Num_OF_EXPANSION_SLOTS,
      data7: datas.Cases[1].specs.Num_OF_SUPPORTED_DRIVES[0],
      data8: datas.Cases[1].specs.Num_OF_SUPPORTED_DRIVES[1],
      data9: datas.Cases[1].specs.RADIATOR_COMPATIBILITY,
      data10: datas.Cases[1].specs.MAXIMUM_CPU_COOLER_HEIGHT,
      data11: datas.Cases[1].specs.MAXIMUM_GPU_LENGTH,
      data12: datas.Cases[1].specs.MAXIMUM_PSU_LENGTH,
      data13: datas.Cases[1].specs.FRONT_PANEL_IO,
      data14: datas.Cases[1].specs.RAZER_CHROMA_SUPPORT,
      data15: datas.Cases[1].specs.WARRANTY,
      data16: datas.Cases[1].specs.CASE_DIMENSIONS,
      data17: datas.Cases[1].specs.WEIGHT,
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
  },
};
</script>
