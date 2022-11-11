import React from 'react';
import Container from 'components/common/Containers/Container';
import styles from './JoinPage.module.scss';
import SelectLocation from 'pages/JoinPage/SelectLocation';
import SignUp from './SignUp';
// interface PropsType {}

const JoinPage = () => {
  return (
    <Container isLogin>
      <div className={styles.container}>
        <nav className={styles['header-nav']}>
          <button className={styles['back-button']}>back</button>
          <p className={styles['join-title']}>회원가입</p>
        </nav>
        {/*<SelectLocation />*/}
        <SignUp />
      </div>
    </Container>
  );
};

export default JoinPage;
