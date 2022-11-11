import React from 'react';
import styles from './LoginPage.module.scss';
import Container from 'components/common/Containers/Container';

const LoginPage = () => {
  return (
    <Container>
      <div>
        <header>
          <nav className={styles['header-nav']}>
            <button className={styles['back-button']}>back</button>
            <p className={styles['login-title']}>로그인</p>
          </nav>
        </header>
        <div>content</div>
        <div>form</div>
      </div>
    </Container>
  );
};

export default LoginPage;
