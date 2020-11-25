<template>
  <section>
    <imageRow
      bgImgRow="1.jpg"
      title="PERFORMANCE MEETS PRODUCTIVITY."
      discription="Shop The New Razer Book 13"
    />asdsadasfasf
    <imageRow
      bgImgRow="2.jpg"
      title="GET A HEAD START ON HOLIDAY SHOPPING"
      discription="Shop Holiday Gift Guide"
    />
    <imageRow
      bgImgRow="3.jpg"
      title="CONSOLE. MOBILE. COMBINED."
      discription="Shop Razer Kaira Pro for Xbox"
    />

    <imgCol
      bgImgCL="4L.jpg"
      titleCL="MORE POWER. MORE CORES. MORE FRAMES."
      discriptionCL="Up to $100 in Savings. Shop Razer Blade 15"
      bgImgCR="4R.jpg"
      titleCR="Cyberpunk 2077 Edition"
      discriptionCR="Razer.com Exclusive. Shop Now"
    />

    <imgCol
      bgImgCL="5L.jpg"
      titleCL="RazerStore Exclusive"
      discriptionCL="Learn More"
      bgImgCR="5R.jpg"
      titleCR="COLOR YOUR WORLD WITH RAZER CHROMA RGB ACCESSORIES"
      discriptionCR="Learn More"
    />

    <imgCol
      bgImgCL="6L.jpg"
      titleCL="THE MEOW FACTOR. NOW MOBILE."
      discriptionCL="Shop Razer Kraken BT Kitty Edition"
      bgImgCR="6R.jpg"
      titleCR="JOIN THE DISCUSSION ON ALL THINGS RAZER"
      discriptionCR="Get in on Razer Insider"
    />
  </section>
</template>
<script>
const imageRow = () => import("@/components/ImageRow");
const imgCol = () => import("@/components/imgCol");

export default {
  components: {
    imageRow,
    imgCol,
  },
};
</script>