import Vue from 'vue'
import App from './App.vue'
import './assets/TTTravels-Bold.css'
import './assets/TTTravels-DemiBold.css'
import './assets/TTTravels-Light.css'
import './assets/TTTravels-Medium.css'
import './assets/TTTravels-Regular.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
