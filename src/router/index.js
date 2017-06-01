import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import login from '@/components/login'
import home from '@/components/home'

Vue.use(Router)
Vue.use(Mint)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
