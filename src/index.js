import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios";
import "./config/http";

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

axios.get('http://192.168.130.15:9080/awstack-user/v1/enterprises/66666666666666666666666666666666/domains').then(res=>{console.log(res)})
Vue.use(VueRouter)
const router = new VueRouter({routes});
const app = new Vue({router}).$mount("#app");
