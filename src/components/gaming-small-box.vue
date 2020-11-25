<template>
  <div class="col-md-4">
    <div class="card-gaming">
      <img class="img- card-img-top" :src="card.img" alt="product" />

      <div style="margin-bottom: 0rem" class="card-title">
        <h3
          class="m-0 pl-2 pt-3"
          style="color: #fff; font-weight: 300; font-size: 1.125rem"
        >
          {{ card.title }}
        </h3>
      </div>
      <div
        class="card-text"
        style="font-size: 14px; color: #888; padding: 10px 10px 0"
      >
        {{ card.discrip }}
      </div>
      <div style="padding: 10px" class="card-text card-text-bottom">
        <a
          style="color: #44d62c; font-weight: 300; font-size: 0.95rem"
          href="#"
          >{{ card.footer }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style></style>
