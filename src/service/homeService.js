
import request from '@/units/request';

const homeService = {
  getList:( parameter )=>{
    return request.post('/nbproperty/group/user-list', parameter); 
  }
}
export default homeService;