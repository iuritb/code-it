<template>
  <div class="drawer">
    <PrimaryButton @click="toggle" :label="'Novo Treinamento'" />
    <div class="slidein" :class="open ? 'open' : ''">
      <div class="drawer__new-course-header">
        <span>
          <img
            @click="toggle"
            src="../../../assets/icons/close.svg"
            alt="close icon"
          />
        </span>
        <p>Novo Treinamento</p>
        <span>
          <img src="../../../assets/icons/question.svg" alt="question icon" />
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum,
        harum, quaerat porro, maiores facilis molestias illum impedit quo
        repellat enim provident perspiciatis molestiae in saepe id cupiditate
        eveniet asperiores.
      </p>
      <button @click="toggle">X</button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "../buttons/PrimaryButton.vue";

export default {
  components: {
    PrimaryButton,
  },
  data() {
    return {
      open: false,
    };
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  &__new-course-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.slidein {
  max-width: 40rem;
  padding: 2em 3em;
  position: fixed;
  z-index: 100;
  top: 0;
  right: -100%;
  background: #f9f9f9;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

.open {
  right: 0;
}
</style>