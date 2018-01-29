// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
var qs = require('qs')

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false
Vue.prototype.$http= axios
Vue.prototype.$qs = qs

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
});
Vue.use(VueI18n)
Vue.use(ElementUI)
axios.get('../static/lang.json').then((langpack) => {
  const i18n = new VueI18n({
      locale: langpack.data.default,  // 语言标识
      fallbackLocale: langpack.data.default,
      messages: langpack.data.map
  })
  new Vue({
    el: '#app',
    router,
    store,
    axios,
    i18n,
    qs,
    template: '<App/>',
    components: { App }
  })
});
/*const i18n = new VueI18n({
    locale: 'zh',  // 语言标识
    messages: {
        'zh': require('./common/lang/zh'),
        'en': require('./common/lang/en')
    }
})
new Vue({
  el: '#app',
  router,
  store,
  axios,
  i18n,
  qs,
  template: '<App/>',
  components: { App }
})*/
