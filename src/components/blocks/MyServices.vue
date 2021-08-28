<template>
	<section
		id="services"
		class="services">
		<div class="container h-100">
      <div class="content h-100 d-flex justify-content-center align-items-start">
        <div class="content__main w-50 d-flex flex-column justify-content-center align-items-start position-relative">
          <span class="text-xl">
            Мої послуги
          </span>
          <span class="text-sm">
            Я працюю з кожним проектом індивідуально,
            тому вартість розраховується після діалогу
            з клієнтом. Послуги можна замовити
            як в комплексі, так і окремо.
          </span>
          <div class="icon-wrapper">
            <img
              svg-inline
              class="icon"
              src="@/assets/src/icons/service-brush.svg"
              alt="brush">
          </div>
          <img
            svg-inline
            class="swiper-button-prev"
            slot="button-prev"
            src="@/assets/src/icons/arrow.svg"
            alt="arrow"
          >
          <img
            svg-inline
            class="swiper-button-next"
            slot="button-next"
            src="@/assets/src/icons/arrow.svg"
            alt="arrow">
        </div>
        <div class="swiper-wrapper">
          <swiper
            class="swiper"
            :options="swiperOption">
            <swiper-slide
              v-for="(slider, index) in sliderInfo"
              :key="slider.title + index"
              class="slide">
              <div class="slide-content w-100 h-100 d-flex flex-column justify-content-center align-items-start">
                <span class="text-md font-secondary text-accent">
                  0{{ index + 1 }}
                </span>
                <span class="text-lg mt-3 mb-4">
                  {{ slider.title }}
                </span>
                <span class="text-sm">
                  {{ slider.description }}
                </span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
		</div>
	</section>
</template>


<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'MyServices',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      sliderInfo: [
        {
          title: "Стратегія",
          description: "Розробка SMM стратегії — детального плану роботи з соціальними мережами. Стратегія потрібна для ефективного просування.",
        },
        {
          title: "Упакування",
          description: "Упакування акаунту в популярних соціальних мережах: Instagram, Facebook, TikTok. Підбір і розробка візуальної концепції бренду, оформлення шапки профіля.",
        },
        {
          title: "Розбір болей",
          description: "Виявлення болей та потреб клієнта, їх розбір та вирішення",
        },
        {
          title: "Контент план",
          description: "Розробка графіку публікування постів та Stories, регулярний постинг згідно розробленого контент плану.",
        },
        {
          title: "Контент",
          description: "Створення якісного фото- та відеоконтенту. Створення креативів (картинки та відео анімації)",
        },
        {
          title: "Stories",
          description: "Зйомка та оформлення Stories в Instagram. Формуваня Highlights, підбір обкладинок.",
        },
        {
          title: "Копірайтинг",
          description: "Написання унікальних текстів на різні теми для постів та Stories.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';
#services {
	background: $secondary;
  height: 100vh;

  .content__main {
    height: 100%;
    padding: 0 60px;

    span {
      z-index: 10;
    }
    .icon-wrapper {
      position: absolute;
      z-index: 0;
      width: 90%;
      top: 25%;
      left: 0;

      .icon {
        width: 100%;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: 70%;
      width: 68px;

      &:focus {
        outline: none;
      }

      &:hover {
        path {
          stroke: $text-color;
        }
      }
    }

    .swiper-button-prev {
      transform: rotate(180deg);
    }
  }

  .swiper-wrapper {
    height: 100%;
    overflow: hidden;
    .swiper {
      .slide {
        padding: 150px 70px;
        border-left: 2px solid $accent;
        width: 60%;
      }
    }
  }
}
</style>