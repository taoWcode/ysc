
import axios from 'axios';
import { Toast } from 'antd-mobile';

const server = axios.create({
    timeout:36000,
    headers:{'X-Requested-With':'XMLHttpRequest'}
});

//请求拦截

server.interceptors.request.use( (config) => {

    Toast.loading("Loading...");
    return config;

},(err) => {
    console.log(err);
    return Promise.reject(err);
} )

//响应拦截
server.interceptors.response.use( (res) => {
    Toast.hide();
  
    return res;
},( err ) => {

    Toast.hide();
   
    const statusCode = err.status || err.data.status;
    switch(statusCode){
        case 404:
        Toast.fail('No found it. code:404',2);
        break;
        case 500:
        Toast.fail('The server error. code:500',2);
        break;
        default:Toast.fail('未知错误. code:' + statusCode, 2);

        
    }
    return Promise.reject(err)

} )


const http = {};
http.get = ( url, param ) => {
    return new Promise((resolve,reject) => {

        
        server({
            method:'get',
            url:url,
            params:param
        }).then( (res) => {
            resolve(res)
        } ).catch((err) => {
            Toast.fail('数据请求发生错误',2);
            reject(err);
        })
    })
}

http.post = ( url, param ) => {
    return new Promise( (resolve, reject) => {

        server({
            method:'post',
            url:url,
            params:param
        }).then( (res) => {
            resolve(res)
        } ).catch( err => {
            Toast.fail('数据提交发生错误',2);
            reject(err);
        } )

    } )
}

export default http;