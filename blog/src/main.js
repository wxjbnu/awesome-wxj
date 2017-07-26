// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ripple from 'vue-ripple-directive'
import './plug' //加载重写内容
Vue.config.productionTip = false
Vue.directive('ripple', Ripple);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
