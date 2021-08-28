<template>
<section class="smm-advantages">
  <div class="container">
    <div class="content">
      <h2 class="text-xl text-center mb-5">
        Що дає бізнесу SMM?
      </h2>
      <div class="content-info">
        <div
            v-for="item in dataItems"
            :key="item.title"
            class="d-flex flex-column justify-content-start align-items-start item">
            <span class="text-lg">
                {{ item.title }}
            </span>
            <span class="line" />
            <span class="text-base font-secondary mt-2">
              {{ item.text }}
            </span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "SmmAdvantages",
  data () {
    return {
      dataItems: [
        {
          title: "Ідентичність",
          text: "Створимо унікальний образ та асоціації твого бренду. Донесемо до клієнтів цінності та погляди бренду",
        },
        {
          title: "Впізнаваність",
          text: "Зробимо так, щоб ваш продукт впізнавали за індивідуальними ознаками. Через страх зробити неправильний вибір, споживач обирає відомі торгові марки, про які десь чув, читав чи бачив рекламу",
        },
        {
          title: "Збільшення довіри",
          text: "Клієнт схильний беззастережно довіряти компаніям з високим рівнем обізнаності про бренд. Це забезпечує перевагу серед інших товарів. Чим більше знань про товар на ринку, тим вища ймовірність, що споживач згадає торгову марку в момент прийняття рішення купувати чи ні.",
        },
        {
          title: "Поліпшення комунікації",
          text: "Контакт з аудиторією до прийняття рішення про покупку. Він проявляється як за допомогою постів, так і у відповідях в коментарях або прямих ефірах. Це також один із шляхів досягнення лояльності.",
        },
        {
          title: "Ріст продажів",
          text: "Лише комплексна та регулярна робота усіх процесів SMM гарантує ріст продажів!",
        },
        {
          title: "Швидкий старт",
          text: "В останні роки спостерігається все більший відмова від телевізора на користь інтернету, а газети і журнали з оголошеннями взагалі майже ніхто вже не читає. Банер, що раптово вигулькнув у facebook чи instagram, часом може стати набагато ефективніше рекламного ролика на великому телеканалі. Саме тому, реклама в соцмережах зараз must have!",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/vars";

.smm-advantages {
  padding: 200px 0;

  @media (max-width: 768px) {
    padding: 100px 0;
  }
  .content {
    .content-info {
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 100px;
      row-gap: 76px;
      justify-items: self-end;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .line {
        width: 100%;
        height: 1px;
        border-bottom: 2px solid $accent;
      }
    }
  }
}
</style>
