<template>
  <nav class="breadcrumb">
    <div class="breadcrumb__content">
      <span class="breadcrumb__content-item">Home</span>
      <span class="breadcrumb__content-item"> > </span>
      <span class="breadcrumb__content-item">Treinamento</span>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  background-color: #dee2e6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.12rem;
  &__content {
    color: #333333;
    margin: 1.5rem 2em 1.5rem 2rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  &__content-item {
    margin: 5px;
    cursor: pointer;
  }
  &__content-item:hover {
    color: #1DBAD3;
    margin: 5px;
    cursor: pointer;
  }
}
</style>

