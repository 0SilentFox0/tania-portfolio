<template>
  <div class="main-header py-5">
    <div class="container">
      <div class="content d-flex justify-content-between align-items-center">
        <img
          svg-inline
          class="icon"
          src="@/assets/src/icons/logo.svg"
          alt="logo"
        />
        <div class="d-none d-lg-block links">
          <a
            v-smooth-scroll
            v-for="link in links"
            :key="link.value"
            class="link font-secondary text-sm"
            :href="link.value">
            {{ link.title }}
          </a>
        </div>
        <span
          class="d-block d-lg-none"
          @click="showMobile = true"
        >
          X
        </span>
        <transition
          mode="out-in"
          name="slide-x"
        >
          <mobile-header
            v-if="showMobile"
            @close="showMobile = false"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import MobileHeader from '@/components/header/MobileHeader.vue'

export default {
  name: 'MainHeader',
  components: {
    MobileHeader,
  },
  data() {
    return {
      showMobile: false,
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
  // watch: {
  //   showMobile() {
  //     document.body.style.overflowY = showMobile ? 'hidden' : 'visible'
  //   }
  // }
}
</script>

<style lang="scss">
.links {
  .link {
    margin-left: 50px;
  }
}

.slide-x-enter-active {
  transition: all .3s ease;
}

.slide-x-leave-active {
  transition: all .5s cubic-bezier(1, .5, .8, 1);
}

.slide-x-enter,
.slide-x-leave-to {
  transform: translateX(500px);
  opacity: 0;
}

</style>
