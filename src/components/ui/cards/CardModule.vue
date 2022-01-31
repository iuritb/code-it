<template>
  <div class="card-module">
    <div class="card-module__logo">
      <img :src="loadAsset(logo)" alt="" />
    </div>
    <div class="card-module__header">
      {{ index }}.{{ title }} <EditModule />
    </div>
    <div class="card-module__text">
      {{ description }}
    </div>
    <div class="card-module__classes">
      <strong>Aulas:</strong> {{ duration }}
    </div>
    <div class="card-module__action">
      <span>
        <template v-if="isActive == true">
          <IsActive />
        </template>
        <template v-else>
          <IsInactive />
        </template>
      </span>
      <span>
        <img
          class="card-module__action-icon"
          @click="deleteModule(moduleId)"
          src="../../../assets/icons/trash.svg"
          alt="chevron-right icon"
        />
      </span>
    </div>
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
    index: {
      type: Number,
    },
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
    moduleId: {
      type: Number,
    },
  },
  methods: {
    loadAsset(name) {
      const path = `../../../assets/logos/${name}`;
      const modules = import.meta.globEager("../../../assets/logos/*.svg");
      return modules[path].default;
    },
    deleteModule(moduleId) {
      console.log("delete module: ", moduleId);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-module {
  background: #f5f9f9;
  border-radius: 0px 0px 5px 5px;
  width: 292px;
  padding: 0.5rem;
  &__header {
    color: #000000;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__text {
    color: #000000;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-self: flex-start;
  }
  &__classes {
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-self: flex-start;
  }
  &__action {
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__action-icon {
    cursor: pointer;
  }
}
</style>