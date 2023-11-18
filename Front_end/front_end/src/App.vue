<template>
  <span>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld> -->
    <!-- <Dangnhap /> -->
    <!-- <AppHeader/> -->
    <!-- <ContactCart/> -->
    <AppHeader />
    <!-- <Trangchu /> -->
    <!-- <ProductFrom /> -->
    <!-- <router-view /> -->
    <!-- <DSND /> -->
    <router-view></router-view>
    <Footer />
  </span>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Dangky from "./components/Dangky.vue";
import Dangnhap from "./components/Dangnhap.vue";
import ProductFrom from "./components/ProductFrom.vue";
import Trangchu from "./views/Trangchu.vue";
import Footer from "./views/Footer.vue";
import DSND from "./components/DSND.vue";

export default {
  name: "App",
  components: {
    AppHeader,
     Dangky,
    Dangnhap,
    // ContactCart,
    // ProductFrom,
    Trangchu,
    DSND,
    Footer,
    
  },
  data() {
    return {
      show: false,
    };
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
