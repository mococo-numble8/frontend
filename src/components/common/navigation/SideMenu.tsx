import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useOverlay } from 'hooks/ui/useOverlay';
import Icon from '../Icon/Icon';
import Overlay from '../Overlay/Overlay';
import styles from './SideMenu.module.scss';

const MenuTable = [
  {
    name: '내정보',
    path: '/profile',
  },
  {
    name: '내가 쓴 글',
    path: '/',
  },
  {
    name: '좋아요 한 글',
    path: '/favorites',
  },
];

const cx = classNames.bind(styles);

const SideMenu = () => {
  const { closeOverlay } = useOverlay();
  return (
    <Overlay>
      <aside className={styles.menu}>
        <div className={styles.close} onClick={closeOverlay}>
          <Icon name="close" alt="닫기" />
        </div>
        <div className={cx(styles.box, styles.nickname)}>
          <div className={styles.image}>이미지</div>
          <div className={styles.user}>
            <div className="medium-20">닉네임</div>
            <span>이메일주소.com</span>
          </div>
        </div>
        <ul className={styles.box}>
          {MenuTable.map((menu, index) => {
            return (
              <li key={index} className={cx('medium-18', styles.list)}>
                <Link to={menu.path}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.box}>
          <button className="medium-12">로그아웃</button>
        </div>
      </aside>
    </Overlay>
  );
};

export default SideMenu;
