<template>
  <div
    :class="{'fullCard': showFull}"
    class="project-card w-100">
    <div
      @click="showFull = !showFull"
      class="project-card__main-content d-flex justify-content-between align-items-center px-3 py-4">
      <div class="d-flex flex-column">
        <div class="project-info d-flex justify-content-start align-items-baseline">
          <span class="text-lg name">
            {{ project.name }}
          </span>
          <a
            :href="project.link"
            target="_blank"
            class="text-base">
            {{ project.insta }}
          </a>
        </div>
        <span
          v-for="item in project.description"
          :key="item"
          class="text-base description">
            {{ item }}
        </span>
      </div>
      <div class="d-flex justify-content-end align-items-center">
        <img
          svg-inline
          class="icon"
          src="@/assets/src/icons/arrow.svg"
          alt="arrow">
      </div>
    </div>
<!--    <div class="project-best-examples">-->
<!--      <div class="image-wrapper">-->
<!--        <img-->
<!--          src="@/assets/src/img/tanya.jpeg"-->
<!--          alt="Example">-->
<!--      </div>-->
<!--      <div class="image-wrapper">-->
<!--        <img-->
<!--          src="@/assets/src/img/tanya.jpeg"-->
<!--          alt="Example">-->
<!--      </div>-->
<!--      <div class="image-wrapper">-->
<!--        <img-->
<!--          src="@/assets/src/img/tanya.jpeg"-->
<!--          alt="Example">-->
<!--      </div>-->
<!--    </div>-->
  </div>
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

  &.fullCard {
    //height: 800px;
    transition: .3s;

    .project-card__main-content {
      cursor: pointer;
      border-bottom-color: $links-color;
    }

    .project-best-examples {
      //transition: .3s;
      //opacity: 1;
      //display: flex;
    }

    .icon {
      transform: rotate(90deg);

      path {
        stroke: $links-color;
      }
    }
  }

  .project-card__main-content {
    border-bottom: 2px solid $accent;
    transition: .3s;
    cursor: pointer;

    .project-info, .description {
      color: $text-color;

      .name {
        margin-right: 20px;
      }
    }
  }

  .project-best-examples {
    position: absolute;
    top: 25%;
    left: 0;
    justify-content: space-between;
    align-content: center;
    display: none;
    opacity: 0;

    .image-wrapper {
      width: calc(100% / 3 - 20px);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .icon {
    margin-left: 20px;
    transform: rotate(-45deg);
    transition: .3s;
  }
}
</style>
