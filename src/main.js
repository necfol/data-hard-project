import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerconfig from './router'
var $ = require('jquery')
window.jQuery = $
window.$ = $
Vue.use(VueResource)
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
