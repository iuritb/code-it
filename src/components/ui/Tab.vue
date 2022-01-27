<template>
  <div class="tab">
    <div class="tab_button">
      <button class="tab__button-module" >Módulos</button>
      <button class="tab__button-class">Aulas</button>
    </div>
    <div class="tab__divider"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tab {
  
  &__button {
    display: flex;
    flex-direction: row;

  }
  &__button-module {
    background: #1dbad3;
    width: 200px;
    height: 40px;
    border: none;
    text-transform: uppercase;
    border-radius: 10px 0px 0px 0px;
    cursor: pointer;
  }
  &__button-class {
    background: #dee2e6;
    width: 200px;
    height: 40px;
    border: none;
    text-transform: uppercase;
    border-radius: 0px 10px 0px 0px;
    cursor: pointer;
  }
  &__divider {
    background: #1dbad3;
    width: 100%;
    height: 2px;
  }
}
</style>
