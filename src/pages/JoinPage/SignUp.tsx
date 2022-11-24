import React from 'react';
import styles from './JoinPage.module.scss';
import TextInput from 'components/common/Inputs/TextInput';
import Button from 'components/common/Buttons/Button';

const SignUp = () => {
  return (
    <div className={styles['signup-form']}>
      <div>
        <div className={styles['item-title']}>이메일</div>
        <div className={styles['signup-email']}>
          <div className={styles['input-item']}>
            <TextInput type="text" placeholder="이메일을 입력해주세요." />
          </div>
          <div className={styles['button-item']}>
            <Button isSecondary>중복확인</Button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles['item-title']}>비밀번호</div>
        <div className={styles['signup-pw']}>
          <TextInput type="password" placeholder="비밀번호 입력." />
          <TextInput type="password" placeholder="비밀번호 확인" />
        </div>
      </div>
      <div>
        <div className={styles['item-title']}>닉네임</div>
        <div className={styles['signup-email']}>
          <div className={styles['input-item']}>
            <TextInput type="text" placeholder="닉네임 입력." />
          </div>
          <div className={styles['button-item']}>
            <Button isSecondary>중복확인</Button>
          </div>
        </div>
      </div>
      <Button rounded>가입하기</Button>
    </div>
  );
};

export default SignUp;
