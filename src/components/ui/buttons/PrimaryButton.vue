<template>
  <div>
    <button class="primary-button">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style lang="scss">
.primary-button {
  margin: 3rem;
  background-color: #1dbad3;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
}
</style>