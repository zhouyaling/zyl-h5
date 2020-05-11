import Vue from 'vue'
// import '@/permission' // permission control
import '@/styles/index.scss' // global css
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://smartwx-api.tq-service.com/api/InputFace/'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
