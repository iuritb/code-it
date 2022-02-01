<template>
  <div class="classes">
    <div class="classes__toggle">
      <div
        class="classes__toggle-header"
        v-for="(item, index) in modules"
        :key="index"
      >
        <div>
          <CollapseClass :item="item" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditClass from "../../components/ui/sidebar/EditClass.vue";
import CollapseClass from "../../components/ui/collapse/CollapseClasses.vue";

export default {
  components: { EditClass, CollapseClass },
  props: ["modules"],
  data() {
    return {
      isOpened: false,
      module: null,
    };
  },
  mounted() {
    this.module = this.modules;
  },
  methods: {
    deleteClass(classId) {
      console.log("delete class: ", classId);
    },
  },
};
</script>

<style lang="scss" scoped>
.classes {
}
.icon {
  cursor: pointer;
}
</style>