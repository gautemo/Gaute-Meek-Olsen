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
    }
  ]
})
