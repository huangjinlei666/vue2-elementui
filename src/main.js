import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';//引入element
import 'element-ui/lib/theme-chalk/index.css'//引入element样式
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)//安装element
new Vue({
  router,//使用router组件
  render: h => h(App),//渲染App组件
}).$mount('#app')//手动挂载
