<template>
  <div class="course">
    <div class="course__header">
      <Tabs @emit-current-component="toggleComponent" />
      <template v-if="currentComponent == 'Modules'">
        <NewModule />
      </template>
      <template v-else-if="currentComponent == 'Classes'">
        <NewClass />
      </template>
    </div>
    <div>
      <component :is="currentComponent" />
      <DescriptionCard
        :logo="course.logo"
        :title="course.title"
        :description="course.description"
        :isActive="course.isActive"
        :duration="course.duration"
      />
    </div>
  </div>
</template>

<script>
//UI Components
import NewClass from "../components/ui/sidebar/NewClass.vue";
import NewModule from "../components/ui/sidebar/NewModule.vue";
import Tabs from "../components/ui/Tab.vue";
import Classes from "./components/Classes.vue";
import Modules from "./components/Modules.vue";
import DescriptionCard from "../components/ui/cards/CardDescription.vue";

export default {
  components: {
    Tabs,
    Classes,
    Modules,
    NewClass,
    NewModule,
    DescriptionCard,
  },
  data() {
    return {
      currentComponent: "Modules",
      course: {
        courseId: "001",
        title: "Curso de Svelte",
        description: "Um curso para introdução ao Svelte com ...",
        logo: "svelte-logo-1.svg",
        duration: "20h",
        isActive: true,
      },
    };
  },
  methods: {
    toggleComponent(component) {
      this.currentComponent = component;
    },
  },
};
</script>

<style lang="scss" scoped>
.course {
  &__header {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>