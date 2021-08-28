<template>
    <div class="feedback-card w-100 d-flex justify-content-center align-items-stretch">
      <div class="image-wrapper right-round position-relative">
        <div class="w-100 h-100">
          <img
            :src="require('@/assets/src/img/feedbacks/feedback-' + (feedbackInfo.id + 1) + '.jpeg')"
            alt="Feedback"
            class="image">
        </div>
        <div class="photo-brush position-absolute">
          <div class="position-relative">
            <img
              :src="require('@/assets/src/img/photo-brush.png')"
              alt="Feedback"
              class="image">
            <div class="brush-text position-absolute w-100 d-flex flex-column justify-content-start align-items-start">
              <span class="text-md">{{ feedbackInfo.name }}</span>
              <span class="text-sm">{{ feedbackInfo.profession }}</span>
              <a
                v-if="feedbackInfo.social"
                :href="feedbackInfo.social.link"
                target="_blank"
                class="text-xxs font-secondary">
                {{ feedbackInfo.social.name }} - {{ feedbackInfo.social.follow }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="feedback-card__content d-flex flex-column justify-content-between align-items-start">
        <div class="w-75 d-flex flex-column justify-content-start align-items-start">
           <span class="text-xl">
             Про мене говорять
           </span>
          <div class="position-relative mt-4">
            <span class="text-lg">
              {{ feedbackInfo.quote }}
            </span>
            <div class="quotation-mark">
              <img
                svg-inline
                class="image"
                src="@/assets/src/icons/marks.svg"
                alt="arrow">
            </div>
          </div>
          <span
            class="text text-sm mt-4"
            v-html="feedbackInfo.text">
          </span>
        </div>
        <div class="w-75 h-25 position-relative">
          <img
            v-if="feedbackInfo.id > 0"
            svg-inline
            class="arrow left"
            src="@/assets/src/icons/arrow.svg"
            alt="arrow"
            @click="$emit('onLeft')"
          >
          <img
            v-if="feedbackInfo.id < feedbacksNumber - 1"
            svg-inline
            class="arrow right"
            src="@/assets/src/icons/arrow.svg"
            alt="arrow"
            @click="$emit('onRight')"
          >
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "FeedbackCard",
  components: {
  },
  props: {
    feedbackInfo: {
      type: Object,
      required: true,
    },
    feedbacksNumber: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';
.feedback-card {
  .image-wrapper {
    height: auto;
    width: auto;

    @media (min-width: 1023px) {
      height: 665px;
      width: 472px;
    }

    .photo-brush {
      width: 383px;
      height: 118px;
      bottom: 0;
      left: 0;

      .brush-text {
        z-index: 10;
        top: 50%;
        left: 50%;
        transform: translate(-20%, -50%);
      }
    }
  }
  .feedback-card__content {
    width: 50%;
    margin-left: 135px;

    .quotation-mark {
      position: absolute;
      top: -10px;
      left: -20px;
      z-index: -1;
    }

    .text {
      padding-right: 30px;
    }

    .arrow {
      cursor: pointer;
      transition: .6s;
      position: absolute;
      bottom: 0;

      &:focus {
        outline: none;
      }

      &:hover {
        path {
          stroke: $text-color;
        }
      }
      &.left {
        left: 0;
        transform: rotate(180deg);
      }
      &.right {
        right: 0;
      }
    }
  }
}
</style>