import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Card from './card'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/card',
      component: Card
    }
  ]
})
