import React from 'react';
import styles from './JoinPage.module.scss';
import SignUp from './SignUp';
import Navigation from 'components/common/navigation/Navigation';
import PageLayout from 'components/common/layout/PageLayout';

const JoinPage = () => {
  return (
    <PageLayout.Default title="회원가입" navigation onboarding>
      <div className={styles.container}>
        <SignUp />
      </div>
    </PageLayout.Default>
  );
};

export default JoinPage;
