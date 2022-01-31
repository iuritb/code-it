<template>
  <div class="modules">
    <div v-for="(item, index) in modules" :key="index" class="modules__card">
      <CardModule
        class="modules__card-module"
        :index="index + 1"
        :logo="item.logo"
        :title="item.title"
        :description="item.description"
        :isActive="item.isActive"
        :duration="item.duration"
        :moduleId="item.moduleId"
      />
    </div>
  </div>
</template>

<script>
import CardModule from "../../components/ui/cards/CardModule.vue";
export default {
  components: { CardModule },
  props: ["modules"],
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
  display: flex;
  flex-wrap: wrap;
  &__card {
    flex-direction: row;
    margin: 0.5rem;
    align-items: center;
  }
  &__card-module:hover {
    box-shadow: 0px 1px 10px 2px rgba(0.15, 0.15, 0.15, 0.3);
  }
}
</style>