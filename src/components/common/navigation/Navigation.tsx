import React from 'react';
import styles from './Navigation.module.scss';
import Icon from 'components/common/Icon/Icon';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface PropsType {
  icon?: React.ReactNode;
  title: string;
  onboarding?: boolean;
}

const Navigation = ({ icon, title, onboarding }: PropsType) => {
  return (
    <div className={cx(styles.container, { onboarding: onboarding })}>
      <div className={styles.icon}>
        <Icon className="medium" alt="location" name="Icon-location"></Icon>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Navigation;
