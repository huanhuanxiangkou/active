import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('@/components/component/home')), 'home');

const login = r => require.ensure([], () => r(require('@/components/page/Login')), 'login');

const register = r => require.ensure([], () => r(require('@/components/page/register')), 'register');

const index = r => require.ensure([], () => r(require('@/components/page/index')), 'index');

const myview = r => require.ensure([], () => r(require('@/components/page/mine/myview')), 'myview');

export default new Router({
  routes: [
    {
      path: '',
      name: '',
      component: home,
      children: [
        {
          path: '/',
          name: 'login',
          component: login
        }, {
          path: '/register',
          name: 'register',
          component: register
        }, {
          path: '/index',
          name: 'index',
          component: index
        }, {
          path: '/myview',
          name: 'myview',
          component: myview
        }
      ]
    },    
  ]
})
