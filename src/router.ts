import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login/login.vue')
    },
    {
      path: '/filtroPracticantes',
      name: 'filtroPracticantes',
      component: () => import(/* webpackChunkName: "about" */ './views/Practicantes/filtroPracticantes.vue')
    },
    {
      path: '/registrarPracticantes',
      name: 'registrarPracticantes',
      component: () => import(/* webpackChunkName: "about" */ './views/Practicantes/registrarPracticantes.vue')
    }
  ]
})
