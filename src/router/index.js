import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Detail from '../pages/detail'
import Count from '../pages/detail/count'
import Forecast from '../pages/detail/forecast'
import Analysis from '../pages/detail/analysis'
import Publish from '../pages/detail/publish'

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
