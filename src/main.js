import Vue from 'vue'
import VueRouter from 'vue-router'
import routerconfig from './router'
// import App from './App.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
// router.beforeEach(transition => {
//   var redirect = encodeURIComponent(transition.to.path)
//   transition.redirect('/signup')
// })
routerconfig(router)
var App = Vue.extend({})
router.start(App, 'body')
