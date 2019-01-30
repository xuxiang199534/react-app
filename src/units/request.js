import 'whatwg-fetch';
import { baseUrl } from './unit' ;
import { message } from 'antd';
import md5 from 'crypto-js/md5';

export default async( url = '',options = {},methods ) =>{
  //let type = methods.toUpperCase;
  let urls =  baseUrl()+url;
  const params = {
    data: JSON.stringify(options),
    token: '100595e46e83391713ab036f666e82fe',
  };
  const  appSecret = 'HU6%12(w';
  //四位随机数(1000-9999)
  let rand = parseInt(Math.random() * 8999 + 1000, 10).toString();
  let timestamp = new Date().getTime().toString();
  let md5String = JSON.stringify({"data": config.data, "rand": rand, "timestamp": timestamp, "token": params.token});
  //验签算法
  let sign = md5(md5(md5String).toString() + appSecret).toString();
  
  let formData = {};
  formData.method = 'POST';
  formData.headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    "Zj-Custom-Rand":  rand,
    "Zj-Custom-Timestamp":  timestamp,
    "Zj-Custom-Sign":  sign
  }
  // if( type === 'GET' ){
  //   let dataStr = '';
  //   Object.keys(data).forEach((key, index, array) => {
  //     dataStr = dataStr + key + '=' + data[key] + '&';
  //   })
  // }
  try {
    const response = await fetch(urls,formData); 
  } catch (error) {
    throw new Error(error)
  }
}