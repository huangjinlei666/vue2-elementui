import Vue from 'vue'
import VueRouter from 'vue-router'//安装路由
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Test from '../views/Test.vue'
Vue.use(VueRouter)

const routes = [//配置路由
    {
        path: '/',//路由路径
        name: 'Login',//路由名称
        component: Login,//跳转的组件
        hidden:true,
    },
    {
        path: '/home',
        name: '导航一',
        component: Home,
        children: [
            {
                path: '/demo',
                name: '选项一',
                component: Demo,
            },
            {
                path: '/test',
                name: '选项二',
                component: Test,
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router;