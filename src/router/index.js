import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Detail from '../components/detail.vue'
import Analysis from '../components/analysis'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      redirect: '/datail/analysis',
      children: [
        {
          path: 'analysis',
          component: Analysis
        }
      ]
    }
  ]
})
