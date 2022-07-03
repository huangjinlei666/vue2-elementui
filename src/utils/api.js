import axios from "axios";
import { Message } from 'element-ui'
import router from '../router/index'

//请求拦截器
axios.interceptors.request.use(config=>{
    if(window.sessionStorage.getItem('tokenStr')){
        //请求携带自定义token
        config.headers['Authorization']=
        window.sessionStorage.getItem('tokenStr');
    }
    return config
},error=>{
    alert(error)
})





//响应拦截器
axios.interceptors.response.use(success => {
    //业务逻辑错误
    if (success.status && success.status == 200) {
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
            Message.error({ message: success.data.message });
            return;
        }
        if (success.data.message) {
            Message.success({ message: success.data.message })
        }
    }
    return success.data;
}, error => {
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({ message: '服务器宕机' });
    } else if (error.response.code == 403) {
        Message.error({ message: '无权限' });
    } else if (error.response.code == 401) {
        Message.error({ message: '未登录' });
        router.replace('/');//跳转到登陆页面
    } else {
        if (error.response.data.message) {
            Message.error({ message: error.response.data.message });
        } else {
            Message.error({ message: '未知错误' });
        }
    }
    return;
});

let base='';
//传递json格式的post请求
export const postRequest = (url, params)=>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })
}
//传递json格式的put请求
export const putRequest = (url, params)=>{
    return axios({
        method:'put',
        url:`${base}${url}`,
        data:params
    })
}
//传递json格式的get请求
export const getRequest = (url, params)=>{
    return axios({
        method:'get',
        url:`${base}${url}`,
        data:params
    })
}
//传递json格式的delete请求
export const deleteRequest = (url, params)=>{
    return axios({
        method:'delete',
        url:`${base}${url}`,
        data:params
    })
}