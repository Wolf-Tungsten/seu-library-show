import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'welcome',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // },
  // 主页
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName*/'../views/Home.vue')
  },
  {
    path: '/page-1',
    name: 'page-1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName*/'../views/show/Page-1.vue')
  },
  {
    path: '/page-2',
    name: 'page-2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName*/'../views/show/Page-2.vue')
  },
  {
    path: '/page-3',
    name: 'page-3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName*/'../views/show/Page-3.vue')
  },
  {
    path: '/page-4',
    name: 'page-4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName*/'../views/show/Page-4.vue')
  },
  {
    path: '/page-5',
    name: 'page-5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName*/'../views/show/Page-5.vue')
  },
  {
    path: '/page-6',
    name: 'page-6',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName*/'../views/show/Page-6.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
