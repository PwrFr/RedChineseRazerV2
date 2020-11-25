<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light menu-bg pt-1 pb-2 pl-2 font-weight-normal fixed-top"
    >
      <div
        class="collapse navbar-collapse container p-0"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link
            to="/"
            class="navbar-brand m-0 p-0 d-flex align-items-center pt-2 pl-1 pr-3"
          >
            <img width="90" src="@/assets/Menu/RazerLogo.svg" />
          </router-link>
          <div class="dropdown fc">
            <a class="dropbtn nav-item nav-link active mr-1" href="#"
              ><p class="fc ml-1 pt-2 pl-3 pr-4">WHAT'S NEW</p>
            </a>
            <div class="dropdown-content mt-2">
              <div class="arrow-menu0"></div>
              <div
                class="row bg-dropdown w-75 position-fixed m-0 p-2 pt-3 pb-4 text-left"
              >
                <div class="col-3">
                  <p class="font-weight-bold m-0 pb-1">NEW LAUNCHES</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Arctech Pro for iPhone 12</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer BlackWidow V3</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer DeathAdder V2 Pro</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer BlackWidow V3 Pro</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer BlackShark V2 Pro</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Quartz 2020 Collection</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Mercury 2020 Collection</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">FEATURED</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Exclusives</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Work From Home</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Back to School</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Campaigns</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer TipStream</a
                  >
                </div>
                <div class="col-7">
                  <p class="font-weight-bold m-0">RAZERCON</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Home</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Iskur</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Kraken BT Kitty Edition</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Seiren Mini</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Blade Stealth 13</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Tomahawk</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Viper Ultimate Cyberpunk 2077</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Sneki Snek Plushie</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Sneki Snek X Conservation International</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Go Green with Razer</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="dropdown fc">
            <a class="dropbtn nav-item nav-link active mr-1" href="#"
              ><p class="fc pt-2 pr-4">PRODUCTS</p>
            </a>
            <div class="dropdown-content mt-2">
              <div class="arrow-menu1"></div>
              <div
                class="row bg-dropdown w-75 position-fixed m-0 p-2 pt-3 pb-4 text-left"
              >
                <div class="col-2">
                  <p class="font-weight-bold m-0 pb-1">PC</p>
                  <router-link
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    to="/gaminglabtop"
                    >Gaming Laptops</router-link
                  >
                  <router-link
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    to="/egpu"
                    >eGPUs</router-link
                  >
                  <router-link
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    to="/cases"
                    >Cases</router-link
                  >
                  <router-link
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    to="/monitor"
                    >Monitors</router-link
                  >
                  <router-link
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    to="/pcaccess"
                    >PC Accessories</router-link
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">PERIPHERALS</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Mice</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Mats</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Keyboards</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Audio</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Productivity</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Console</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Streaming</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Peripheral Accessories</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">MOBILE</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Controllers</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Audio</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Cases</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Mobile Accessories</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">LIFESTYLE</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Gaming Chairs</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >RESPAWN</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Gear & Apparel</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Surgical Masks</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Sneki Snek</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">CUSTOMS & COLLABS</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Customs</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Cyberpunk 2077</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Gears of War</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Overwatch: Lucio</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Star Wars: Stormtrooper</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">PAY & REWARDS</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Gold & Silver</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Gold PINs</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Gift Card</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer TipStream</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="dropdown fc">
            <a class="dropbtn nav-item nav-link active mr-1" href="#"
              ><p class="fc pt-2 pr-4">APPS & DOWNLOADS</p>
            </a>
            <div class="dropdown-content mt-2">
              <div class="arrow-menu2"></div>
              <div
                class="row bg-dropdown w-75 position-fixed m-0 p-2 pt-3 pb-4 text-left"
              >
                <div class="col-2">
                  <p class="font-weight-bold m-0 pb-1">DRIVERS</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Synapse 3</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Synapse 2 - Legacy</a
                  >
                </div>
                <div class="col-3">
                  <p class="font-weight-bold m-0">DESKTOP</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >THX Spatial Audio</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >7.1 Surround Sound</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Cortex - Game Booster</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Streamer Companion App</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Game Deals</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Chroma RGB</a
                  >
                </div>
                <div class="col-3">
                  <p class="font-weight-bold m-0">MOBILE</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Cortex Games for Android</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Android Apps</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer iOS Apps</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">MEDIA</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Wallpapers</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Chroma Workshop</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="dropdown fc">
            <a class="dropbtn nav-item nav-link active mr-1" href="#"
              ><p class="fc pt-2 pr-4">EXPLORE</p>
            </a>
            <div class="dropdown-content mt-2">
              <div class="arrow-menu3"></div>
              <div
                class="row bg-dropdown w-75 position-fixed m-0 p-2 pt-3 pb-4 text-left"
              >
                <div class="col-2">
                  <p class="font-weight-bold m-0 pb-1">ABOUT</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Our Story</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >RazerStores</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">OUR COMMUNITY</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Get Started</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Insider Forums</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Developer Portal</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">ESPORTS</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Team Razer</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >This Is Esports</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">TECHNOLOGY</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Science Behind the Seat</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >HyperClear Mic</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >TriForce Drivers</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >5G Sensor</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Focus+ Sensor</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Hypersense</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >HyperSpeed</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Mechanical Switches</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Optical Switches</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Chroma RGB</a
                  >
                </div>
                <div class="col-3">
                  <p class="font-weight-bold m-0">CONCEPTS</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Ultimate Racing Simulator</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Tomahawk Elite</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Project Linda</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Project Valerie</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Project Ariana</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="dropdown fc">
            <a class="dropbtn nav-item nav-link active mr-1" href="#"
              ><p class="fc pt-2 pr-3">SUPPORT</p>
            </a>
            <div class="dropdown-content mt-2">
              <div class="arrow-menu4"></div>
              <div
                class="row bg-dropdown w-75 position-fixed m-0 p-2 pt-3 pb-4 text-left"
              >
                <div class="col-2">
                  <p class="font-weight-bold m-0 pb-1">GET HELP</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Product Support</a
                  >
                </div>
                <div class="col-3">
                  <p class="font-weight-bold m-0">REGISTRATION & WARRANTY</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Warranty FAQ</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Product Registration</a
                  >
                </div>
                <div class="col-2">
                  <p class="font-weight-bold m-0">ONLINE STORE</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Shipping Guide</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Returns & Refunds</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >Razer Advantage</a
                  >
                </div>
                <div class="col-3">
                  <p class="font-weight-bold m-0">RAZERCARE</p>
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >RazerCare Protection Plan</a
                  >
                  <a
                    class="pt-1 pb-1 d-block text-decoration-none col-item"
                    href="#"
                    >RazerCare Store</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mt-2">
          <a href="" class="mr-3"
            ><svg
              class="menu-icon"
              height="17.5"
              viewBox="0 0 550 550"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m471.386719 325.011719c-16.96875-14.910157-37.546875-27.792969-61.167969-38.289063-10.097656-4.484375-21.914062.0625-26.398438 10.15625-4.484374 10.09375.0625 21.910156 10.15625 26.398438 19.917969 8.851562 37.082032 19.542968 51.007813 31.78125 17.167969 15.085937 27.015625 36.929687 27.015625 59.941406v37c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-37c0-23.011719 9.847656-44.855469 27.015625-59.941406 20.207031-17.757813 79.082031-59.058594 188.984375-59.058594 81.605469 0 148-66.394531 148-148s-66.394531-148-148-148-148 66.394531-148 148c0 47.707031 22.695312 90.207031 57.851562 117.289062-64.328124 14.140626-104.34375 41.359376-125.238281 59.722657-25.808593 22.675781-40.613281 55.472656-40.613281 89.988281v37c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60v-37c0-34.515625-14.804688-67.3125-40.613281-89.988281zm-323.386719-177.011719c0-59.550781 48.449219-108 108-108s108 48.449219 108 108-48.449219 108-108 108-108-48.449219-108-108zm0 0"
              /></svg
          ></a>
          <a href=""
            ><svg
              class="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"
              /></svg
          ></a>
        </div>
      </div>
    </nav>
  </div>
</template>
<style>
@font-face {
  font-family: Razerf5;
  src: url("../assets/font/razerf5-thin.otf");
}
.fc {
  font-family: Razerf5;
  font-size: 1rem;
  color: #999999;
  font-weight: 600;
  margin: 0;
}
.fc:hover {
  color: white;
}
.menu-icon {
  fill: #999999;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.menu-icon:hover {
  fill: lime;
}
</style>
<script></script>
