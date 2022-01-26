<template>
  <div class="course">
    <div class="course__content">
      <p class="course__content-p">Seus treinamentos</p>
      <PrimaryButton
        class="course__content-button"
        @click="newCourse('classes')"
        :label="'Novo Treinamento'"
      />
      <template v-for="(course, index) in courses" :key="index">
        <CardCourse
          class="course__content-card"
          :logo="course.logo"
          :title="course.description"
          :description="course.description"
          :isActive="course.isActive"
        />
      </template>
    </div>
  </div>
</template>

<script>
//UI Components
import PrimaryButton from "../components/ui/buttons/PrimaryButton.vue";
import CardCourse from "../components/ui/cards/CardCourse.vue";
export default {
  components: {
    PrimaryButton,
    CardCourse,
  },
  data() {
    return {
      courses: [
        {
          title: "Curso de Svelte",
          description: "Um curso para introdução ao Svelte com ...",
          logo: "svelte.svg",
          isActive: true,
        },
        {
          title: "Curso de React",
          description: "Como Criar aplicativos utilizando React ...",
          logo: "react.svg",
          isActive: false,
        },
      ],
      label: "teste",
    };
  },
  methods: {
    newCourse(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.course {
  margin: 0.5rem 5rem 0.5rem 5rem;

  &__content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  &__content-p {
    color: #000000;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  &__content-button {
    align-self: flex-end;
  }
  &__content-card {
    margin: 2rem 0 1rem;
  }
}
</style>