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
    <component :is="currentComponent" />
  </div>
</template>

<script>
//UI Components
import Tabs from "../components/ui/Tab.vue";
import Classes from "./components/Classes.vue";
import Modules from "./components/Modules.vue";
import NewClass from "../components/ui/sidebar/NewClass.vue";
import NewModule from "../components/ui/sidebar/NewModule.vue";

export default {
  components: {
    Tabs,
    Classes,
    Modules,
    NewClass,
    NewModule,
  },
  data() {
    return {
      currentComponent: "Modules",
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