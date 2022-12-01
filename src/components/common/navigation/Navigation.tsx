import React from 'react';
import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';
import SideMenu from './SideMenu';

const cx = classNames.bind(styles);

const Navigation = ({ title, color, left, right }: UiType.NavigationOptions) => {
  return (
    <header className={cx(styles.container, { [styles[`${color}`]]: color })}>
      <div className={styles.wrap}>
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
      <SideMenu />
    </header>
  );
};

export default Navigation;
