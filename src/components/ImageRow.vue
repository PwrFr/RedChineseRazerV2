<template>
  <a href=""
    ><div
      class="img-row text-center mb-2 mt-2 pb-2 d-flex justify-content-center"
      v-bind:style="{
        backgroundImage: 'url(' + require('@/assets/home/' + imgSrc) + ')',
      }"
    >
      <div class="container mt-5 pt-4 w-50">
        <h2 class="title pl-4 pr-4 text-uppercase">{{ title }}</h2>
        <span class="discrip"
          >{{ discription }}
          <svg
            class="arrow align-middle"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z" />
          </svg>
        </span>
      </div></div
  ></a>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "",
    };
  },
  props: ["bgImgRow", "title", "discription"],

  watch: {
    bgImgRow: {
      handler(newVal, oldVal) {
        this.imgSrc = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
