import React from 'react';
import styles from './Tag.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface PropsType {
  title: string;
  color?: string;
}

const Tag = ({ title, color }: PropsType) => {
  return <div className={cx('container', { color: color })}>{title}</div>;
};

export default Tag;
