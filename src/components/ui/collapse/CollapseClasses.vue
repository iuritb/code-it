<template>
  <div class="classes">
    <div class="classes__toggle">
      <span>{{ index + 1 }} {{ item.title }}</span>
      <template v-if="isOpened">
        <span>
          <img
            class="icon"
            @click="toggle"
            src="../../../assets/icons/double-chevron-up.svg"
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
              src="../../../assets/icons/simple-book.svg"
              alt="chevron-right icon"
            />
          </span>
          <span>
            {{ classes.title }}
          </span>
          <EditClass />
          <span>
            <img
              class="icon"
              @click="deleteClass(classes.classId)"
              src="../../../assets/icons/trash.svg"
              alt="chevron-right icon"
            />
          </span>
        </div>
      </template>
      <template v-else>
        <span>
          <img
            class="icon"
            @click="toggle"
            src="../../../assets/icons/double-chevron-down.svg"
            alt="chevron-right icon"
          />
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import EditClass from "../sidebar/EditClass.vue";

export default {
  components: { EditClass },
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },

  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
      console.log(this.item);
    },
    deleteClass(classId) {
      console.log("delete class: ", classId);
    },
  },
};
</script>

<style lang="scss" scoped>
.classes {
  display: flex;
  flex-wrap: wrap;
  width: 300px;

  padding: 10px;
}
calss .icon {
  cursor: pointer;
}
</style>