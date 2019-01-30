import { put, takeEvery,all,fork } from 'redux-saga/effects';
import { REQUEST_ADVERTISINGLIST,RECEIVE_ADVERTISINGLIST } from '@/reducers/home';
import homeService from '@/service/homeService.js';
const { getList } = homeService;

function* getUserList(){
  console.log(payload,'111111111111111')
  yield takeEvery(REQUEST_ADVERTISINGLIST,function*({ payload }){
    // console.log(payload,'2222222222222222')
    // const { code,data } = yield call( getList,payload);
    
  })
}


export default function* homeSaga(){
  yield all([
    getUserList()
  ])
}