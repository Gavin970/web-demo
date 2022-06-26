import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import VueRouter from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(VueRouter)
=======

Vue.config.productionTip = false
>>>>>>> efa5841df4c3ac1786828b19374b40963cec0e60

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})