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
      <!-- <template v-if="currentComponent == 'Modules'">
        <Modules />
      </template>
      <template v-else-if="currentComponent == 'Classes'">
        <Classes />
      </template> -->
      <div class="course__content">
        <component :modules="modules" :is="currentComponent" />
        <DescriptionCard
          :logo="course.logo"
          :title="course.title"
          :description="course.description"
          :isActive="course.isActive"
          :duration="course.duration"
        />
      </div>
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
      modules: [
        {
          logo: "svelte-logo-2.svg",
          title: "Introdução",
          description: "Introdução ao Svelte",
          isActive: true,
          duration: "4 aulas",
          classes: [
            {
              title: "Primeira aula",
              content: "Conteudo aula 1",
            },
            {
              title: "Segunda Aula",
              content: "Conteudo aula 2",
            },
            {
              title: "Terceira aula",
              content: "Conteudo aula 3",
            },
            {
              title: "Quarta aula",
              content: "Conteudo aula 4",
            },
          ],
        },
        {
          logo: "svelte-logo-2.svg",
          title: "Programação Funcional",
          description: "Biblioteca Ramda e conceito",
          isActive: true,
          duration: "4 aulas",
          classes: [
            {
              title: "Primeira aula",
              content: "Conteudo aula 1",
            },
            {
              title: "Segunda Aula",
              content: "Conteudo aula 2",
            },
            {
              title: "Terceira aula",
              content: "Conteudo aula 3",
            },
            {
              title: "Quarta aula",
              content: "Conteudo aula 4",
            },
            {
              title: "Quarta aula",
              content: "Conteudo aula 4",
            },
            {
              title: "Quarta aula",
              content: "Conteudo aula 4",
            },
            {
              title: "Quarta aula",
              content: "Conteudo aula 4",
            },
          ],
        },
        {
          logo: "svelte-logo-2.svg",
          title: "Rx.Js",
          description: "Aprendendo sobre RX.Js",
          isActive: false,
          duration: "4 aulas",
          classes: [
            {
              title: "Primeira aula",
              content: "Conteudo aula 1",
            },
            {
              title: "Segunda Aula",
              content: "Conteudo aula 2",
            },
            {
              title: "Terceira aula",
              content: "Conteudo aula 3",
            },
            {
              title: "Quarta aula",
              content: "Conteudo aula 4",
            },
          ],
        },
        {
          logo: "svelte-logo-2.svg",
          title: "Finalização",
          description: "Finalizando o WebApp",
          isActive: true,
          duration: "4 aulas",
          classes: [
            {
              title: "Primeira aula",
              content: "Conteudo aula 1",
            },
            {
              title: "Segunda Aula",
              content: "Conteudo aula 2",
            },
            {
              title: "Terceira aula",
              content: "Conteudo aula 3",
            },
            {
              title: "Quarta aula",
              content: "Conteudo aula 4",
            },
          ],
        },
      ],
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
    padding: 1rem 0 1rem 0;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  &__content {
    padding: 0 5rem 0 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>