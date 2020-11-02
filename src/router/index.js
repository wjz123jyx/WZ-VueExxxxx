import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (localtion,resolved,reject) {
    if(resolved === undefined && reject === undefined){
        return originPush.call(this,localtion).catch(() => {})
    }else{
        return originPush.call(this,localtion,resolved,reject)
    }
}

VueRouter.prototype.replace = function (localtion,resolved,reject) {
    if(resolved === undefined && reject === undefined){
        return originReplace.call(this,localtion).catch(() => {})
    }else{
        return originReplace.call(this,localtion,resolved,reject)
    }
}



import routes from './routes'
export default new VueRouter({
    mode:'history',
    routes
})