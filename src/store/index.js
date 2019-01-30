import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import configReducers from '@/reducers';
import sagas from '@/sagas';
import logger from 'redux-logger';

//创建history
export const history = createHistory();
//创建saga中间件;
const sagaMiddleware = createSagaMiddleware();

// 需要调用的中间件;
const middleWares = [
  sagaMiddleware,
  routerMiddleware(history),
  logger
]

export default function configureStore(){
  const store = createStore(configReducers,undefined,compose(
    applyMiddleware(...middleWares)
  ));
  sagaMiddleware.run(sagas);
  return {store}; 
}


