import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import Icon from 'components/common/Icon/Icon';
import classNames from 'classnames/bind';
import { useStore } from '../../../store/store';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsType {
  icon?: React.ReactNode;
  title: string;
  onboarding?: boolean;
}

const Navigation = ({ icon, title, onboarding }: PropsType) => {
  const { isProfileModify, setProfileModify } = useStore();
  const [isModify, setModify] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/profile') {
      setModify(true);
    }
  }, [pathname]);

  const onClick = () => {
    setProfileModify(!isProfileModify);
    setModify(!isModify);
  };

  return (
    <div className={cx(styles.container, { onboarding: onboarding })}>
      <div className={styles.icon}>{icon && icon}</div>
      <div className={styles.title}>{title}</div>
      {isModify && <button onClick={onClick}>편집</button>}
    </div>
  );
};

export default Navigation;
