import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import Works from '@/views/Works.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works',
    name: 'works',
    // component: Works,
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue'),
    // children: [
    //   {
    //     path: ':id',
    //     name: 'works',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
    // ]
  },
  {
    path: '/works/:id',
    name: 'works_detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WorksDetail.vue')
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
