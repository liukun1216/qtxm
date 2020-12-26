import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//用户模块
import Login from '@/views/Login.vue'
import Idex from '@/views/Idex.vue'
import Register from '@/views/Register.vue'
import Personal from '@/views/Personal.vue'


//管理员主页嵌套
import ookk from '@/views/ookk.vue'
import test from '@/views/test.vue'
import AppMain from '@/views/AppMain.vue'
import User from '@/views/sys/User.vue'
import Centre from '@/views/sys/Centre.vue'
import Change from '@/views/sys/Change.vue'
import rili from '@/views/sys/rili.vue'
import bz from '@/views/sys/bz.vue'
import img from '@/views/sys/img.vue'
import addprod from '@/views/sys/addprod.vue'
import AdminUser from '@/views/admin/User.vue'





import user from '@/views/user.vue'

import Shopping from '@/views/Shopping.vue'
import address from '@/views/address.vue'

//管理员模块
import AdminLogin from '@/views/admin/Login.vue'
import Log from '@/views/admin/Log.vue'
import AdminShop from '@/views/admin/Shop.vue'
import dshShop from '@/views/admin/dshShop.vue'


//店铺模块
import AddShop from '@/views/shop/addShop.vue'
import Shop from '@/views/shop/Shop.vue'
import ShopTest from '@/views/shop/test.vue'
import spxq from '@/views/shop/spxq.vue'



Vue.use(Router)

export default new Router({
      routes: [{
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
          path: '/AdminLogin',
          name: 'AdminLogin',
          component: AdminLogin
        },
        {
          path: '/Shopping',
          name: 'Shopping',
          component: Shopping
        },
        {
          path: '/address',
          name: 'address',
          component: address
        },
        {
          path: '/AdminShop',
          name: 'AdminShop',
          component: AdminShop
        },{
          path: '/dshShop',
          name: 'dshShop',
          component: dshShop
        },{
          path: '/AddShop',
          name: 'AddShop',
          component: AddShop
        },{
          path: '/Shop',
          name: 'Shop',
          component: Shop
        },{
          path: '/AdminUser',
          name:'AdminUser',
          component: AdminUser
        },
           {
            path: '/AppMain',
            name: 'AppMain',
            component: AppMain,
          },
          {
            path: '/idex',
            name: 'Idex',
            component: Idex
          },
          {
            path: '/Login',
            name: 'Login',
            component: Login
          },
          {
            path: '/',
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
            path: '/AdminLogin',
            name: 'AdminLogin',
            component: AdminLogin
          },
          {
            path: '/Shopping',
            name: 'Shopping',
            component: Shopping
          },
          {
            path: '/address',
            name: 'address',
            component: address
          },
          {
            path: '/Log',
            name: 'Log',
            component: Log
          },
          {
            path: '/ShopTest',
            name: 'ShopTset',
            component: ShopTest

          },


          {
            path: '/',
            name: 'AppMain',
            component: AppMain,
            children: [{
                path: 'sys/User',
                name: 'User',
                component: User
              },
              {
                path: 'sys/Centre',
                name: 'Centre',
                component: Centre
              },
              {
                path: 'sys/Change',
                name: 'Change',
                component: Change
              },
              {
                path: 'sys/rili',
                name: 'rili',
                component: rili
              },
              {
                path: 'sys/img',
                name: 'img',
                component: img
              },
              {
                path: 'sys/addprod',
                name: 'addprod',
                component: addprod
              },
              {
                path: 'sys/bz',
                name: 'bz',
                component: bz
              },
              {
                path: '/test',
                name: 'test',
                component: test
              },
              {
                path: '/spxq',
                name: 'spxq',
                component: spxq
              },
              {
                path: '/ookk',
                name: 'ookk',
                component: ookk,
              },
              {
                path: '/AdminShop',
                name: 'AdminShop',
                component: AdminShop
              }, {
                path: '/dshShop',
                name: 'dshShop',
                component: dshShop
              }, {
                path: '/AddShop',
                name: 'AddShop',
                component: AddShop
              }, {
                path: '/Shop',
                name: 'Shop',
                component: Shop
              },
            ]
          }

        ]



      })
