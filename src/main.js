import Vue from 'vue'
import App from './App.vue'

// 路由插件
import Router from '@plugins/router'
// service 插件
import Service from '@plugins/service'
// 扩展 过滤器
import filters from '@filters'
// 扩展 指令
import directive from '@directive'
// 扩展 组件
import components from '@components'


// 使用service插件
Vue.use(Service);
// 使用路由插件
Vue.use(Router);
// 使用扩展过滤器
Vue.use(filters);
// 使用扩展指令
Vue.use(directive);
// 使用扩展组件
Vue.use(components);


Vue.config.productionTip = false

new Vue({
	router: Router.Instance,
	render: h => h(App)
}).$mount('#app')
