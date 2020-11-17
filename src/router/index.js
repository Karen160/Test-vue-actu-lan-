import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/views/App.vue'
import Home from '@/views/App.vue'
import Table from '@/views/Table.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: HelloWorld,
    Home

     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
