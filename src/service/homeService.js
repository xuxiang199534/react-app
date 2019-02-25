
import request from '@/constants/fetchRequest';

const homeService = {
  getList:( parameter )=>{
    return request.post('/nbproperty/group/user-list', parameter); 
  }
}
export default homeService;