import { http } from './http';


// 获取token
export function logintoken(obj) {
    return http('/ceshi', 'GET', {
    }, {
    }).then(res => {
        return res;
    })
}

// 获取列表
export function addresslist(obj) {
    return http('/addresslist', 'GET', {
    }, {
    }).then(res => {
        return res;
    })
}

// 获取测试列表
export function demolist(obj) {
    return http('/demo', 'GET', {
    }, {
    }).then(res => {
        return res;
    })
}



// 添加收货
export function addresdupdata(obj){
    return http('/address/add','POST',{
        username:obj.username,
        phone:obj.phone,
        address:obj.address
    },{}).then(res=>{
        return res;
    }).catch(err=>{
        return err;
    })
}

