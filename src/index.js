import Vue from 'vue'
import VueRouter from 'vue-router'

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
Vue.use(VueRouter)
const router = new VueRouter({routes});
const app = new Vue({router}).$mount("#app");