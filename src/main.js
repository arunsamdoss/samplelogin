import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookies from 'cookies'
import vuecookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(cookies, vuecookies)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
