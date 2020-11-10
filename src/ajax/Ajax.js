import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import store from "@/store"


const instance = axios.create({
    baseURL:'/api',
    timeout: 20000
});


//添加进度条信息
//请求拦截器
instance.interceptors.request.use(config => {
    let userTempId = store.state.users.userTempId
    if(userTempId){
        config.headers.userTempId = userTempId
    }


    let token = store.state.users.userInfo.token;
    if(token){
        config.headers.token = token
    }
    Nprogress.start()
    return config
})


//响应拦截器
instance.interceptors.response.use(response => {
    Nprogress.done()
    return response.data
},error => {
    Nprogress.done()
    alert('请求失败' + error.message || '未知错误')
    return new Promise(() => {})
})


export default instance