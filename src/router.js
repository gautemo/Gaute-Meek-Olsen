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
    },
    {
      path: '/travel-blog/lake-baikal',
      component: () => import('./components/travel/2018-09-14Irkutsk.vue')
    },
    {
      path: '/travel-blog/chineese-train',
      component: () => import('./components/travel/2018-09-16Train3.vue')
    },
    {
      path: '/travel-blog/ger-camp',
      component: () => import('./components/travel/2018-09-19Wild.vue')
    },
    {
      path: '/travel-blog/ulaanbaatar',
      component: () => import('./components/travel/2018-09-20Ulaanbaatar.vue')
    },
    {
      path: '/travel-blog/pink-train',
      component: () => import('./components/travel/2018-09-21Train4.vue')
    },
    {
      path: '/travel-blog/beijing-part-one',
      component: () => import('./components/travel/2018-09-23Beijing1.vue')
    },
    {
      path: '/travel-blog/great-wall',
      component: () => import('./components/travel/2018-09-25GreatWall.vue')
    },
    {
      path: '/travel-blog/beijing-part-two',
      component: () => import('./components/travel/2018-09-26Beijing2.vue')
    },
    {
      path: '/travel-blog/storm',
      component: () => import('./components/travel/2018-09-29Storm.vue')
    },
    {
      path: '/travel-blog/ishigaki',
      component: () => import('./components/travel/2018-10-02Ishigaki.vue')
    },
    {
      path: '/travel-blog/osaka',
      component: () => import('./components/travel/2018-10-03Osaka.vue')
    },
    {
      path: '/travel-blog/nara',
      component: () => import('./components/travel/2018-10-05Nara.vue')
    },
    {
      path: '/travel-blog/kyoto',
      component: () => import('./components/travel/2018-10-08Kyoto.vue')
    },
    {
      path: '/travel-blog/tokyo-one',
      component: () => import('./components/travel/2018-10-09Tokyo1.vue')
    },
    {
      path: '/travel-blog/tokyo-two',
      component: () => import('./components/travel/2018-10-12Tokyo2.vue')
    },
    {
      path: '/travel-blog/home',
      component: () => import('./components/travel/2018-10-15Home.vue')
    },
    {
      path: '/travel-blog/prague',
      component: () => import('./components/travel/2018-10-30Prague.vue')
    }
  ]
})
