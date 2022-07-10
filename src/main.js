import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import "@/styles/global.less"
import "@/mock"
import "@/directives"
 
store.dispatch("setting/loadSetting")

 
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
