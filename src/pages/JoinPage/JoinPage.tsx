import React from 'react';
import SignUp from './SignUp';
import PageLayout from 'components/common/Layout/PageLayout';
import Icon from 'components/common/Icon/Icon';

const JoinPage = () => {
  const navigationOption = {
    title: '회원가입',
    left: {
      element: <Icon name="arrow-left" alt="뒤로가기" />,
      onClick: () => alert('clicked!'),
    },
  };

  return (
    <PageLayout.Default navigation navigationOption={navigationOption}>
      <SignUp />
    </PageLayout.Default>
  );
};

export default JoinPage;
