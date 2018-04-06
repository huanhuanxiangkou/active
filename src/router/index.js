import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const login = r => require.ensure([], () => r(require('@/components/page/Login')), 'login');

const register = r => require.ensure([], () => r(require('@/components/page/register')), 'register');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
