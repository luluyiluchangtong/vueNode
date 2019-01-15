import Vue from "vue"
import axios from "axios"
Vue.prototype.$http = axios
import QS from "qs"

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ad4527b4a76b81c1846e71e';
axios.defaults.timeout = 10000; // 请求超过设定时间，则请求会停止
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


export function get(url, params) { // 此时该函数就是一个 promise 对象
    return new Promise((resolve, reject) => { // promise 用来填装 axios 取到的数据
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function post(url, data) { // 对提交参数对象进行 序列化, 否则后台拿不到数据
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(data))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}