import React from 'react';
import CurrentLocation from 'components/main/CurrentLocation';
import styles from './Main.module.scss';
import classNames from 'classnames';
import Icon from 'components/common/Icon/Icon';

const cx = classNames.bind(styles);

const SearchHeader = () => {
  const onClickSearchTags = () => {
    alert('onClickSearchTags!');
  };
  return (
    <div className={styles['search-header']}>
      <div className={cx('bold-20', styles.location)}>
        <CurrentLocation />
      </div>
      <button className={styles['search-button']} onClick={onClickSearchTags}>
        <Icon name="search" className="medium" alt="어떤 분이랑 코딩하고 싶어요?" />
        <span className="regular-15">어떤 분이랑 코딩하고 싶어요?</span>
      </button>
    </div>
  );
};

export default SearchHeader;
