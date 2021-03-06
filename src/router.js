var App = require('./App.vue')
var home = require('./views/home.vue')
var realmonitor = require('./views/realmonitor.vue')
var devices = require('./views/devices.vue')
var remark = require('./views/remark.vue')
var signup = require('./views/signup.vue')
var signin = require('./views/signin.vue')
export default function (router) {
  router.map({
    '/': {
      name: 'app',
      component: App,
      subRoutes: {
        '/': {
          name: 'home',
          component: home
        },
        '/home': {
          name: 'home',
          component: home
        },
        '/realmonitor': {
          name: 'realmonitor',
          component: realmonitor
        },
        '/devices': {
          name: 'devices',
          component: devices
        },
        '/remark': {
          name: 'remark',
          component: remark
        }
      }
    },
    '/signup': {
      name: 'signup',
      component: signup
    },
    '/signin': {
      name: 'signin',
      component: signin
    }
  })
}
