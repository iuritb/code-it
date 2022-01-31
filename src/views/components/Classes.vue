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
          <div
            v-for="(classes, index) in item.classes"
            :key="index"
            class="classes__togle-list"
          >
            <span>
              <img
                @click="toggle"
                src="../../assets/icons/simple-book.svg"
                alt="chevron-right icon"
              />
            </span>
            <span>
              {{ classes.title }}
            </span>
            <EditClass />
            <span>
              <img
                @click="toggle"
                src="../../assets/icons/trash.svg"
                alt="chevron-right icon"
              />
            </span>
          </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import EditClass from "../../components/ui/sidebar/EditClass.vue";

export default {
  components: { EditClass },
  props: ["modules"],
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
      console.log(this.isOpened);
    },
  },
};
</script>

<style lang="scss" scoped>
.classes {
}
</style>