<template>
  <div class="course-card">
    <img class="course_card__logo"  alt="" />
    <div class="course_card__text">
      <span class="course_card__text-title">{{ title }}</span>
      <span class="course_card__text-description">{{ description }}</span>
    </div>
    <div class="course_card__action">
      <span class="course_card__action-tag"></span>
      <span class="course_card__action-edit"></span>
      <span class="course_card__action-delete"></span>
    </div>
  </div>
</template>

<script>
export default {
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
      return require(`../../../../public/logos/${path}`);
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
}
</style>