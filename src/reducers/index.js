import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
const context = require.context('./',true,/\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const reducers = {}
if(Array.isArray(keys)&&keys.length>0){
  for (let i = 0; i < keys.length; i += 1) {
    reducers[keys[i].replace(/^\.\/(.*)\.js$/, "$1").replace(/(\/)/g, "_")] = context(keys[i]).default
  }
}

const configReducers = combineReducers({
  routing:routerReducer,
  ...reducers
});
export default configReducers;
