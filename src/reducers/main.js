export const PLUS_TODO = Symbol(PLUS_TODO);
export const REDUCE_TODO = Symbol(REDUCE_TODO);

const initState = {
  count:0,
}
const main = ( state = initState,action = {})=>{
  switch (action.type){
    case PLUS_TODO:
      return Object.assign({},state,{number:number++});
    case REDUCE_TODO:
      return Object.assign({},state,{number:number--});
    default:
      return state;
  }
}
export default main;