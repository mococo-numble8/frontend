import React from 'react';
import Login from './Login';
import PageLayout from 'components/common/Layout/PageLayout';
import Icon from 'components/common/Icon/Icon';

const LoginPage = () => {
  const navigationOption = {
    title: '로그인',
    left: {
      element: <Icon name="arrow-left" alt="뒤로가기" />,
      onClick: () => alert('clicked!'),
    },
  };

  return (
    <PageLayout.Default navigation navigationOption={navigationOption}>
      <Login />
    </PageLayout.Default>
  );
};

export default LoginPage;
