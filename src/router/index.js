import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Button from '@/components/Button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button
    }
  ]
})
