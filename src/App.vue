<template>
  <SideBar />
  <NavBar />
  <BreadCrumb />
</template>

<script setup>
//Layout components
import NavBar from "./components/layout/NavBar.vue";
import SideBar from "./components/layout/SideBar.vue";
import BreadCrumb from "./components/layout/BreadCrumb.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
