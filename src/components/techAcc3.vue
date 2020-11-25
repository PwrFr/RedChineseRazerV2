<template>
  <!-- techSpecCase Chroma -->
  <div class="container-fluid techSpecsBox p-0 m-0">
    <div class="container techSpecs">
      <!-- <h4 id="headerText">TECH SPECS </h4> -->
      <table class="container-fluid">
        <tr>
          <h4 id="headerText">TECH SPECS</h4>
        </tr>
        <tr class="dataRow trDisplay dataSingle">
          <th class="col-lg-3 p-0">
            <b>At a Glance</b>
          </th>
          <td class="col-lg-9 data">
            <ul>
              <li>Compatible with most laptops up to 17.3”</li>
              <li>Durable Exterior Material</li>
              <li>Snag-Free Velcro/li></li>
              <li>Smooth interior mousing surface</li>
              <li>Slim profile design</li>
              <li>
                Dimension (L x W): <br />
                17.7" x 12.2"<br />
                450 mm x 310 mm
              </li>
            </ul>
          </td>
        </tr>
      </table>
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
export default {
  name: "techAcc",
};
</script>
