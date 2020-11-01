import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/api'
import store from '@/store'

Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav', TypeNav)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
