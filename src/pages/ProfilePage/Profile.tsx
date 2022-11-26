import React from 'react';
import styles from './Profile.module.scss';
import Avatar from 'components/common/avatar/avatar';
import TextInput from 'components/common/Inputs/TextInput';
import Button from 'components/common/Buttons/Button';
import { useStore } from '../../store/store';

const Profile = () => {
  const { isProfileModify } = useStore();

  return (
    <div className={styles.container}>
      <div className={styles.container__avatar}>
        <Avatar />
      </div>
      <div className={styles.section}>
        <p className={styles.label}>닉네임</p>
        <TextInput type="text" rounded placeholder="아이디" />
      </div>
      <div className={styles.section}>
        <p className={styles.label}>가입 이메일</p>
        <TextInput type="text" rounded placeholder="비밀번호" />
      </div>
      <div className={styles.section}>
        <p className={styles.label}>포지션</p>
        <TextInput type="text" rounded placeholder="당신의 포지션을 입력해주세요." />
      </div>
      <div className={styles.footer}>
        <div>
          <span>로그아웃</span>
          <span>{' | '}</span>
          <span>탈퇴하기</span>
        </div>
        {isProfileModify && <Button rounded>수정하기</Button>}
      </div>
    </div>
  );
};

export default Profile;
