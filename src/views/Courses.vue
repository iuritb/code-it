<template>
  <div class="course">
    <div class="course__content">
      <p class="course__content-p">Seus treinamentos</p>

      <NewCourse @newCourse="newCourse" />
      <template v-for="(course, index) in courses" :key="index">
        <CardCourse
          @deleteCourse="deleteCourse"
          @editCourse="editCourse"
          class="course__content-card"
          :courseId="course.courseId"
          :logo="course.logo"
          :title="course.title"
          :description="course.description"
          :duration="course.duration"
          :isActive="course.isActive"
        />
      </template>
    </div>
  </div>
</template>

<script>
//UI Components
import CardCourse from "../components/ui/cards/CardCourse.vue";
import NewCourse from "../components/ui/sidebar/NewCourse.vue";

export default {
  components: {
    CardCourse,
    NewCourse,
  },
  data() {
    return {
      id: null,
      cursoDelete: null,
      cursoEdit: null,
      curso: {
        courseId: "",
        description: "",
        duration: "",
        isActive: null,
        logo: "svelte-logo.svg",
        title: " ",
      },
      courses: [
        {
          courseId: 1,
          title: "Curso de Svelte",
          description: "Um curso para introdução ao Svelte com ...",
          logo: "svelte-logo.svg",
          duration: "20h",
          isActive: true,
        },
        {
          courseId: 2,
          title: "Curso de React",
          description: "Como Criar aplicativos utilizando React ...",
          logo: "react-logo.svg",
          duration: "40h",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    newCourse(curso) {
      this.curso = curso;
      this.courses.push(this.curso);
    },
    editCourse(curso) {
      this.cursoEdit = this.courses.findIndex(
        (obj) => obj.courseId == curso.courseId
      );

      this.courses[this.cursoEdit].title = curso.title;
      this.courses[this.cursoEdit].description = curso.description;
      this.courses[this.cursoEdit].duration = curso.duration;
      // console.log("After update: ", this.courses[this.cursoEdit]);
    },
    deleteCourse(id) {
      function isCourse(course) {
        return course.courseId === id;
      }
      this.cursoDelete = this.courses.find(isCourse);
      this.courses.splice(this.courses.indexOf(this.cursoDelete), 1);
    },
    toggle() {
      this.open = !this.open;
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
    margin: 2rem;
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