<template>
<section
    id="contacts"
    class="footer">
    <div class="container">
        <div class="content d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center pb-5">
                <h1 class="text-2xl w-50 text">
                    Обговоримо проект?
                </h1>
                <img
                  svg-inline
                  class="w-50"
                  src="@/assets/src/icons/brush.svg"
                  alt="brush"
                />
            </div>
            <div class="w-100 d-flex justify-content-between align-items-center mt-5 font-secondary">
                <a
                    v-for="(social, i) in socialLinks"
                    :key="social.link + i"
                    class="d-flex justify-content-center align-items-center link"
                    target="_blank"
                    :href="social.link">
                    <span class="text-base">
                        {{ social.text }}
                    </span>
                    <img
                      svg-inline
                      class="icon"
                      src="@/assets/src/icons/arrow.svg"
                      alt="arrow">
                </a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "MainFooter",
    data () {
        return {
            socialLinks: [
                {
                    text: 'Telegram',
                    link: 'https://t.me/ursakii_tania',
                },
                {
                    text: 'Instagram',
                    link: 'https://www.instagram.com/ursakii_tania/',
                },
                {
                    text: 'Email',
                    link: 'mailto:taniaursakii@gmail.com',
                },
                {
                    text: '+380 (66) 1026162',
                    link: 'tel:+380661026162',
                },
              {
                text: 'Tik Tok',
                link: 'https://vm.tiktok.com/ZMRNqDbc1/',
              },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.footer {
    padding: 100px 0;
    background: $secondary;

  .text {
    z-index: 10;
  }

    .link {
        &:hover {
            .icon {
                transform: rotate(0deg);
                path {
                    stroke: $text-color;
                }
            }
        }
        span {
            margin-right: 12px;

        }
    }

    .icon {
        width: 27px;
        height: 27px;
        transform: rotate(-45deg);
        transition: .3s;
    }
}
</style>
