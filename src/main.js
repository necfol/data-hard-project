import Vue from 'vue'
import VueRouter from 'vue-router'
import routerconfig from './router'
import App from './App.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
routerconfig(router)
router.start(App, 'body')
