import Vue from 'vue'
import VueRouter from 'vue-router'//安装路由
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes=[//配置路由
    {
        path:'/',//路由路径
        name:'Login',//路由名称
        component:Login,//跳转的组件
    },
]

const router=new VueRouter({
    routes
})

export default router;