import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import One from '@/components/subpage/One'
import Two from '@/components/subpage/Two'
import Notfound from '@/components/Notfound'
import Welcome from '@/components/Welcome'

Vue.use(Router)

const router = new Router({
  //mode: 'history',
  //base: __dirname,
  routes: [
    {
      path: '*',
      component: Notfound,
      meta: {
        title: '404未找到',
      },
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: Notfound,
    },
    
  	{
  	  path: '/',
  	  redirect: '/login',
  	},
  	{
	  path: '/login',
	  name: 'Login',
	  component: Login
	},
	{
	  path: '/main',
	  name: 'Main',
	  component: Main,
    meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
	  children: [{
	  	path: '/one',
	  	name: 'One',
	  	component: One,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
	  },
	  {
	  	path: '/two',
	  	name: 'Two',
	  	component: Two,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
	  },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    },]
	}
  ]
})


export default router