import Vue from 'vue'
import App from './App.vue'

import Class from '@/01/Class.vue'
import Index from '@/01/Index.vue'
import My from '@/01/My.vue'
import Orders from '@/01/Orders.vue'
import NotFound from '@/01/NotFound.vue'

import Life from '@/02/Life.vue'
import News from '@/02/News.vue'
import Sports from '@/02/Sports.vue'

import InternationalS from '@/02/0202/InternationalS.vue'
import NationalS from '@/02/0202/NationalS.vue'
import SIndex from '@/02/0202/SIndex.vue'

import Sing from '@/02/0202/020202/Sing.vue'
import Dance from '@/02/0202/020202/Dance.vue'
import Basketball from '@/02/0202/020202/Basketball.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'index', component: Index },
  { path: '/class', component: Class },
  { path: '/orders', component: Orders },
  { path: '/my', component: My },
  { path: '/life', component: Life },
  { path: '/news', component: News },
  {
    path: '/sports', component: Sports, children: [
      {
        path: 'internationals',
        component: InternationalS
      },
      {
        path: 'nationals',
        component: NationalS,
      },
      {
        path: 'sindex',
        component: SIndex,
        children:[
          {
            path:'sing',
            component:Sing,
          },
          {
            path:'dance',
            component: Dance,
          },
          {
            path:'basketball',
            component:Basketball,
          }
        ]
      }
    ]
  },
  { path: '*', component: NotFound }
]

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  // mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
