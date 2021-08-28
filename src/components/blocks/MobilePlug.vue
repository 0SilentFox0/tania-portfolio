<template>
  <section class="mobile-plug">
    <div class="container h-100">
      <div class="content h-100 d-flex flex-column justify-content-center align-items-center">
        <div class="logo">
          <img
            svg-inline
            class="icon"
            src="@/assets/src/icons/logo.svg"
            alt="logo"
          />
        </div>
        <span class="text-md mt-3 text-center">
          Вибачте але мобільна версія ще не готова.
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MobilePlug',
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.mobile-plug {
  background: $secondary;
  height: 100vh;
}
</style>