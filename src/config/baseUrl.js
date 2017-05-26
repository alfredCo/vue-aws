import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

const index = {template:"<div>222</div>"};
const aa = {template:"<div>ddd</div>"};
const bb = {template:"<div>sss</div>"};

const routes = [
    {
        path:"/",
        component:index
    },
    {
        path:"/dd",
        component:aa
    },
    {
        path:"/cc",
        component:bb
    }
];
//var CancelToken = axios.CancelToken;
//var source = CancelToken.source();
//axios.defaults.headers.common['X-Auth-Token'] = "dc8c65603d884966b61f87cba8adab19";
axios.interceptors.request.use(function(config){
    config.headers.common['X-Auth-Token'] = "dc8c65603d884966b61f87cba8adab19";
    console.log(config);
    return config;
},function(error){
    //当出现请求错误是做一些事
    return Promise.reject(error);
})
axios.get('http://192.168.130.15:9080/awstack-user/v1/enterprises/66666666666666666666666666666666/domains').then(res=>{console.log(res)})
Vue.use(VueRouter)
const router = new VueRouter({routes});
const app = new Vue({router}).$mount("#app");
