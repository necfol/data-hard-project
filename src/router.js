var home = require('./views/home.vue')
var realmonitor = require('./views/realmonitor.vue')
var devices = require('./views/devices.vue')
var remark = require('./views/remark.vue')
export default function (router) {
  router.map({
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
  })
}
