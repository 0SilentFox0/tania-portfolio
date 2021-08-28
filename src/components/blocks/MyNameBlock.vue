<template>
  <section class="my-name">
    <div class="container">
      <div class="content position-relative d-flex flex-column">
        <span class="text-xxl w-full text-left text-uppercase name-animation">
          TANIA
        </span>
        <span class="text-right text-xxl w-full text-uppercase name-animation-reverse">
          URSAKII
        </span>
        <div class="icon-wrapper">
          <img
            svg-inline
            class="icon"
            src="@/assets/src/icons/brush.svg"
            alt="brush"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyNameBlock",
}
</script>

<style lang="scss" scoped>
//DELETE THIS
@import "../../assets/scss/vars";
@import "../../assets/scss/functions";
.my-name {
  color: $text-color;
  padding: 20px;

  @media (min-width: 1024px) {
    padding: 60px;
  }

  @media (min-width: 1439px) {
    padding: 150px;
  }

  span {
    line-height: 100%;
    letter-spacing: 0.14em;
  }

  .icon-wrapper {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: -1;
    animation: fade-animation 1.5s linear;
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .name-animation {
    animation: name-animation .5s linear;
  }

  .name-animation-reverse {
    animation: name-animation-reverse .5s linear;
  }

  @keyframes name-animation {
    0% {
      transform: translateX(-500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes name-animation-reverse {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fade-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
