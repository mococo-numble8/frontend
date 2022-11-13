import React from 'react';
import TextInput from '../../components/common/Inputs/TextInput';
import Icon from '../../components/common/Icon/Icon';
import styles from './JoinPage.module.scss';

// interface PropsType {
//
// }

const SelectLocation = () => {
  return (
    <>
      <div className={styles['address-input']}>
        <TextInput
          type="text"
          rounded
          backgroundWhite
          placeholder="내 동네 이름(동, 읍, 면)으로 검색"
        ></TextInput>
      </div>
      <div>
        <h1 className={styles['dongnae-title']}>근처동네</h1>
        <div>
          <div className={styles['list-item']}>
            <Icon alt="location" name="Icon-location"></Icon>
            <div className={styles['list-content']}>경북 경산시 공덕동</div>
          </div>
          <div className={styles['list-item']}>
            <Icon alt="location" name="Icon-location"></Icon>
            <div className={styles['list-content']}>경북 경산시 공덕동</div>
          </div>
          <div className={styles['list-item']}>
            <Icon alt="location" name="Icon-location"></Icon>
            <div className={styles['list-content']}>경북 경산시 공덕동</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectLocation;
