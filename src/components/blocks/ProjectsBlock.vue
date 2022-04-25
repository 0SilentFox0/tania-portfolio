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
          name: 'Светлана Рудченко Акушер',
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
          name: 'Panorama Parus',
          description: ['копірайтинг', 'розкладка(без дизайну)'],
          link: 'https://www.instagram.com/panorama.parus',
          insta: '@panorama.parus',
        },
        {
          name: 'PRIDE CARS',
          description: ['копірайтинг', 'розкладка(без дизайну)'],
          link: 'https://www.instagram.com/pridecars.ua',
          insta: '@pridecars.ua',
        },
        {
          name: 'Hata Chernivtsi',
          description: ['копірайтинг', 'розкладка(без дизайну)'],
          link: 'https://www.instagram.com/hata.chernivtsi/',
          insta: '@hata.chernivtsi',
        },
        {
          name: 'Massage Olena',
          description: ['Сторінка з нуля, менеджмент', 'повне ведення'],
          link: 'https://www.instagram.com/massage_olena_cv/',
          insta: '@massage_olena_cv',
        },
        {
          name: 'German Studio',
          description: ['Сторінка з 0', 'менеджмент', 'повне ведення'],
          link: 'https://www.instagram.com/german_studio_/',
          insta: '@german_studio_',
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

.content-projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
