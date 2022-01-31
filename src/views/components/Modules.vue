<template>
  <div class="modules">
    <h1>modulos component</h1>
    <CardModule
      :logo="course.logo"
      :title="course.title"
      :description="course.description"
      :isActive="course.isActive"
      :duration="course.duration"
    />
  </div>
</template>

<script>
import CardModule from "../../components/ui/cards/CardModule.vue";
export default {
  components: { CardModule },
  data() {
    return {
      course: {
        courseId: "001",
        title: "Curso de Svelte",
        description: "Um curso para introdução ao Svelte com ...",
        logo: "svelte-logo-2.svg",
        duration: "20h",
        isActive: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.modules {
}
</style>