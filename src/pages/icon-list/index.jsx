import React from 'react';
import css from './index.module.scss';

const iconList = require('@styles/icon-fonts/icon.json');

const Icon = () => {
  return (
    <div className={css.content}>
      <div>icon列表</div>
      {iconList.map((item) => {
        return (
          <div key={item.code}>
            {item.name}：
            <div className={css.item}>
              {item.children?.map((icon) => {
                return (
                  <span key={icon.code}>
                    <i className={`xf-icon-${icon.code}`}></i>
                    <br />
                    {icon.name}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Icon;
