var fuck = require('./views/fuck')
var app = require('./App.vue')
export default function (router) {
  router.map({
    '/home': {
      name: 'home',
      component: app
    },
    '/fuck': {
      name: 'fuck',
      component: fuck
    }
  })
  router.beforeEach(function (transition) {
    console.log(transition)
    transition.next()
  })
}
