<template>
  <div id="app">
    <PrimaryButton
        @click="toggle"
        :label="'Novo Treinamento'"
      />
    <!-- Add open class if state is set to open  -->
    <div class="slidein" :class="open ? 'open' : ''">
      <h1>Header</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum, harum, quaerat porro, maiores facilis molestias illum impedit quo repellat enim provident perspiciatis molestiae in saepe id cupiditate eveniet asperiores.</p>
        <button class="close-btn" @click="toggle"> X </button>
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
      open: false
    };
  },
  
  methods: {
    toggle() {
      this.open = !this.open; 
    }
  }
};
</script>

<style>
/* Make slide in box hidden off screen with fixed positioning 100% to the right */
.slidein {
  max-width: 38rem;
  padding: 2em 3em; 
  position: fixed; 
  z-index: 100;
  top: 0;
  right: -100%;
  background: #ddd;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0,0,0,.5);
  transition: all .5s ease-in-out; 
}

/* Set positioning back to 0 when toggled opened */
.open {
  right: 0; 
}

/* add a close button in case toggle button is hidden on smaller screens */
.close-btn {
  border: none; 
  font-weight: bold; 
  font-size: 2em; 
  background: transparent; 
  position: absolute; 
  top: 0;
  left: 0;
  padding: .5em;
}

/* General styles unrelated to slide in */


.toggle {
  margin: 1em;
}

button {
  padding: .5em 1em;
  border-radius: 3em;
  font-size: 1.1em;
}

h1 {
  font-weight: 200;
}
</style>