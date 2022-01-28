<template>
  <div>
    <SideBar class="container__sidebar" />
  </div>
  <div class="container__content">
    <NavBar class="container__navbar" />
    <BreadCrumb class="container__breadcrumb" />
    <router-view></router-view>
  </div>
</template>

<script setup>
//Layout components
import NavBar from "./components/layout/NavBar.vue";
import SideBar from "./components/layout/SideBar.vue";
import BreadCrumb from "./components/layout/BreadCrumb.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
.container__content {
  margin: 0 0 0 6.25rem;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
