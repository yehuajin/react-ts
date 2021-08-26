import React from 'react';
import './index.css';
import '@styles/common.scss';
// icon字体样式
import '@styles/icon-fonts/icon.css';
import ReactDom from 'react-dom';
// import env from '@config';
// console.log(env);
import style from './index.module.scss';

ReactDom.render(
  <div className={`${style.red} ${style.blue} text-ellipsis`}>hello world</div>,
  document.querySelector('#app')
);
