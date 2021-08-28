<template>
  <div class="mobile-header">
    <div class="container h-100">
      <div class="content h-100">
        <div class="links h-100 d-flex flex-column justify-content-center align-items-center">
          <a
            v-smooth-scroll
            v-for="link in links"
            :key="link.value"
            class="link font-secondary text-lg mt-4"
            @click="handleClose"
            :href="link.value">
            {{ link.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  data() {
    return {
      links: [
        {
          title: 'Послуги',
          value: '#services',
        },
        {
          title: 'Переваги',
          value: '#advantages',
        },
        {
          title: 'Проекти',
          value: '#projects',
        },
        {
          title: 'Відгуки',
          value: '#feedback',
        },
        {
          title: 'Контакти',
          value: '#contacts',
        },
      ],
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.mobile-header {
  background: $secondary;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 100;

  @media (min-width: 968px) {
    display: none;
  }
}
</style>
