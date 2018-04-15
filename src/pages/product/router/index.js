import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product'
import Detail from '@/components/Detail'
import Buy from '@/components/Buy'
import VueResource from 'vue-resource'
import global_ from '@/components/Global'
import Contact from '@/components/Contact'
import OrderList from '@/components/OrderList'

Vue.use(Router)
Vue.use(VueResource)
Vue.prototype.GLOBAL = global_

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    }
  ]
})
