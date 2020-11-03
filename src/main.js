import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// import '@/api'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav';
import SliderLoop from '@/components/SliderLoop'
Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop',SliderLoop)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
