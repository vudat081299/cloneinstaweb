import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HelloWorld from '../components/HelloWorld.vue'
import Feed from '../views/Feed.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta: { requiresLogin: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && store.state.didLogin === false) {
    // You can use store variable here to access globalError or commit mutation
    next('/')
  } else {
    next()
  }
})

export default router
