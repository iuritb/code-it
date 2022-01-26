<template>
  <div class="course-card">
    <div class="course-card__text">
      <img class="course-card__logo" :src="loadAsset(logo)" alt="" />
      <span class="course-card__text-title">{{ title }}</span>
      <span class="course-card__text-description">{{ description }}</span>
    </div>
    <div class="course-card__action">
      <span class="course-card__action-tag">
        <template v-if="isActive == true">
          <IsActive />
        </template>
        <template v-else>
          <IsInactive />
        </template>
      </span>
      <div class="course-card__action-section">
        <span class="course-card__action-edit">
          <img
            class="course-card__action-trash-icon"
            src="../../../assets/icons/pencil-square.svg"
            alt="chevron-right icon"
          />
        </span>
        <span class="course-card__action-delete">
          <img
            class="course-card__action-trash-icon"
            src="../../../assets/icons/trash.svg"
            alt="chevron-right icon"
          />
        </span>
      </div>
    </div>
    <!-- <pre>
      {{ logo }}
      {{ title }}
      {{ description }}
      {{ isActive }}

    </pre> -->
  </div>
</template>

<script>
//Components
import IsActive from "../tags/IsActive.vue";
import IsInactive from "../tags/IsInactive.vue";

export default {
  components: { IsActive, IsInactive },
  props: {
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
    loadAsset(path) {
      let url = new URL(`../../../../assets/logos/${path}.svg`, import.meta.url)
        .href;
      let urlImg = url.toString();
      console.log(urlImg);
      return urlImg;
    },
    redirect(path) {
      this.$router.push(`${path}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.course-card {
  width: 100%;
  height: 6.25rem;
  background: #f5f9f9;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &__action-section {
    margin: 0.5rem 1em 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>