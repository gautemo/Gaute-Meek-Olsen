import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'myProjects',
      component: () => import('./views/MyProjects.vue')
    },
    {
      path: '/dev-blog',
      name: 'dev',
      component: () => import('./views/Dev.vue')
    },
    {
      path: '/travel-blog',
      name: 'travel',
      component: () => import('./views/Travel.vue')
    },
    {
      path: '/travel-blog/im-travelling',
      component: () => import('./components/travel/2018-09-06TravelPlan.vue')
    },
    {
      path: '/travel-blog/pack-list',
      component: () => import('./components/travel/2018-09-07PackList.vue')
    },
    {
      path: '/travel-blog/moscow',
      component: () => import('./components/travel/2018-09-08ToughStart.vue')
    },
    {
      path: '/travel-blog/train',
      component: () => import('./components/travel/2018-09-09Train.vue')
    },
    {
      path: '/travel-blog/towards-time',
      component: () => import('./components/travel/2018-09-11TowardsTime.vue')
    },
    {
      path: '/travel-blog/novosibirsk',
      component: () => import('./components/travel/2018-09-12Novosibirsk.vue')
    },
    {
      path: '/travel-blog/shift-in-scenery',
      component: () => import('./components/travel/2018-09-13Train2.vue')
    }
  ]
})
