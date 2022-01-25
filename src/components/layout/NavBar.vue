<template>
  <nav class="nav">
    <div class="nav__user">
      <span class="nav__user-name">Saitama</span>
      <span class="nav__user-profile">My account</span>
    </div>
    <img
      src="../../assets/img/user.jpeg"
      alt="user image profile"
      class="nav__user-img"
    />
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  background-color: #2e3c56;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 4.5rem;
  &__user {
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0.5rem 1.5rem 0.5rem;
  }
  &__user-name {
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  &__user-profile {
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
  }
  &__user-img {
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 6.25rem;
    margin: 1.5rem 1.5rem 1.5rem 0.5rem;
  }
}
</style>

