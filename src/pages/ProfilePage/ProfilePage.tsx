import React from 'react';
import PageLayout from '../../components/common/layout/PageLayout';
import Icon from '../../components/common/Icon/Icon';
import Profile from './Profile';

const ProfilePage = () => {
  return (
    <PageLayout.Default
      title="프로필"
      navigation
      navIcon={<Icon name="arrow-left" alt="arrow-left" />}
    >
      <Profile />
    </PageLayout.Default>
  );
};

export default ProfilePage;
