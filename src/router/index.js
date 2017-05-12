import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Button from './button'
import Card from './card'
import Nav from './navigation'
import Anima from './anima'
import Hint from './hint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
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
    },
    {
      path: '/hint',
      component: Hint
    }
  ]
})
