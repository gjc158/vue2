import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import msg from './langs'
Vue.use(VueI18n)
const i18n = new VueI18n({
	local: localStorage.lang || 'zh',
	msg
})
locale.i18n((key, value) => i18n.t(key, value)) 
export default i18n