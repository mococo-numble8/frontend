import React from 'react';
import TextInput from '../../components/common/Inputs/TextInput';
import ToggleButton from '../../components/common/Buttons/ToggleButton';
import Button from '../../components/common/Buttons/Button';
import styles from './Login.module.scss';

// interface PropsType {}

const Login = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>모여서 각자 코딩하자!</h1>
        <h1>Mococo</h1>
      </div>
      <div className={styles['input-form']}>
        <TextInput type="text" rounded placeholder="아이디"></TextInput>
        <TextInput type="password" rounded placeholder="비밀번호"></TextInput>
        <div className={styles.toggle}>
          <ToggleButton></ToggleButton>
          <div className="label">로그인 상태유지</div>
        </div>
        <Button rounded className={styles['login-button']}>
          로그인하기
        </Button>
      </div>
    </div>
  );
};

export default Login;
