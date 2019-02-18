import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '@/store';
//顶层组件
import App from './App';
//错误捕获组件
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import './index.less';
import 'antd/dist/antd.css';
const store = configureStore();
ReactDOM.render(
  <ErrorBoundary>
    <App store={store} />
  </ErrorBoundary>,
  document.getElementById('app')
)