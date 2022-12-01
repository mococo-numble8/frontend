import React from 'react';
import PageLayout from '../../components/common/Layout/PageLayout';
import Icon from '../../components/common/Icon/Icon';
import Profile from './Profile';

const ProfilePage = () => {
  const navigationOption = {
    title: '프로필',
    left: {
      element: <Icon name="arrow-left" alt="뒤로가기" />,
      onClick: () => alert('clicked!'),
    },
    right: {
      element: '편집',
      onClick: () => alert('clicked!'),
    },
  };

  return (
    <PageLayout.Default navigation navigationOption={navigationOption}>
      <Profile />
    </PageLayout.Default>
  );
};

export default ProfilePage;
