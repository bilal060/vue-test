import Vue from 'vue'
import VueRouter from 'vue-router'

import TablePage from '../views/TablePage.vue'
import ChartPage from '../views/ChartPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tablepage',
    component: TablePage
  },
  {
    path: '/tablepage',
    name: 'tablepage',
    component: TablePage
  },
  {
    path: '/chartpage',
    name: 'chartpage',
    component: ChartPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
