import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import toast from 'common/toast/index'
import FastClick from 'fastclick'

Vue.use(toast);
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
FastClick.attach(document.body)
import router from '@/router/index.js'
new Vue({
  render: h => h(App),
  router,
  store,
  toast,
}).$mount('#app')

