import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gaminglabtop',
    name: 'gaminglabtop',
    component: () => import('../views/gamingLabtop.vue')
  },
  {
    path: '/egpu',
    name: 'egpu',
    component: () => import('../views/EgpuPage.vue')
  },
  {
    path: '/pcaccess',
    name: 'pcaccess',
    component: () => import('../views/HeaderAccess.vue')
  },
  {
    path: '/casespage',
    name: 'casespage',
    component: () => import('../views/CasesPage.vue')
  }
  ,
  {
    path: '/monitor',
    name: 'monitor',
    component: () => import('../views/MonitorPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
