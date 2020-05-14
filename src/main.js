import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载vant组件库
import Vant from 'vant'

// 加载vant组件库样式
import 'vant/lib/index.css'

// 自动设置rem基准值（html字体标签大小）
import 'amfe-flexible'

// 加载全局样式
import './styles/index.less'

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
