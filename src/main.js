import '@babel/polyfill' 
import 'whatwg-fetch' 

import Vue from 'vue'
import App from './Components/App/App.vue'

import config from './../config'
import worker from './registerServiceWorker'

Vue.prototype.config = config // <- set config to global scope

Vue.prototype.history = () => {
    try {
        localStorage.getItem('check')
        return true
    }

    catch {
        return false
    }
}

/* (global) Currently selected language or fallback language (en). Needs to be a function, since it's reactive. No need for vuex there */
Vue.prototype.lang = () => {
    if(Vue.prototype.history()) return localStorage.getItem('lang') || config.app.fallback_lang

    else {
        return config.app.fallback_lang
    }
}

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')
