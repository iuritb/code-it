<template>
  <div>
    <button class="success-tag">Habilitado</button>
  </div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style lang="scss" scoped>
.success-tag {
  background: #4B8CA6;
  padding: 5px;
  width: 120px;
  height: 25px;
  border-radius: 15px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  border: none;
  text-transform: uppercase;
}
</style>