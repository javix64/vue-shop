import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//firebase
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
Vue.use(firebase)
Vue.use(firestorePlugin)

//font awesome
import '@fortawesome/fontawesome-free/js/all.js'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')