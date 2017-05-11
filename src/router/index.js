import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Card from './card'
import Nav from './navigation'
import Anima from './anima'

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
    },
    {
      path: '/navigation',
      component: Nav
    },
    {
      path: '/anima',
      component: Anima
    }
  ]
})
