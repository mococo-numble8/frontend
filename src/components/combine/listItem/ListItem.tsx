import React from 'react';
import styles from './ListItem.module.scss';
import Icon from '../../common/Icon/Icon';
import Tag from '../../common/tag/Tag';
import Avatar from '../../common/avatar/avatar';

interface PropsType {
  title?: string;
  datetime?: string;
  people?: string;
  imageUrl?: string;
  tag?: string[];
  users?: string[];
}

const ListItem = ({ title, datetime, people, imageUrl, tag }: PropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
      <div className={styles.container__content}>
        <div className={styles.vertical}>
          <div className={styles.tags}>
            <Tag title="백엔드" />
            <Tag title="서울 합정역" />
          </div>
          <div className={styles.title}>{title}</div>
          <div
            className={styles.desc}
          >{`${datetime} | ${datetime} | ${people}`}</div>
          <div className={styles.avatars}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
        </div>
        <div>
          <Icon name="heart-outline" alt="like" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
