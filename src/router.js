import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: routes.map(route => ({
    path: route.path,
    name: route.name,
    component: route.component,
    beforeEnter (to, from, next) {
      store.dispatch('common/updateLayout', route.layout)
      next()
    }
  }))
})
