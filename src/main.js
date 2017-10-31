import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import './style/style.css'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
//import './config/rem'
import FastClick from 'fastclick'
import {setWechatTitle} from './config/mUtils'

Vue.use(Mint);

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})

router.afterEach((transition) => {
    let title = transition.meta.title;
    setWechatTitle(title);
})

new Vue({
	router,
	store,
}).$mount('#app')
