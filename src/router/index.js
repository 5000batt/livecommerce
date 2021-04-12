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
  // {
  //   path: '/Detail',
  //   name: 'Detail',
  //   component: () => import('../views/Detail.vue')
  // },
  {
    path: '/Detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    props: true,
  },
  {
    path: '/DongbuMarket',
    name: 'DongbuMarket',
    component: () => import('../views/DongbuMarket.vue')
  },
  {
    path: '/SagajungMarket',
    name: 'SagajungMarket',
    component: () => import('../views/SagajungMarket.vue')
  },
  {
    path: '/MyeonmokMarket',
    name: 'MyeonmokMarket',
    component: () => import('../views/MyeonmokMarket.vue')
  },
  {
    path: '/SangbongMarket',
    name: 'SangbongMarket',
    component: () => import('../views/SangbongMarket.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
