import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComponentTestPage from './components/common/test/ComponentTestPage';
import TestContainer from './components/common/test/TestContainer';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/test"
        element={<ComponentTestPage>{<TestContainer />}</ComponentTestPage>}
      />
    </Routes>
  );
};

export default App;
