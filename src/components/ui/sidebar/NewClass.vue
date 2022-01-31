<template>
  <div class="new-class">
    <PrimaryButton @click="toggle" :label="'Nova Aula'" />
    <div class="slidein" :class="open ? 'open' : ''">
      <div class="new-class__header">
        <span class="new-class__header-icon">
          <img
            @click="toggle"
            src="../../../assets/icons/close.svg"
            alt="close icon"
          />
        </span>
        <p class="new-class__header-title">Nova Aula</p>
        <span class="new-class__header-icon">
          <img src="../../../assets/icons/question.svg" alt="question icon" />
        </span>
      </div>
      <div class="new-class__form">
        <p class="new-class__form-input-title">Nome</p>
        <input class="new-class__form-input-medium" type="text" />
        <p class="new-class__form-input-title">Conteúdo</p>
        <input class="new-class__form-input-big" type="text" />
        <SuccessButton class="new-class__form-button" :label="'Criar'" />
      </div>
    </div>
  </div>
</template>

<script>
//Components
import PrimaryButton from "../buttons/PrimaryButton.vue";
import SuccessButton from "../buttons/SuccessButton.vue";

export default {
  components: {
    PrimaryButton,
    SuccessButton,
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
.new-class {
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__header-icon {
    cursor: pointer;
  }
  &__header-title {
    color: #000000;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  &__form {
    margin: 0.5rem 0 0.5rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__form-small {
    margin: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  &__form-input-small {
    height: 40px;
    width: 230px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
  }
  &__form-input-medium {
    margin: 1rem;
    height: 40px;
    width: 520px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
  }
  &__form-input-big {
    margin: 1rem;
    height: 200px;
    width: 520px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
  }
  &__form-input-title {
    font-weight: 400;
    display: flex;
    align-self: flex-start;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  &__form-button {
    display: flex;
    align-self: flex-end;
  }
}
.slidein {
  width: 32.5em;
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


