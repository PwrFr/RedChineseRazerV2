<template>
  <div
    class="usp"
    data-pnx="-1"
    id="available"
    v-bind:style="{
        backgroundImage:
          'url(' + require('@/assets/products/2eGPUs/corex-comparison-bg.jpg') + ')',
      }"
    style=" background-color: rgb(29, 29, 29); min-height: 900px;"
  >
    <div style="max-height: 900px; text-align:center;">
      <div style="padding: 32px">
        <h2 style="font-weight: 200; color:#44d62c;">AVAILABLE MODELS</h2>
        <p
          style="color: white; font-size: 1.125em; font-weight: 300;"
        >Razer Core X | Razer Core X Chroma™</p>
        <ul data-pnx-f="icons" style="max-width: 700px; margin: 0px auto;">
          <li>
            <div style="margin: 30px">
              <img
                alt
                src="@/assets/products/2eGPUs/3.png"
                class="ng-star-inserted"
                style="max-width: 100%;"
              />
            </div>
          </li>
        </ul>
        <div>
          <br />
          <div style="cases-row7-full">
            <table class="cases-row7-table-body" style="width: 689.6px;">
              <thead style="color: white;" class="razerf5">
                <tr>
                  <th class="boos-th" style="width: 40%;"></th>
                  <th
                    class="boos-th"
                    style="width: 27%; padding-left: 3%;"
                  >Razer Core X</th>
                  <th
                    class="boos-th"
                    style="width: 33%; padding-left: 5%;"
                  >Razer Core X Chroma™</th>
                </tr>
              </thead>
              <tbody class="razerf5" style="color: #888888;">
                <tr>
                  <td
                    class="boos-td cases-row7-table-left align-middle"
                    style="width: 40%;"
                  >Power Supply</td>
                  <td class="boos-td cases-row7-table-middle" style="width: 27%;">Internal ATX 650W</td>
                  <td class="boos-td cases-row7-table-right" style="width: 33%;">Internal ATX 700W</td>
                </tr>
                <tr>
                  <td
                    class="boos-td cases-row7-table-left align-middle"
                    style="width: 40%;"
                  >Laptop Power Delivery (USB-C)</td>
                  <td class="boos-td cases-row7-table-middle" style="width: 27%;">100W</td>
                  <td class="boos-td cases-row7-table-right" style="width: 33%;">100W</td>
                </tr>
                <tr>
                  <td
                    class="boos-td cases-row7-table-left align-middle"
                    style="width: 40%;"
                  >Max size GPU</td>
                  <td class="boos-td cases-row7-table-middle" style="width: 27%;">Up to 3-slot card</td>
                  <td class="boos-td cases-row7-table-right" style="width: 33%;">Up to 3-slot card</td>
                </tr>
                <tr>
                  <td class="boos-td cases-row7-table-left align-middle" style="width: 40%;">4X USB</td>
                  <td class="boos-td cases-row7-table-middle" style="width: 27%;">-</td>
                  <td class="boos-td cases-row7-table-right" style="width: 33%;">yes</td>
                </tr>
                <tr>
                  <td
                    class="boos-td cases-row7-table-left align-middle"
                    style="width: 40%;"
                  >Gigabit Ethernet</td>
                  <td class="boos-td cases-row7-table-middle" style="width: 27%;">-</td>
                  <td class="boos-td cases-row7-table-right" style="width: 33%;">yes</td>
                </tr>
                <tr>
                  <td
                    class="boos-td cases-row7-table-left align-middle"
                    style="width: 40%;"
                  >Razer Chroma™</td>
                  <td class="boos-td cases-row7-table-middle" style="width: 27%;">-</td>
                  <td class="boos-td cases-row7-table-right" style="width: 33%;">yes</td>
                </tr>
                <tr>
                  <td
                    class="boos-td cases-row7-table-left align-middle"
                    style="width: 40%; padding-top: 2% !important;"
                  >Color</td>
                  <td class="boos-td cases-row7-table-middle" style="width: 27%;">
                    Black
                    <br />Mercury
                  </td>
                  <td
                    class="boos-td cases-row7-table-right"
                    style="width: 33%; padding-top: 2% !important;"
                  >Black</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.usp {
  align-content: flex-start;
  background-color: #fff;
  background-position: center bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1920px;
  position: relative;
}

.boos-th {
  text-align: left;
  font-weight: 300;
  font-size: 1.125em;
  table-layout: auto;
  padding-bottom: 10px;
}

.boos-td {
  text-align: left;
  font-size: 1.135rem;
  display: table-cell;
  vertical-align: inherit;
  table-layout: auto;
  padding: 10px 20px !important;
}

.cases-row7-table-body {
  font-size: 16px;
  font-family: "Robo-reg", sans-serif;
  color: #888888;
  max-width: 780px;
  margin: 0 auto;
}
.cases-row7-table-left {
  width: 234px;
  text-align: left;
  border: 1px solid rgb(68, 68, 68);
  border-left: 0;
}
.cases-row7-table-middle {
  width: 273px;
  text-align: center;
  border: 1px solid rgb(68, 68, 68);
}
.cases-row7-table-right {
  width: 273px;
  text-align: center;
  border: 1px solid rgb(68, 68, 68);
  border-right: 0;
}

table.cases-row7-table-body tbody tr td {
  padding: 5px 10px;
}
</style>