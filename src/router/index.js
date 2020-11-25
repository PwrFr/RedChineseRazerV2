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
    path: '/Razer Neoprene Sleeve V2 - For 13.3” Notebooks',
    name: 'Razer Neoprene Sleeve V2 - For 13.3” Notebooks',
    component: () => import('../views/access1.vue')
  },
  {
    path: '/Razer Protective Sleeve V2 - For 13.3" Notebooks',
    name: 'Razer Protective Sleeve V2 - For 13.3" Notebooks',
    component: () => import('../views/access2.vue')
  },
  {
    path: '/Razer Protective Sleeve V2 - For 17.3" Notebooks',
    name: 'Razer Protective Sleeve V2 - For 17.3" Notebooks',
    component: () => import('../views/access3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
