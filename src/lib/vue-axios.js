import axios from 'axios';

import Vue from 'vue';

import {
    Message
} from 'element-ui'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
axios.interceptors.request.use(config => {
    if (config.url.indexOf('/login') != -1) {
        //登录接口
    } else {
        //飞登录接口
        config.headers.Authorization = window.sessionStorage.getItem('token');
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if (response.data.meta.status === 200) {
        // 成功 提示返回的信息
        Message.success(response.data.meta.msg);
    } else if (response.data.meta.status === 400) {
        // 失败 提示 返回的信息
        Message.error(response.data.meta.msg);
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default {
    install(Vue) {
        Vue.prototype.$axios = axios;
    }

}