// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui' //新添加1，导入element-ui
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import App from './App';之前

import axios from '@/api/http'
import VueAxios from 'vue-axios'
process.env.MOCK && require('@/mock')

import App from './App'
import router from './router'


//引入markdown编辑器


Vue.config.productionTip = false
Vue.use(ElementUI)   //新添加3  vue使用element-ui
Vue.use(VueAxios,axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
