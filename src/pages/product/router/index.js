import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
