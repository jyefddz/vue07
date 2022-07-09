import Vue from 'vue'
import App from './App.vue'

import Class from '@/01/Class.vue'
import Index from '@/01/Index.vue'
import My from '@/01/My.vue'
import Orders from '@/01/Orders.vue'
import NotFound from '@/01/NotFound.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index',name:'index', component: Index },
  { path: '/class', component: Class },
  { path: '/orders', component: Orders },
  { path: '/my', component: My },
  { path: '*', component: NotFound }
]

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
