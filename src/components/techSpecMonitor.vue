<template>
  <div class="container-fluid techSpecsBox p-0 m-0 mb-5">
    <div class="container techSpecs">
      <!-- <h4 id="headerText">TECH SPECS</h4> -->
      <table class="container-fluid">
        <tr>
          <h4 id="headerText">TECH SPECS</h4>
        </tr>
        <tr class="dataRow trDisplay p-0">
          <th class="col-lg-3 p-0">
            <b>DISPLAY</b>
          </th>
          <td class="col-lg-9">
            <ul class="data">
              <li>{{ data1 }}</li>
              <li>{{ data2 }}</li>
            </ul>
          </td>
        </tr>
        <!-- row 2-->
        <tr class="dataRow trDisplay dataSingle">
          <th class="col-lg-3 p-0">
            <b>REFRESH RATE</b>
          </th>
          <td class="col-lg-9 p-0 data py-1">
            {{ data3 }}
          </td>
        </tr>
        <!-- row 2 -->
        <tr class="dataRow trDisplay dataBul">
          <th class="col-lg-3 p-0">
            <b>GRAPHICS</b>
          </th>
          <td class="col-lg-9">
            <ul class="data">
              <li>
                {{ data4 }}
              </li>
              <li>
                {{ data5 }}
              </li>
            </ul>
          </td>
        </tr>
        <!-- row 3-->
        <span id="more" ref="more">
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>CONTRAST RATIO</b>
            </th>
            <td class="col-lg-9 p-0 data">
              {{ data6 }}
            </td>
          </tr>
          <!-- row 4 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>BEZELS</b>
            </th>
            <td class="col-lg-9 p-0 data">
              {{ data7 }}
            </td>
          </tr>
          <!-- row 5 -->
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>SYNC</b>
            </th>
            <td class="col-lg-9">
              <ul class="data">
                <li>{{ data8 }}</li>
                <li>{{ data9 }}</li>
              </ul>
            </td>
          </tr>
          <!-- row 6 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>ROTATION</b>
            </th>
            <td class="col-lg-9 p-0 data">
              {{ data10 }}
            </td>
          </tr>
          <!-- row 7 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>CABLE MANAGEMENT</b>
            </th>
            <td class="col-lg-9 p-0 data">
              {{ data11 }}
            </td>
          </tr>
          <!-- row 8 -->
          <tr class="dataRow trDisplays dataSingle">
            <th class="col-lg-3 p-0">
              <b>Lighting</b>
            </th>
            <td class="col-lg-9 p-0 data">
              {{ data12 }}
            </td>
          </tr>

          <!-- row 9 -->
          <tr class="dataRow trDisplays dataBul">
            <th class="col-lg-3 p-0">
              <b>Input & Output</b>
            </th>
            <td class="col-lg-9">
              <ul class="data">
                <li>{{ data13 }}</li>
                <li>{{ data14 }}</li>
                <li>{{ data15 }}</li>
                <li>{{ data16 }}</li>
              </ul>
            </td>
          </tr>
        </span>
      </table>
    </div>
    <div id="seeLess" ref="seeless" class="m-0">
      <p @click="test()" class="seeBox pt-2" ref="text">
        {{ text
        }}<svg
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
@font-face {
  font-family: myFirstFont;
  src: url("../assets/font/razerf5-thin.otf");
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
import datas from "../assets/data.json";
export default {
  name: "techSpecMonitor",
  // props: {
  //   msg: String
  // }
  // components:{
  //   inputTechSpec
  // }
  data() {
    return {
      text: "",
      status: 0,
      ty: {},
      data1: datas.monitors[0].specs.Display[0],
      data2: datas.monitors[0].specs.Display[1],
      data3: datas.monitors[0].specs.Refresh_rate[0],
      data4: datas.monitors[0].specs.Graphics[0],
      data5: datas.monitors[0].specs.Graphics[1],
      data6: datas.monitors[0].specs.Contrast_Ratio[0],
      data7: datas.monitors[0].specs.Bezels[0],
      data8: datas.monitors[0].specs.Sync[0],
      data9: datas.monitors[0].specs.Sync[1],
      data10: datas.monitors[0].specs.Rotation[0],
      data11: datas.monitors[0].specs.Cable_Management[0],
      data12: datas.monitors[0].specs.Lighting[0],
      data13: datas.monitors[0].specs.InputOutput[0],
      data14: datas.monitors[0].specs.InputOutput[1],
      data15: datas.monitors[0].specs.InputOutput[2],
      data16: datas.monitors[0].specs.InputOutput[3],
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
