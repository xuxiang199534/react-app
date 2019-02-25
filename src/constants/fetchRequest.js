import 'whatwg-fetch';
import { baseUrl } from './utils' ;
import { message } from 'antd';
import md5 from 'crypto-js/md5';
import qs from 'qs';

export default async( url = '',options = {},methods ) =>{
  //let type = methods.toUpperCase;
  let urls =  baseUrl()+url;




  //const  appSecret = 'HU6%12(w';
  // //四位随机数(1000-9999)
  // let rand = parseInt(Math.random() * 8999 + 1000, 10).toString();
  // let timestamp = new Date().getTime().toString();
  // let md5String = JSON.stringify({"data": config.data, "rand": rand, "timestamp": timestamp, "token": params.token});
  // //验签算法
  // let sign = md5(md5(md5String).toString() + appSecret).toString();
  // config.headers.Accept = 'application/json';
  // config.headers['Content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  // config.headers['Zj-Custom-Rand'] = rand;
  // config.headers['Zj-Custom-Timestamp'] = timestamp;
  // config.headers['Zj-Custom-Sign'] = sign;






  const params = {
    data: JSON.stringify(options),
    token: 'eff53ed3304239e91ef34ecbc21595af',
  };
  const  appSecret = 'HU6%12(w';
  //四位随机数(1000-9999)
  let rand = parseInt(Math.random() * 8999 + 1000, 10).toString();
  let timestamp = new Date().getTime().toString();
  let md5String = JSON.stringify({"data": options.data, "rand": rand, "timestamp": timestamp, "token": params.token});
  //验签算法
  let sign = md5(md5(md5String).toString() + appSecret).toString();
  
  let formData = {};
  formData.method = 'POST';
  formData.headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    "Zj-Custom-Rand":  rand,
    "Zj-Custom-Timestamp":  timestamp,
    "Zj-Custom-Sign":  sign
  };
  formData.body = qs.stringify(params);

  // return fetch(urls,formData).then((response)=>{
  //   console.log(response,'response')
  // });

  try {
    const response = await fetch(urls,formData);
    const res = response.json();
    console.log(res,'res')
    const { status,data } = response;
    if(response.status >= 200 && response.status < 300){
      return response;
    }
    
  } catch (error) {
    throw new Error(error)
  }
};