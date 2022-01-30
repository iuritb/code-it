<template>
  <div class="description-card">
    <div class="description-card__logo">
      <img :src="loadAsset(logo)" alt="" />
    </div>
    <div class="description-card__header">
      <div class="description-card__header-title">
        {{ title }}
      </div>
      <div class="description-card__header-tag">
        <span class="course-card__action-tag">
          <template v-if="isActive == true">
            <IsActive />
          </template>
          <template v-else>
            <IsInactive />
          </template>
        </span>
      </div>
    </div>
    <div class="description-card__content">
      {{ description }}
    </div>
    <div class="description-card__footer">
      <span>Duração: {{ duration }}</span>
    </div>
  </div>
</template>

<script>
//Components
import IsActive from "../tags/IsActive.vue";
import IsInactive from "../tags/IsInactive.vue";
import EditCourse from "../sidebar/EditCourse.vue";

export default {
  components: { IsActive, IsInactive, EditCourse },
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
.description-card {
  background: #f5f9f9;
  width: 20rem;
  height: 18.75rem;
  flex-direction: row;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &__logo {
    width: 317px;
    height: 150px;
    border-radius: 10px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  &__header-title {
    color: #000000;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  &__content {
    color: #333333;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
  }
  &__footer {
    color: #000000;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
}
</style>