import React from 'react';
import Login from './Login';
import PageLayout from 'components/common/layout/PageLayout';
import Icon from 'components/common/Icon/Icon';

const LoginPage = () => {
  return (
    <PageLayout.Default
      title="로그인"
      navigation
      navIcon={<Icon name="arrow-left" alt="arrow-left" />}
    >
      <Login />
    </PageLayout.Default>
  );
};

export default LoginPage;
