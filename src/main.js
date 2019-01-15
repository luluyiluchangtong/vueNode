import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/config"

import "./assets/SelfReset.css"
import "./assets/tachyons.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') // 手动挂载
// vm.$mount('app')

// new Vue({
//   el: "#app",
//   router,
//   store,
//   template: "<App/>", 
//   components: {
//     App
//   },                自动挂载，
// });