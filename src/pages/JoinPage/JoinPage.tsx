import React from 'react';
import styles from './JoinPage.module.scss';
import SignUp from './SignUp';
import PageLayout from 'components/common/layout/PageLayout';

const JoinPage = () => {
  return (
    <PageLayout.Default title="회원가입" navigation>
      <SignUp />
    </PageLayout.Default>
  );
};

export default JoinPage;
