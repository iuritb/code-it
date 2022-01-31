<template>
  <div class="classes">
    <div class="classes__toggle">
      <div
        class="classes__toggle-header"
        v-for="(item, index) in modules"
        :key="index"
      >
        <span>{{ index + 1 }}.{{ item.title }}</span>
        <template v-if="isOpened">
          <span>
            <img
              @click="toggle"
              src="../../assets/icons/double-chevron-up.svg"
              alt="chevron-right icon"
            />
          </span>
        </template>
        <template v-else>
          <span>
            <img
              @click="toggle"
              src="../../assets/icons/double-chevron-down.svg"
              alt="chevron-right icon"
            />
          </span>
        </template>
        <div class="classes__togle-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modules"],
  data() {
    return {
      isOpened: true
    }
  },
  methods: {
    toggle(){
      console.log(this.isOpened)
      this.isOpened = !this.isOpened
    }
  }
};
</script>

<style lang="scss" scoped>
.classes {
}
</style>