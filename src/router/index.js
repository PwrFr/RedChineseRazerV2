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
  },
  {
    path: '/access1',
    name: 'access1',
    component: () => import('../views/access1.vue')
  },
  {
    path: '/access2',
    name: 'access2',
    component: () => import('../views/access2.vue')
  },
  {
    path: '/access3',
    name: 'access3',
    component: () => import('../views/access3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
