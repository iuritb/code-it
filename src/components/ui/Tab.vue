<template>
  <div class="tab">
    <div class="tab_button">
      <button
        :class="[
          'tab__button-module',
          { active: currentComponent === 'Modules' },
        ]"
        @click="toggle('Modules')"
      >
        Módulos
      </button>
      <button
        :class="[
          'tab__button-class',
          { active: currentComponent === 'Classes' },
        ]"
        @click="toggle('Classes')"
      >
        Aulas
      </button>
      <div class="tab__divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: "Modules",
    };
  },
  methods: {
    toggle(component) {
      this.currentComponent = component;
      this.$emit("emit-current-component", component);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  &__button {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }
  &__button-module {
    background: #dee2e6;
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
    width: 58.25rem;
    height: 2px;
  }
}
.active {
  background: #1dbad3;
}
</style>
