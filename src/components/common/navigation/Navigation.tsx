import React from 'react';
import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Navigation = ({ title, color, left, right }: UiType.NavigationOptions) => {
  return (
    <div className={cx(styles.container, { [styles[`${color}`]]: color })}>
      {left && (
        <div className={cx('left', styles.icon)} onClick={left.onClick}>
          {left.element}
        </div>
      )}
      {title && <div className={'bold-20 ' + styles.title}>{title}</div>}
      {right && (
        <div className={cx('right', styles.icon)} onClick={right.onClick}>
          {right.element}
        </div>
      )}
    </div>
  );
};

export default Navigation;
