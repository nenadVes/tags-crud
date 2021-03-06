import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VModal from 'vue-js-modal'
import VeeValidate from 'vee-validate'

Vue.use(VModal)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
