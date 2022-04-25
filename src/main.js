import Vue from 'vue'

import('@/assets/scss/main.scss')

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll, {
  duration: 700,
  updateHistory: false,
  offset: -50,
})

import 'swiper/swiper-bundle.css'
import { Autoplay, Mousewheel, Pagination, Navigation, Swiper as SwiperClass } from 'swiper'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))

Vue.config.productionTip = false
import App from './App.vue'
new Vue({
  render: h => h(App),
}).$mount('#app')
