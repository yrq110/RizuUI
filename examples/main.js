import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import RizuUI from '../src/index'
Vue.use(VueRouter)
Vue.use(RizuUI)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: require('./routers/home.vue')
    },
    {
      path: '/button',
      component: require('./routers/button.vue')
    },
    {
      path: '/card',
      component: require('./routers/card.vue')
    },
    {
      path: '/navigation',
      component: require('./routers/navigation.vue')
    },
    {
      path: '/navigation-fixed-1',
      component: require('./routers/navigation-fixed-1.vue')
    },
    {
      path: '/navigation-fixed-2',
      component: require('./routers/navigation-fixed-2.vue')
    },
    {
      path: '/anima',
      component: require('./routers/anima.vue')
    },
    {
      path: '/hint',
      component: require('./routers/hint.vue')
    },
    {
      path: '/scroller',
      component: require('./routers/scroller.vue')
    },
    {
      path: '/radio',
      component: require('./routers/radio.vue')
    },
    {
      path: '/checkbox',
      component: require('./routers/checkbox.vue')
    }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
