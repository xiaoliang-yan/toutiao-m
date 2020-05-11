import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './styles/index.less'

import Vant from 'vant'
import 'vant/lib/index.css'

// 全局注册vant中的组件
Vue.use(Vant)

Vue.config.productionTip = false

// 创建Vue根实例，将router，store配置到根实例中
// 把App根组件渲染到#app节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
