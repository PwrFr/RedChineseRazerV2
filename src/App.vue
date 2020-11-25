<template>
  <div id="app">
    <menu-bar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    menuBar: () => import("@/components/MenuBar"),
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
