import axios from 'axios';
import { baseUrl } from './utils';
import { message } from 'antd';
import qs from 'qs';
import md5 from 'crypto-js/md5';


//默认实例参数
const defaultOptions = {
  baseURL:`${baseUrl()}`,
  method: 'POST',
  timeout:10000,
  validateStatus:function(){
    return true;
  }
};
//区分开发环境和生产环境
const NODE_ENV = process.env.NODE_ENV === 'development';
let CancelToken = axios.CancelToken;
// let cancel;
const request = axios.create(
  { 
    ...defaultOptions,
    cancelToken: new CancelToken(function (c) {
      // cancel = c;
    })
  }
);
//拦截 request 请求 添加Accept请求头
request.interceptors.request.use((config)=>{
  const params = {
    data: JSON.stringify(config.data),
    token: sessionStorage.getItem('QXToken') || 'eff53ed3304239e91ef34ecbc21595af'
  };
  const  appSecret = 'HU6%12(w';
  //四位随机数(1000-9999)
  let rand = parseInt(Math.random() * 8999 + 1000, 10).toString();
  let timestamp = new Date().getTime().toString();
  let md5String = JSON.stringify({"data": config.data, "rand": rand, "timestamp": timestamp, "token": params.token});
  //验签算法
  let sign = md5(md5(md5String).toString() + appSecret).toString();
  config.headers.Accept = 'application/json';
  config.headers['Content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  config.headers['Zj-Custom-Rand'] = rand;
  config.headers['Zj-Custom-Timestamp'] = timestamp;
  config.headers['Zj-Custom-Sign'] = sign;
  if(NODE_ENV){
    config.data = qs.stringify(params);
  }else{
    config.transformRequest = function(){
      let data = qs.stringify(params);
      return data;
    };
  }
  return config;
});

//通用响应拦截器
request.interceptors.response.use(async (response)=>{
  const { status,data } = response;
  if(status >= 200 && status < 500){
    if(data.code === 20000){
      return Promise.resolve(data);
    } else{
      message.destroy();
      message.error(data && data.message || '网络错误');
      return Promise.reject(response);
    }
  } else {
    message.error('服务器错误');
    return Promise.reject(response);
  }
  //console.log(response,'response')
});

export default request;
