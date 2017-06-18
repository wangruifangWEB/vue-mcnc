// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Alert from './assets/js/alerTips.js'
Vue.use(Alert);
import 'reset.css'
import './assets/iconfont/iconfont.css'
import './assets/scss/common.scss'

Vue.config.productionTip = false
Vue.prototype.Axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
