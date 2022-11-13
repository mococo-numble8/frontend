import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'api/query/query-client';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './pages/HomePage';
import ComponentTestPage from './components/common/test/ComponentTestPage';
import TestContainer from './components/common/test/TestContainer';
import ModalSamplePage from 'pages/ModalSamplePage';
import ComponentSamplePage from 'pages/ComponentSamplePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import JoinPage from 'pages/JoinPage/JoinPage';
import ProfilePage from 'pages/ProfilePage';
import OnboardingPage from 'pages/OnboardingPage';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/test"
          element={<ComponentTestPage>{<TestContainer />}</ComponentTestPage>}
        />
        <Route path="/modal" element={<ModalSamplePage />} />
        <Route path="/components" element={<ComponentSamplePage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
