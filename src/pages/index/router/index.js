import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import global_ from '@/components/Global'

Vue.use(Router)
Vue.use(VueResource)
Vue.prototype.GLOBAL = global_

export default new Router({
  routes: []
})
