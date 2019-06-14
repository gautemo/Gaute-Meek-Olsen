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
      path: '/talks',
      name: 'talks',
      component: () => import('./views/Talks.vue')
    },
    {
      path: '/dev-blog',
      name: 'dev',
      component: () => import('./views/Dev.vue')
    },
    {
      path: '/dev-blog/workbox-in-vue',
      component: () => import('./views/dev/2018-11-10ServiceWorkerVue.vue')
    },
    {
      path: '/dev-blog/script-in-vue',
      component: () => import('./views/dev/2018-11-14ScriptInVue.vue')
    },
    {
      path: '/dev-blog/cursor-image',
      component: () => import('./views/dev/2018-11-15ImageCursor.vue')
    },
    {
      path: '/dev-blog/npm-publish',
      component: () => import('./views/dev/2018-11-16PublishLibrary.vue')
    },
    {
      path: '/dev-blog/intro-firestore',
      component: () => import('./views/dev/2018-11-17IntroFirestore.vue')
    },
    {
      path: '/dev-blog/firestore-security',
      component: () => import('./views/dev/2018-11-25FirestoreSecurity.vue')
    },
    {
      path: '/dev-blog/gpgs-hide-player',
      component: () => import('./views/dev/2019-01-19GooglePlayGamesApi.vue')
    },
    {
      path: '/dev-blog/css-variables',
      component: () => import('./views/dev/2019-02-03CSSVariables.vue')
    },
    {
      path: '/dev-blog/node-express-cors',
      component: () => import('./views/dev/2019-03-31NodeExpressCors.vue')
    },
    {
      path: '/dev-blog/location-firebase-function',
      component: () => import('./views/dev/2019-04-19FirebaseFunctionsLocation.vue')
    },
    {
      path: '/dev-blog/hosting-website',
      component: () => import('./views/dev/2019-06-14HostingWebsite.vue')
    },
    {
      path: '/travel-blog',
      name: 'travel',
      component: () => import('./views/Travel.vue')
    },
    {
      path: '/travel-blog/im-travelling',
      component: () => import('./views/travel/2018-09-06TravelPlan.vue')
    },
    {
      path: '/travel-blog/pack-list',
      component: () => import('./views/travel/2018-09-07PackList.vue')
    },
    {
      path: '/travel-blog/moscow',
      component: () => import('./views/travel/2018-09-08ToughStart.vue')
    },
    {
      path: '/travel-blog/train',
      component: () => import('./views/travel/2018-09-09Train.vue')
    },
    {
      path: '/travel-blog/towards-time',
      component: () => import('./views/travel/2018-09-11TowardsTime.vue')
    },
    {
      path: '/travel-blog/novosibirsk',
      component: () => import('./views/travel/2018-09-12Novosibirsk.vue')
    },
    {
      path: '/travel-blog/shift-in-scenery',
      component: () => import('./views/travel/2018-09-13Train2.vue')
    },
    {
      path: '/travel-blog/lake-baikal',
      component: () => import('./views/travel/2018-09-14Irkutsk.vue')
    },
    {
      path: '/travel-blog/chineese-train',
      component: () => import('./views/travel/2018-09-16Train3.vue')
    },
    {
      path: '/travel-blog/ger-camp',
      component: () => import('./views/travel/2018-09-19Wild.vue')
    },
    {
      path: '/travel-blog/ulaanbaatar',
      component: () => import('./views/travel/2018-09-20Ulaanbaatar.vue')
    },
    {
      path: '/travel-blog/pink-train',
      component: () => import('./views/travel/2018-09-21Train4.vue')
    },
    {
      path: '/travel-blog/beijing-part-one',
      component: () => import('./views/travel/2018-09-23Beijing1.vue')
    },
    {
      path: '/travel-blog/great-wall',
      component: () => import('./views/travel/2018-09-25GreatWall.vue')
    },
    {
      path: '/travel-blog/beijing-part-two',
      component: () => import('./views/travel/2018-09-26Beijing2.vue')
    },
    {
      path: '/travel-blog/storm',
      component: () => import('./views/travel/2018-09-29Storm.vue')
    },
    {
      path: '/travel-blog/ishigaki',
      component: () => import('./views/travel/2018-10-02Ishigaki.vue')
    },
    {
      path: '/travel-blog/osaka',
      component: () => import('./views/travel/2018-10-03Osaka.vue')
    },
    {
      path: '/travel-blog/nara',
      component: () => import('./views/travel/2018-10-05Nara.vue')
    },
    {
      path: '/travel-blog/kyoto',
      component: () => import('./views/travel/2018-10-08Kyoto.vue')
    },
    {
      path: '/travel-blog/tokyo-one',
      component: () => import('./views/travel/2018-10-09Tokyo1.vue')
    },
    {
      path: '/travel-blog/tokyo-two',
      component: () => import('./views/travel/2018-10-12Tokyo2.vue')
    },
    {
      path: '/travel-blog/home',
      component: () => import('./views/travel/2018-10-15Home.vue')
    },
    {
      path: '/travel-blog/prague',
      component: () => import('./views/travel/2018-10-30Prague.vue')
    }
  ]
})
