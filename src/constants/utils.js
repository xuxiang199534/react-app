
export function baseUrl(){
  let location = window.location;
  let hostname = location.hostname;
  if(hostname=='localhost' || hostname=='127.0.0.1'){   //本地启动接口地址
    return 'http://115.231.181.17:81';
  } else if (hostname =='115.231.181.17'){  //测试地址
    return 'http://115.231.181.17:81';
  }
}