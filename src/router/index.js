import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Button from './button'
import Card from './card'
import Nav from './navigation'
import NavFixed1 from './navigation-fixed-1'
import NavFixed2 from './navigation-fixed-2'
import Anima from './anima'
import Hint from './hint'
import Scroller from './scroller'

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
      path: '/navigation-fixed-1',
      component: NavFixed1
    },
    {
      path: '/navigation-fixed-2',
      component: NavFixed2
    },
    {
      path: '/anima',
      component: Anima
    },
    {
      path: '/hint',
      component: Hint
    },
    {
      path: '/scroller',
      component: Scroller
    }
  ]
})
