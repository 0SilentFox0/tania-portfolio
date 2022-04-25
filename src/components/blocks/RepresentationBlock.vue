<template>
<section class="representation">
  <div class="container">
    <div class="content d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <div class="image-wrapper right-round">
        <img
            class="image"
            src="@/assets/src/img/tanya.jpeg"
            alt="Tanya">
      </div>
      <div class="content-text d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start">
        <span class="text-xl">
          Привіт!<br> Я-Таня Урсакій
        </span>
        <span class="text-sm w-lg-50 mb-5 mt-3">
          Спеціаліст по маркетингу у соціальних мережах
          Нам з тобою по дорозі, якщо ти хочеш, щоб:
        </span>
        <div class="content-items text-sm mt-2">
          <div
              v-for="(item, n) in dataItems"
              :key="item.text"
              class="d-flex flex-column item">
          <span class="mb-3">
            {{ item.text }}
          </span>
           <div class="w-75">
              <img
                svg-inline
                class="image"
                :src="require('@/assets/src/icons/small-brushes/' + (n + 1) + '.svg')"
                alt="brush">
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "RepresentationBlock",
  data () {
    return {
      dataItems: [
        {
          text: "бізнес став ще більш впізнаваним",
        },
        {
          text: "візуал освіжився та припудрив носик",
        },
        {
          text: "продажі росли і твій банк засипав тебе сповіщеннями про грошові перекази",
        },
        {
          text: "сторіси передавали всю щирість та душевність бренду",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

.representation {
  padding-bottom: 100px;

  .content-text {
    width: 100%;
    @media (min-width: 1024px) {
      width: 50%;
      margin-left: toRem(130px);
    }
  }

  .content-items {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    column-gap: toRem(66px);
    row-gap: toRem(27px);
  }
}
</style>
