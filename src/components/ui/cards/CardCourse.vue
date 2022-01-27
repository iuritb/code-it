<template>
  <div class="course-card">
    <div class="course-card__text">
      <img class="course-card__logo" :src="loadAsset(logo)" alt="" />
      <div class="course-card__content">
        <span
          @click="redirect(`/course/${courseId}`)"
          class="course-card__text-title"
          >
          {{ title }}
          </span>
        <span class="course-card__text-description">{{ description }}</span>
      </div>
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
          <EditCourse
            :courseId="courseId"
            :logo="logo"
            :title="title"
            :description="description"
            :isActive="isActive"
          />
          <!-- <img
            @click="editCourse(courseId)"
            src="../../../assets/icons/pencil-square.svg"
            alt="chevron-right icon"
          /> -->
        </span>
        <span class="course-card__action-delete">
          <img
            @click="deleteCourse(courseId)"
            src="../../../assets/icons/trash.svg"
            alt="chevron-right icon"
          />
        </span>
      </div>
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
    courseId: {
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
    redirect(path) {
      console.log(path);
      this.$router.push(`${path}`);
    },
    editCourse(item) {
      console.log("edit course", item);
    },
    deleteCourse(item) {
      console.log("delete course", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.course-card {
  background: #f5f9f9;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 6.25rem;
  border-radius: 10px;
  flex-direction: row;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    margin: 0 0 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__text-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
  }
  &__text-title:hover {
    color: #1dbad3;
  }
  &__text-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  &__action-tag {
    margin: 0 0 0 10rem;
  }

  &__action-section {
    margin: 0.8rem 1em 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  &__action-edit {
    cursor: pointer;
  }
  &__action-delete {
    cursor: pointer;
  }
}
.course-card:hover {
  box-shadow: 0px 1px 10px 2px rgba(0.15, 0.15, 0.15, 0.3);
}
</style>