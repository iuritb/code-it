<template>
  <div class="container">
    <SideBar class="container__sidebar" />
    <NavBar class="container__navbar" />
    <BreadCrumb class="container__breadcrumb" />
  </div>
</template>

<script setup>
//Layout components
import NavBar from "./components/layout/NavBar.vue";
import SideBar from "./components/layout/SideBar.vue";
import BreadCrumb from "./components/layout/BreadCrumb.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* .container {
  &__sidebar {
    flex-direction: column;
  }
  &__navbar {
    flex-direction: row;
  }
  &__breadcrumb {
    flex-direction: row;
  }
} */
</style>
