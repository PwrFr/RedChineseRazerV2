<template>
<section>
  <div class="techSpecsBox justify-content-center data-golf">
    <!-- <h4 id="headerText">TECH SPECS</h4> -->
    <div class="row pt-4">
      <h4 id="headerText">TECH SPECS</h4>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">Display</div>
      <div class="col-lg-5 text-center-tech data-golf-data">
        <li>{{ data1 }}</li>
        <li>{{ data2 }}</li>
      </div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">Refresh rate</div>
      <div class="col-lg-5 text-center-tech data-golf-data">
        {{ data3 }}
      </div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">Graphics</div>
      <div class="col-lg-5 text-center-tech data-golf-data">
        <li>{{ data4 }}</li>
        <li>{{ data5 }}</li>
      </div>
    </div>
    <div class="row line-tech">
      <div class="col-lg-3 text-center-tech data-golf-data upHead">Contrast Ratio</div>
      <div class="col-lg-5 text-center-tech data-golf-data">
        {{ data6 }}
      </div>
    </div>
    <!-- row 3-->
    <span id="more" ref="more">
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">Contrast Ratio</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{ data6 }}
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">Bezels</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{ data7 }}
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">Sync</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          <li>{{data8}}</li>
          <li>{{data9}}</li>
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">Rotation</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data10}}
        </div>
      </div>
      <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">Cable Management</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data11}}
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">Lighting</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          {{data12}}
        </div>
      </div>
       <div class="row line-tech">
        <div class="col-lg-3 text-center-tech data-golf-data upHead">Input & Output</div>
        <div class="col-lg-5 text-center-tech data-golf-data">
          <li>{{data13}}</li>
          <li>{{data14}}</li>
          <li>{{data15}}</li>
          <li>{{data16}}</li>
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
@font-face {
  font-family: myFirstFont;
  src: url("../assets/font/razerf5-thin.otf");
}

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




.techSpecs {
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
.trDisplay {
  border-bottom: solid 1px #999;
}
.tr-test-monitor {
  padding: 3rem;
}
.dataBul {
  padding-top: 1rem;
  padding-bottom: 0;
}
.dataSingle {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0rem;
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
  },
};
</script>
