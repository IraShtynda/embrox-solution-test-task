import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TVshowsList } from './pages/TVshowsList';
import { TVshowDetails } from './pages/TVshowDetails';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => (
  <Routes>
    <Route path='/' element={<TVshowsList />} />
    <Route path='/show/:showId' element={<TVshowDetails />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);
