<template>
  <div>
    <h1>tela de cursos</h1>
    <PrimaryButton :label="label" />
  </div>
</template>

<script>
//UI Components
import PrimaryButton from "../components/ui/buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton
  },
  data() {
    return {
      label: 'teste'
    }
  }
};
</script>