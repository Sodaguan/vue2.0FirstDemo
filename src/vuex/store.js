import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  // 一套模型包含
  modules: {
    orderList
  }
})
