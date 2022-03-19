import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import notifications from '../views/notifications.vue'

const routes = [{
    path: '/',
    name: 'Notifications',
    component: notifications
  }, {
    path: '/seven',
    name: 'Home',
    component: () => import('../components/home.vue')
  }, {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/settings.vue')
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    // route level code-splitting
    // this generates a separate chunk (bookmarks.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "bookmarks" */ '../views/bookmarks.vue')
  }, {
    path: '/important',
    name: 'important',
    // route level code-splitting
    // this generates a separate chunk (important.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "important" */ '../views/important.vue')
  }, {
    path: '/notifications',
    name: 'notifications',
    // route level code-splitting
    // this generates a separate chunk (notifications.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "notifications" */ '../views/notifications.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router