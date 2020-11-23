import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 显示生产模式的信息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
