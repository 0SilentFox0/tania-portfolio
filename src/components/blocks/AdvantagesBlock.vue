<template>
  <section
    id="advantages"
    class="representation">
    <div class="container">
      <div class="content d-flex flex-row-reverse justify-content-center align-items-center">
        <div
          class="image-wrapper left-round">
          <img
            class="image"
            src="@/assets/src/img/tanya2.jpeg"
            alt="Tanya">
        </div>
        <div class="content-text w-50 d-flex flex-column justify-content-start align-items-start">
          <span class="text-xl">
           Ось чому саме я:
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
  name: "AdvantagesBlock",
  data () {
    return {
      dataItems: [
        {
          text: "У мене індивідуальний підхід до кожного клієнта",
        },
        {
          text: "Максимально зацікавлена та ініціативна в проекті за який берусь",
        },
        {
          text: "Роблю все зі смаком та почуттям стилю",
        },
        {
          text: "Генерую свіжі ідеї, які зацікавлять потенційних клієнтів та підвищать охоплення",
        },
        {
          text: "Продаватиму ваш продукт максимально ЕМОЦІЙНО та щиро!",
        },
        {
          text: "Мислю креативно та стратегічно.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/functions";

.representation {
  padding-bottom: 200px;

  .content-text {
    margin-right: toRem(130px);
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