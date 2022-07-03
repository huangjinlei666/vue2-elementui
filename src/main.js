import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';//引入element
import 'element-ui/lib/theme-chalk/index.css'//引入element样式
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(ElementUI)//安装element

import {postRequest} from './utils/api'
import {putRequest} from './utils/api'
import {getRequest} from './utils/api'
import {deleteRequest} from './utils/api'

Vue.prototype.postRequest=postRequest;
Vue.prototype.putRequest=putRequest;
Vue.prototype.getRequest=getRequest;
Vue.prototype.deleteRequest=deleteRequest;
new Vue({
  store,
  router,//使用router组件
  render: h => h(App),//渲染App组件
}).$mount('#app')//手动挂载
