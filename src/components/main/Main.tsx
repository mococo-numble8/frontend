import React from 'react';
import SearchHeader from './SearchHeader';
import styles from './Main.module.scss';
import MultiTagList from 'components/common/tag/MultiTagList';

const positions: TagType.Tag[] = [
  {
    id: 0,
    tag: '벡엔드',
  },
  {
    id: 1,
    tag: '프론트엔드',
  },
  {
    id: 2,
    tag: '데브옵스',
  },
  {
    id: 3,
    tag: '풀스택',
  },
];

const Main = () => {
  return (
    <>
      <SearchHeader />
      <div className={styles.tab}>
        <MultiTagList list={positions} name="position" />
      </div>
      <div>
        <img className={styles.banner} alt="banner" src="images/banner.png" />
      </div>
    </>
  );
};

export default Main;
