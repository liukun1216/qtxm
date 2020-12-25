import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login.vue'
import Idex from '@/views/Idex.vue'
import Register from '@/views/Register.vue'
import Personal from '@/views/Personal.vue'
import ookk from '@/views/ookk.vue'
import test from '@/views/test.vue'

import AppMain from '@/views/AppMain.vue'
import User from '@/views/sys/User.vue'
import Centre from '@/views/sys/Centre.vue'
import Change from '@/views/sys/Change.vue'
import rili from '@/views/sys/rili.vue'
import bz from '@/views/sys/bz.vue'
import img from '@/views/sys/img.vue'


Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/',
      name: 'AppMain',
      component: AppMain,
      children:[
        {
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
          path: '/ookk',
          name: 'ookk',
          component: ookk,
        }
      ]
    }
  ]
 //  routes: [
 //    {
 //      path: '/idex',
 //      name: 'Idex',
 //      component: Idex
 //    },
 //    {
 //      path: '/Login',
 //      name: 'Login',
 //      component: Login
 //    },
 //    {
 //      path: '/Idex',
 //      name: 'Idex',
 //      component: Idex
 //    },
 //    {
 //      path: '/Register',
 //      name: 'Register',
 //      component: Register
 //    },
 //    {
 //      path: '/Personal',
 //      name: 'Personal',
 //      component: Personal
 //    },
	// {
	//   path: '/ookk',
	//   name: 'ookk',
	//   component: ookk,
	// },
 //  {
 //    path: '/test',
 //    name: 'test',
 //    component: test
 //  },
 //  {
 //    path: '/',
 //    name: 'AppMain',
 //    component: AppMain,
 //  },
 //  {
 //    path: '/',
 //    name: 'AppMain',
 //    component: AppMain,
 //    children:[
 //      {
 //        path: 'sys/User',
 //        name: 'User',
 //        component: User
 //      },
 //      {
 //        path: 'sys/Centre',
 //        name: 'Centre',
 //        component: Centre
 //      },
 //      {
 //        path: 'sys/Change',
 //        name: 'Change',
 //        component: Change
 //      }
 //    ]
 //  }
 //  ],



})
