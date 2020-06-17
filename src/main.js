import Vue from 'vue'
// import { Button,Select,Menu,MenuItem} from 'element-ui'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Menu)
// Vue.use(MenuItem)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
