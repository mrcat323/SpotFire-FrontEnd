/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

const Home = resolve => { // использование lazy-loading, его лучше использовать, если страница много весит, этот способ ускоряет работу и улучшает оптимизацию
  require.ensure(['../views/Home.vue'], () => {
    resolve(require('../views/Home.vue'))
  })
}
const About = resolve => { // использование lazy-loading, его лучше использовать, если страница много весит, этот способ ускоряет работу и улучшает оптимизацию
  require.ensure(['../views/About.vue'], () => {
    resolve(require('../views/About.vue'))
  })
}
const Instructions = resolve => { // использование lazy-loading, его лучше использовать, если страница много весит, этот способ ускоряет работу и улучшает оптимизацию
  require.ensure(['../views/Instructions.vue'], () => {
    resolve(require('../views/Instructions.vue'))
  })
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
    //component: () => import(/* webpackChunkName: "locations" */ '../views/Instructions.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})
 
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
