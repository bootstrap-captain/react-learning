import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*入口文件*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/* 将APP组件渲染到页面*/
root.render(
    /*检查React代码不合理的地方：比如react过时的api*/
  <React.StrictMode>
    <App />
  </React.StrictMode>
);