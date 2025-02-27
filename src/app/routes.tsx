import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Root from './root';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
    </Routes>
  );
}

export default AppRoutes;
