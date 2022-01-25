<template>
  <div class="course">
    <div class="course__content">
      <p class="course__content-p">Seus treinamentos</p>
      <PrimaryButton
        class="course__content-button"
        @click="newCourse('classes')"
        :label="'Novo Treinamento'"
      />
    </div>
  </div>
</template>

<script>
//UI Components
import PrimaryButton from "../components/ui/buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
  data() {
    return {
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
}
</style>