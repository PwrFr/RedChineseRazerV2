<template>
<section>
  <div class="techSpecsBox justify-content-center data-golf">
    <!-- <h4 id="headerText">TECH SPECS</h4> -->
    <div class="row pt-4">
      <h4 id="headerText">TECH SPECS</h4>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">Model</div>
      <div class="col-lg-5 text-center-tech data-golf-data">{{ data1 }}</div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">PRODUCT NUMBER</div>
      <div class="col-lg-5 text-center-tech data-golf-data">
        {{ data2 }}
      </div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">CHASSIS FORM FACTOR</div>
      <div class="col-lg-5 text-center-tech data-golf-data">
        {{ data3 }}
      </div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">SUPPORTED MOTHERBOARDS</div>
      <div class="col-lg-5 text-center-tech data-golf-data">
        {{ data4 }}
      </div>
    </div>
    <!-- row 3-->
    <span id="more" ref="more">
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">CASE MATERIAL</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{ data5 }}
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead"># OF EXPANSION SLOTS</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{ data6 }}
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead"># OF SUPPORTED DRIVES</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          <li>{{data7}}</li>
          <li>{{data8}}</li>
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">RADIATOR COMPATIBILITY</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data9}}
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">MAXIMUM CPU COOLER HEIGHT</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data10}}
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">MAXIMUM GPU LENGTH</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data11}}
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">MAXIMUM PSU LENGTH</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data12}}
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">FRONT PANEL I/O</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          <li v-for="(i, index) in data13" :key="index">{{data13[index]}}</li>
        </div>
      </div>

      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">RAZER CHROMA™ SUPPORT</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data14}}
        </div>
      </div>

      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">WARRANTY</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data15}}
        </div>
      </div>
      
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">CASE DIMENSIONS</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data16}}
        </div>
      </div>

      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">WEIGHT</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data17}}
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
/* @font-face {
  font-family: myFirstFont;
  src: url("../assets/font/razerf5-thin.otf");
} */

.techSpecsBox {
  background-color:#252525;
  color: white;
}
.line-tech {
  border-bottom: solid 1px #999;
  color: white;
}
.text-center-tech {
  text-align: left;
}
.data-golf{
  padding-left: 10rem;
  padding-right:10rem ;
}
.data-golf-data{

  padding: 1rem;
  color: gray;
}
.upHead{
 text-transform: uppercase;
 font-weight: bold;
 color: #fff;
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
th {
  text-transform: uppercase;
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
  name: "techSpecCase",
  data() {
    return {
      text: "",
      status: 0,
      ty: {},
      data1: datas.Cases[0].specs.MODEL,
      data2: datas.Cases[0].specs.PRODUCT_NUMBER,
      data3: datas.Cases[0].specs.CHASSIS_FORM_FACTOR,
      data4: datas.Cases[0].specs.SUPPORTED_MOTHERBOARDS,
      data5: datas.Cases[0].specs.CASE_MATERIAL,
      data6: datas.Cases[0].specs.Num_OF_EXPANSION_SLOTS,
      data7: datas.Cases[0].specs.Num_OF_SUPPORTED_DRIVES[0],
      data9: datas.Cases[0].specs.RADIATOR_COMPATIBILITY,
      data10: datas.Cases[0].specs.MAXIMUM_CPU_COOLER_HEIGHT,
      data11: datas.Cases[0].specs.MAXIMUM_GPU_LENGTH,
      data12: datas.Cases[0].specs.MAXIMUM_PSU_LENGTH,
      data13: datas.Cases[0].specs.FRONT_PANEL_IO,
      data14: datas.Cases[0].specs.RAZER_CHROMA_SUPPORT,
      data15: datas.Cases[0].specs.WARRANTY,
      data16: datas.Cases[0].specs.CASE_DIMENSIONS,
      data17: datas.Cases[0].specs.WEIGHT
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
    }
  },
  created() {
    this.text = "See More";
  }
};
</script>
