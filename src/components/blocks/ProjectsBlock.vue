<template>
  <section
    id="projects"
    class="projects">
    <div class="container">
      <div class="content">
        <h1 class="text-xl">
          Проекти
        </h1>
        <div class="content-projects">
          <project-card
            v-for="(project, index) in projects"
            :key="index"
            :project="project"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/cards/ProjectCard.vue';

export default {
  name: 'ProjectsBlock',
  components: {ProjectCard},
  data() {
    return {
      projects: [
        {
          name: 'VYO',
          description: ['ведення акаунту Instagram', 'арт-директор'],
          link: 'https://www.instagram.com/vyoplace/',
          insta: '@vyoplace',
        },
        {
          name: 'Одеса-мама',
          description: ['ведення акаунту Instagram'],
          link: 'https://www.instagram.com/odesamama_kyiv/',
          insta: '@odesamama_kyiv',
        },
        {
          name: 'Турагентство TRAVEL PEOPLE',
          description: ['ведення акаунту Instagram'],
          link: 'https://www.instagram.com/travel_people_tur/',
          insta: '@travel_people_tur',
        },
        {
          name: 'Cherry coffee roasters & cakes',
          description: ['ведення акаунту Instagram'],
          link: 'https://www.instagram.com/cherryroasters/',
          insta: '@cherryroasters',
        },
        {
          name: 'Светлана Рудченко| Акушер',
          description: ['ведення акаунту Instagram'],
          link: 'https://www.instagram.com/cherryroasters/',
          insta: '@svet.malinka_',
        },
        {
          name: 'Будівельний магазин «Полісся»',
          description: ['ведення акаунту Instagram'],
          link: 'https://www.instagram.com/polissya_sk/',
          insta: '@polissya_sk',
        },
        {
          name: 'Gastronom food & wine bar 🍷',
          description: ['ведення акаунту Instagram'],
          link: 'https://www.instagram.com/gastronom_winebar/',
          insta: '@gastronom_winebar',
        },
        {
          name: 'Healthy Pet & Pet-Friendly Cafe',
          description: ['ведення акаунту Instagram', 'створення індивідуальної контент стратегії.'],
          link: 'https://www.instagram.com/healthy__pet/',
          insta: '@healthy__pet',
        },
        {
          name: 'Светлана Котенко',
          description: ['ведення акаунту Instagram'],
          link: 'https://www.instagram.com/lana_kotenko_/',
          insta: '@lana_kotenko_',
        },
        {
          name: 'BARON | TikTok DOM',
          description: ['ведення акаунту TikTok та Instagram'],
          link: 'https://vm.tiktok.com/ZMRNq2JeP/',
          insta: '@baron.tiktok.dom',
        },
        {
          name: 'TOK',
          description: ['ведення акаунту TikTok'],
          link: 'https://vm.tiktok.com/ZMRNqknAN/',
          insta: '@tokcompany',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.projects {
  padding: 100px 0;
  background: $secondary;
}
</style>
