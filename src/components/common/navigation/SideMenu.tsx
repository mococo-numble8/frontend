import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useOverlay } from 'hooks/ui/useOverlay';
import Icon from '../Icon/Icon';
import Overlay from '../Overlay/Overlay';
import styles from './SideMenu.module.scss';
import { motion } from 'framer-motion';
import { useStore } from 'store/store';

const ANIMATION_DURATION = 0.3;

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

const variants = {
  open: { x: 0 },
  closed: { x: '-100%' },
};

const SideMenu = () => {
  const { isOverlay } = useStore(); // 실제 오버레이 여부
  const { closeOverlay } = useOverlay();
  const [isOpen, setIsOpen] = useState<boolean>(true); // 사이드 메뉴에서의 여부

  useEffect(() => {
    if (isOverlay) setIsOpen(true);
  }, [isOverlay]);

  const closeSideMenu = () => {
    setIsOpen(false); // 사이드메뉴에서 닫기
    const timer = setTimeout(() => closeOverlay(), ANIMATION_DURATION * 1000); //  실제 오버레이는 duration을 주고 닫음
    clearTimeout(timer);
  };

  return (
    <Overlay duration={!isOpen}>
      <motion.aside
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        initial={{ x: '-100%' }}
        transition={{ duration: ANIMATION_DURATION }}
        className={styles.menu}
      >
        <div className={styles.close} onClick={closeSideMenu}>
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
      </motion.aside>
    </Overlay>
  );
};

export default SideMenu;
