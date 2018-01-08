import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import FirstPage from '@/components/FirstPage'
import one from '@/components/subpage/one'
import two from '@/components/subpage/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/',
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
	  path: '/first',
	  name: 'FirstPage',
	  component: FirstPage,
	  children: [{
	  	path: '/one',
	  	name: 'one',
	  	component: one
	  },
	  {
	  	path: '/two',
	  	name: 'two',
	  	component: two
	  }]
	}
    
  ]
})
