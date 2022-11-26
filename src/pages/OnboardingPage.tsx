import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/common/Layout/PageLayout';

const OnboardingPage = () => {
  return (
    <PageLayout.Fit>
      <main>
        <h1>모여서 코딩하자</h1>
        <div>
          <Link to="/join">회원가입</Link>
          <div>
            이미 계정이 있나요? <Link to="/login">로그인</Link>
          </div>
        </div>
      </main>
    </PageLayout.Fit>
  );
};

export default OnboardingPage;
