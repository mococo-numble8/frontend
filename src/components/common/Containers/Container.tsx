import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface PropsType {
  children: React.ReactNode;
  isLogin?: boolean;
}

function Container({ children, isLogin }: PropsType) {
  return (
    <div className={cx('container', { 'background-login': isLogin })}>
      {children}
    </div>
  );
}

export default Container;
