import Vue from 'vue'
import VueRouter from 'vue-router'
import routerconfig from './router'
import App from './App.vue'
  /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: {
//     App
//   }
// })
Vue.use(VueRouter)
const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
routerconfig(router)
router.start(App, 'app')
  // fuck
  // router.map({
  //   '/home': {
  //     component: home,
  //     subRoutes: {
  //       '/': {
  //         component: {
  //           template: '<p>这是主页的默认子路由</p>'
  //         }
  //       }
  //     }
  //   }
  // })
  // var App = Vue.extend({})
  // // 现在我们可以启动应用了！
  // // 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
  // router.start(App, '#app')
