export const REQUEST_ADVERTISINGLIST = Symbol('REQUEST_ADVERTISINGLIST');
export const RECEIVE_ADVERTISINGLIST = Symbol('RECEIVE_ADVERTISINGLIST');

const initState = {
  list:[],
  loading:false,
}
const todoApp = ( state = initState,action = {})=>{
  console.log(action,'hhhhhhhhhh')
  switch (action.type){
    case REQUEST_ADVERTISINGLIST:
      return Object.assign({},state,{
        loading: true,
      });
    case RECEIVE_ADVERTISINGLIST:
      return Object.assign({},state,{
        loading:false,
      });
    default:
      return state;
  }
}
export default todoApp;