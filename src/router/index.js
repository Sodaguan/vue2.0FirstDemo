import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Detail from '../components/detail.vue'
import Count from '../components/count'
import Forecast from '../components/forecast'
import Analysis from '../components/analysis.vue'
import Publish from '../components/publish'

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
      redirect: '/detail/analysis',
      children: [
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    }
  ]
})
