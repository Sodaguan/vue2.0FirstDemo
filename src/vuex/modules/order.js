import getOrderList from '../../api/orderList'

export default {
  // 用于存放数据
  state: {
    orderList: [],
    params: {}
  },
  // 用来获取和计算state
  getters: {
    getOrderList (state) {
      return state.orderList
    }
  },
  // 异步操作,
  actions: {
    fetchOrderList ({commit, state}) {
      getOrderList(state.params)
        .then((res) => {
          commit('updateOrderList', res.list)
          // state.orderList = res.list
          // state.total = res.total
        })
    }
  },
  // 同步操作,更改state的唯一方法(重点)
  mutations: {
    updateOrderList (state, payload) {
      state.orderList = payload
    },
    updateParams (state, {key, val}) {
      state.params[key] = val
      console.log(state)
    }
  }
}
