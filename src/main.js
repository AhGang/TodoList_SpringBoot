import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import store from './store/index.js'
import axios from 'axios'
Vue.prototype.$axios = axios
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false

Vue.use(iView)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
