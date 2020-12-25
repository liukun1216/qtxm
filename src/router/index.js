import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//用户模块
import Login from '@/views/Login.vue'
import Idex from '@/views/Idex.vue'
import Register from '@/views/Register.vue'
import Personal from '@/views/Personal.vue'
import user from '@/views/user.vue'
//管理员模块
import AdminLogin from '@/views/admin/Login.vue'
import Log from '@/views/admin/Log.vue'
import AdminShop from '@/views/admin/Shop.vue'

//店铺模块
import AddShop from '@/views/shop/addShop.vue'
import Shop from '@/views/shop/Shop.vue'
import ShopTest from '@/views/shop/test.vue'



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
    },,
    {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/Log',
      name: 'Log',
      component: Log
    },
    {
      path: '/AdminShop',
      name: 'AdminShop',
      component: AdminShop
    },{
      path: '/AddShop',
      name: 'AddShop',
      component: AddShop
    },{
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },{
      path: '/ShopTest',
      name: 'ShopTset',
      component: ShopTest
    }

  ]
})
