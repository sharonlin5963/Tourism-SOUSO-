import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scenicSpot',
    name: 'ScenicSpot',
    // route level code-splitting
    // this generates a separate chunk (scenicSpot.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "scenicSpot" */ '../views/ScenicSpot.vue')
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    // route level code-splitting
    // this generates a separate chunk (restaurant.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "restaurant" */ '../views/Restaurant.vue')
  },
  {
    path: '/hotel',
    name: 'Hotel',
    // route level code-splitting
    // this generates a separate chunk (hotel.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hotel" */ '../views/Hotel.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    // route level code-splitting
    // this generates a separate chunk (activity.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "activity" */ '../views/Activity.vue')
  },
  {
    path: '/itinerary',
    name: 'Itinerary',
    // route level code-splitting
    // this generates a separate chunk (itinerary.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itinerary" */ '../views/Itinerary.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
