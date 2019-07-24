import Vue from 'vue'
import App from './App.vue'
//import iView from 'iview';
import store from './store/index.js'
import axios from 'axios'
import router from './router'
Vue.prototype.$axios = axios
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
//Vue.use(iView)
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.use(router)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
