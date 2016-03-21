var home = require('./views/home.vue')

export default function (router) {
  router.map({
    '/home': {
      name: 'home',
      component: home
    },
    '/fuck': {
      name: 'home',
      component: home
    }
  })
}
