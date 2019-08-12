import Vue from 'vue'
import App from './App.vue'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import routes from './routes'
import blur from './directives/blur'
import msToMm from './filters/ms-to-mm'
import store from './store'
Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
