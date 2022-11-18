import React from 'react';
import styles from './LoginPage.module.scss';
import Container from 'components/common/Containers/Container';
import TextInput from 'components/common/Inputs/TextInput';
import ToggleButton from 'components/common/Buttons/ToggleButton';
import Button from 'components/common/Buttons/Button';
import Login from './Login';
import PageLayout from 'components/common/layout/PageLayout';

const LoginPage = () => {
  return (
    <PageLayout.Default title="로그인" navigation>
      <Login />
    </PageLayout.Default>
  );
};

export default LoginPage;
