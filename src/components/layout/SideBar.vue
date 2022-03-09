<template>
  <aside class="sidebar">
    <span class="sidebar__content">
      <span class="sidebar__content-list">
        <img src="../../assets/icons/list.svg" alt="list icon" />
      </span>
      <span class="sidebar__content-icon">
        <img src="../../assets/icons/house.svg" alt="house icon" />
      </span>
      <span class="sidebar__content-icon">
        <img src="../../assets/icons/book.svg" alt="book icon" />
      </span>
    </span>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #021826;
  width: 6.25rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  height: 100%;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__content-list {
    margin: 3.5rem;
  }
  &__content-icon {
    margin: 1.5rem;
  }
}
</style>