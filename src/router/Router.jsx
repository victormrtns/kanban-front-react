import React from 'react';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Boards from '../pages/Boards';
import HomePage from '../pages/home';
import BoardPage from '../pages/BoardPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/boards/:id" element={<BoardPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

// Wrapper component to pass route params to BoardPage
const BoardPageWrapper = () => {
  let { id } = useParams();
  return <BoardPage id={id} />;
};

export default Router;
