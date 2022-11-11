import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComponentTestPage from './components/common/test/ComponentTestPage';
import TestContainer from './components/common/test/TestContainer';
import ModalSamplePage from 'pages/ModalSamplePage';
import ComponentSamplePage from 'pages/ComponentSamplePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import JoinPage from 'pages/JoinPage';
import ProfilePage from 'pages/ProfilePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/test"
        element={<ComponentTestPage>{<TestContainer />}</ComponentTestPage>}
      />
      <Route path="/modal" element={<ModalSamplePage />} />
      <Route path="/components" element={<ComponentSamplePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
