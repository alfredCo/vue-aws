import axios from "axios";

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
    config.headers.common['X-Auth-Token'] = "dc8c65603d884966b61f87cba8adab19";
    return config;
},function(error){
    return Promise.reject(error);
})

//添加一个返回拦截器
axios.interceptors.response.use(function(response){
    //对返回的数据进行一些处理
    if(response.data.code==0){
        return response.data.data;
    }else{
        console.log(response.data.code)
        return [];
    }
},function(error){
    //对返回的错误进行一些处理
    return Promise.reject(error);
});