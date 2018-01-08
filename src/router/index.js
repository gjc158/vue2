import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import One from '@/components/subpage/One'
import Two from '@/components/subpage/Two'
import Notfound from '@/components/Notfound'

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
	  children: [{
	  	path: '/one',
	  	name: 'One',
	  	component: One
	  },
	  {
	  	path: '/two',
	  	name: 'Two',
	  	component: Two
	  }]
	}
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {                                        //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();                                                                            //如果匹配到正确跳转
  }
});

export default router