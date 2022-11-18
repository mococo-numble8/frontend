import React from 'react';
import styles from './JoinPage.module.scss';
import SignUp from './SignUp';
import PageLayout from 'components/common/layout/PageLayout';
import Icon from 'components/common/Icon/Icon';

const JoinPage = () => {
  return (
    <PageLayout.Default
      title="회원가입"
      navigation
      navIcon={<Icon name="arrow-left" alt="arrow-left"></Icon>}
    >
      <SignUp />
    </PageLayout.Default>
  );
};

export default JoinPage;
