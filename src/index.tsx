import React from 'react';
import './index.css';
import '@assets/css/common.scss';
import bg from '@assets/images/no-img.png';
// icon字体样式
import '@assets/font/icon-fonts/icon.css';
import ReactDom from 'react-dom';
// import env from '@config';
// console.log(env);
import style from './index.module.scss';

ReactDom.render(
  <div
    style={{ backgroundImage: `url(${bg})` }}
    className={`${style.red} ${style.blue} text-ellipsis`}
  >
    hello world
  </div>,
  document.querySelector('#app')
);
