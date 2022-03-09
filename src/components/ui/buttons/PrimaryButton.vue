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

<style lang="scss" scoped>
.primary-button {
  padding: 0.5rem 5rem 0.5rem 5rem;
  background-color: #245C73;
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
.primary-button:hover {
  box-shadow: 0px 1px 10px 2px rgba(0.15, 0.15, 0.15, 0.3);
}
</style>