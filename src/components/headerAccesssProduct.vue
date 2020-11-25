<template>
  <div class="pt-5 pb-2 text-center" style="background-color: #44d62c">
    <h1
      class="razerf5 text-black pt-4 pb-0 container"
      style="font-size: 2.2rem; font-weight: "
    >
      {{ title }}
    </h1>
    <p
      class="container w-headerproduct razerf5 text-black pb-5 pt-0"
      style="font-size: 1.2rem"
    >
      {{ dis }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    dis: String,
  },
};
</script>

<style></style>
