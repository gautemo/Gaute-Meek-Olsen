import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
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
      path: '/dev-blog/:url',
      component: () => import(`./views/dev/DevBlog.vue`)
    },
    {
      path: '/today-i-learned',
      name: 'til',
      component: () => import('./views/TIL.vue')
    },
    {
      path: '/today-i-learned/:url',
      component: () => import(`./views/til/TILBlog.vue`)
    },
    {
      path: '/travel-blog',
      name: 'travel',
      component: () => import('./views/Travel.vue')
    },
    {
      path: '/travel-blog/:url',
      component: () => import('./views/travel/TravelBlog.vue')
    },
    {
      path: '/urls',
      component: () => import('./views/Urls.vue')
    },
    {
      path: '/*',
      name: '404',
      component: () => import('./views/NotFound.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {
  if(!to.path.includes('travel-blog')){
    document.querySelector('link[rel=canonical]').href = `https://gaute.dev${to.path}`
  } else {
    document.querySelector('link[rel=canonical]').href = location.href
  }
  next()
})

export default router