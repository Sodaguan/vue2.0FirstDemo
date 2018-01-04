import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

// import 'element-ui/lib/theme-chalk/index.css'
import { DatePicker, Pagination } from 'element-ui'

Vue.use(DatePicker)
Vue.use(Pagination)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
