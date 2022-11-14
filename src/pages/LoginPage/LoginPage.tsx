import React from 'react';
import styles from './LoginPage.module.scss';
import Container from 'components/common/Containers/Container';
import TextInput from 'components/common/Inputs/TextInput';
import ToggleButton from 'components/common/Buttons/ToggleButton';
import Button from 'components/common/Buttons/Button';

const LoginPage = () => {
  return (
    <Container isLogin>
      <div className={styles.container}>
        <nav className={styles['header-nav']}>
          <button className={styles['back-button']}>back</button>
          <p className={styles['login-title']}>로그인</p>
        </nav>
        <div className={styles.content}>
          <h1>모여서 각자 코딩하자!</h1>
          <h1>Mococo</h1>
        </div>
        <div className={styles.form}>
          <TextInput
            type="text"
            rounded
            backgroundWhite
            placeholder="아이디"
          ></TextInput>
          <TextInput
            type="password"
            rounded
            backgroundWhite
            placeholder="비밀번호"
          ></TextInput>
          <div className={styles['toggle-area']}>
            <ToggleButton></ToggleButton>
            <div>로그인 상태유지</div>
          </div>
          <Button rounded>로그인하기</Button>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
