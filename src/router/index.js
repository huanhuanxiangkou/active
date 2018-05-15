import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('@/components/component/home')), 'home');

const login = r => require.ensure([], () => r(require('@/components/page/Login')), 'login');

const register = r => require.ensure([], () => r(require('@/components/page/register')), 'register');

const index = r => require.ensure([], () => r(require('@/components/page/index')), 'index');

const special = r => require.ensure([], () => r(require('@/components/page/special')), 'special');

const specialList = r => require.ensure([], () => r(require('@/components/page/special-list')), 'specialList');

const myview = r => require.ensure([], () => r(require('@/components/page/mine/myview')), 'myview');

const detail = r => require.ensure([], () => r(require('@/components/page/activedetail')), 'activedetail');

const life = r => require.ensure([], () => r(require('@/components/page/life')), 'life');

const allActive = r => require.ensure([], () => r(require('@/components/page/allactive')), 'allactive');

const publish = r => require.ensure([], () => r(require('@/components/page/publish')), 'publish');

const person = r => require.ensure([], () => r(require('@/components/page/mine/personmessage')), 'personmessage');

const myactivity = r => require.ensure([], () => r(require('@/components/page/mine/myactivity')), 'myactivity');
const changepassword = r => require.ensure([], () => r(require('@/components/page/mine/changepassword')), 'changepassword');

const routes = [{
    path: '/special/list',
    name: 'speciallist',
    component: specialList
  },
  {
    path: '',
    name: '',
    component: home,
    children: [{
        path: '/login',
        name: 'login',
        component: login
      }, {
        path: '/register',
        name: 'register',
        component: register
      }, {
        path: '/',
        name: 'index',
        component: index
      }, {
        path: '/special',
        name: 'special',
        component: special
      }, {
        path: '/myview',
        name: 'myview',
        component: myview,
        children: [{
            path: '/myactivity',
            name: 'myactivity',
            component: myactivity
          },
          {
            path: '/person',
            name: 'person',
            component: person
          },
          {
            path: '/change',
            name: 'change',
            component: changepassword
          }
        ]
      }, {
        path: '/detail',
        name: 'detail',
        component: detail
      }, {
        path: '/life',
        name: 'life',
        component: life
      }, {
        path: '/allActive',
        name: ' allactive',
        component: allActive
      }, {
        path: '/publish',
        name: 'publish',
        meta: {
          requiresAuth: true,
        },
        component: publish
      },
    ]
  },
];

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let loginStatus = localStorage.getItem("ms_username");
    if (!loginStatus) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
