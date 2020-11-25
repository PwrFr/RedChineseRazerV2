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
              <li>Protective Exterior and padded interior</li>
              <li>
                Custom fit for Razer Blade Stealth 13 and most notebooks up to
                13.3"
              </li>
              <li>Ultra-slim profile</li>
              <li>Portable design</li>
              <li>Waterproof zipper tape</li>
              <li>Detachable woven strap</li>
              <li>
                Dimension (L x W): <br />
                12.04" x 9.05"<br />
                315 mm x 230 mm
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
