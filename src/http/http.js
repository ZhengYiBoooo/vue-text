
import axios from 'axios';

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5fa4c84d60b9b97b2c399554/list'

export const http = (url, method = "get", data, params) => {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            headers: {
            },
            data,
            params,
        }).then(res => {
            if (res.status >= 200 && res.status < 300 || res.status == 304) {
                resolve(res.data);
            } else {
                reject(res);
            }
        }).catch(err => {
            reject(err)
        })
    })
}