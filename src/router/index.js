import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login.vue'
import Idex from '@/views/Idex.vue'
import Register from '@/views/Register.vue'
import Personal from '@/views/Personal.vue'
import user from '@/views/user.vue'
import Shopping from '@/views/Shopping.vue'
import address from '@/views/address.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Idex',
      component: Idex
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Idex',
      name: 'Idex',
      component: Idex
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    }, {
      path: '/address',
      name: 'address',
      component: address
    },


  ]
})
