<template>
  <a 
      :href="project.link" 
      target="_blank" 
      class="project-card w-full h-100">
    <div
      class="project-card__main-content d-flex justify-content-between align-items-center px-4 py-4">
      <div class="d-flex flex-column">
        <div class="project-info d-flex justify-content-start align-items-baseline">
          <span class="text-lg name">
            {{ project.name }}
          </span>
        </div>
        <span class="text-base mt-3">
            {{ project.insta }}
        </span>
        <span
          v-for="item in project.description"
          :key="item"
          class="text-base description">
            {{ item }}
        </span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showFull: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.project-card {
  transition: .5s;
  color: $text-color;
  position: relative;
  height: 170px;

  border-bottom: 1px solid $links-color;

  &:nth-last-child(3n) {
    border-right: 1px solid $links-color;
  }

   &:nth-last-child(3n+1) {
    border-left: 1px solid $links-color;
  }

   &:nth-last-child(-n+3) {
    border-bottom: none;
  }

   &:hover {
      background-color: $accent;
    }

  .project-card__main-content {
    transition: .3s;

    .project-info, .description {
      color: $text-color;
    }
  }

}
</style>
