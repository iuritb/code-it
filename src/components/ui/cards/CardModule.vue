<template>
  <div class="card-module">
    <div class="card-module__logo">
      <img :src="loadAsset(logo)" alt="" />
    </div>
    <div class="card-module__header">
      {{ title }}
    </div>
    <div class="card-module__text">
      {{ description }}
    </div>
    <div class="card-module__classes">
      {{ duration }}
    </div>
    <div class="card-module__action"></div>
  </div>
</template>

<script>
import IsActive from "../tags/IsActive.vue";
import IsInactive from "../tags/IsInactive.vue";
import IsEnable from "../tags/IsEnable.vue";
import IsDisabled from "../tags/IsDisabled.vue";
import EditModule from "../sidebar/EditModule.vue";
export default {
  components: { IsActive, IsInactive, EditModule, IsEnable, IsDisabled },
  props: {
    duration: {
      type: String,
    },
    logo: {
      type: String,
      default: "Não informado",
    },
    title: {
      type: String,
      default: "Não informado",
    },
    description: {
      type: String,
      default: "Não informado",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    loadAsset(name) {
      const path = `../../../assets/logos/${name}`;
      const modules = import.meta.globEager("../../../assets/logos/*.svg");
      return modules[path].default;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-module {
  background: #f5f9f9;
  border-radius: 0px 0px 5px 5px;
  width: 292px;
  height: 190px;
  &__header {
    color: #000000;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }
  &__text {
    color: #000000;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
  }
  &__classes {
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }
  &__action {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>