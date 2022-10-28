import React from 'react';
import './ComponentTestPage.scss';

interface PropsType {
  children: React.ReactNode;
}

const ComponentTestPage = ({ children }: PropsType) => {
  return (
    <div className="container">
      <h1>컴포넌트 테스트 페이지 입니다:)</h1>
      <div>{children}</div>
    </div>
  );
};

export default ComponentTestPage;
