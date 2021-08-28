<template>
  <div
      id="app"
     class="font-main"
  >
<!--    <template v-if="winnerWidth >= 1024">-->
      <MainHeader/>
      <MyNameBlock/>
      <RepresentationBlock/>
      <MyServices/>
      <SmmAdvantages/>
      <AdvantagesBlock/>
      <ProjectsBlock/>
      <FeedBackBlock/>
      <MainFooter/>
<!--    </template>-->
<!--    <MobilePlug v-else/>-->
  </div>
</template>

<script>

import AdvantagesBlock from "@/components/blocks/AdvantagesBlock.vue";
import FeedBackBlock from "@/components/blocks/FeedBackBlock.vue";
import MobilePlug from '@/components/blocks/MobilePlug.vue'
import MyServices from '@/components/blocks/MyServices.vue'
import ProjectsBlock from "@/components/blocks/ProjectsBlock.vue";
import SmmAdvantages from "@/components/blocks/SmmAdvantages.vue";
import MainFooter from "@/components/footer/MainFooter.vue";
import MainHeader from "@/components/header/MainHeader.vue";
import MyNameBlock from "@/components/blocks/MyNameBlock.vue";
import RepresentationBlock from "@/components/blocks/RepresentationBlock.vue";
export default {
  name: 'App',
  components: {
    // MobilePlug,
    MyServices,
    FeedBackBlock,
    MainFooter,
    ProjectsBlock,
    AdvantagesBlock,
    SmmAdvantages,
    RepresentationBlock,
    MyNameBlock,
    MainHeader,
  },
  data () {
    return {
      winnerWidth: window.innerWidth,
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.winnerWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss">
@import './assets/scss/vars';
#app {
  margin: 0;
  padding: 0;
  color: $text-color;
  overflow-x: hidden;
}
</style>
