import React from 'react';
import styles from './avatar.module.scss';
import classNames from 'classnames/bind';

interface PropsType {
  name?: string;
  alt?: string;
  icon?: React.ReactNode;
}

const Avatar = ({ name, alt, icon }: PropsType) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.container__avatar}
        src={name ? `/images/${name}` : '/vectors/user.svg'}
        alt={alt}
      />
      {/*{icon && icon}*/}
      <img
        className={styles.container__icon}
        src={'/vectors/heart.svg'}
        alt="icon"
      />
    </div>
  );
};

export default Avatar;
