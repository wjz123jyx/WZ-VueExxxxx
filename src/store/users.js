import {getUserTempId} from '@/utils/userAbout';
import {reqUserRegister,reqUserLogin,reqUserLogout} from '@/api';

const state = {
    userTempId:getUserTempId(),
    userInfo:JSON.parse(localStorage.getItem('USERINFO_KEY')) || {}
}
const mutations = {
    // 登录mu
    RECEIVEUSERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    // 清空state用户信息
    REMOVEUSERINFO(state){
        state.userInfo = {}
    }
}
const actions = {
    // 注册
    async userRegister({commit},userInfo){
        const result = await reqUserRegister(userInfo);
        if(result.code === 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    // 登录
    async userLogin({commit},userInfo){
        const result = await reqUserLogin(userInfo);
        if(result.code === 200){
            commit('RECEIVEUSERINFO',result.data);
            // 存储自动登录
            localStorage.setItem('USERINFO_KEY',JSON.stringify(result.data))
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    // 退出登录
    async userLogout({commit}){
        const result = await reqUserLogout();
        if(result.code === 200){
            commit('REMOVEUSERINFO');
            localStorage.removeItem('USERINFO_KEY');
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}