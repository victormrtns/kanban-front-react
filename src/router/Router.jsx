import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import Boards from '../pages/Boards';
import HomePage from '../pages/home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/boards" element={<Boards />} />
      </Routes>
    </BrowserRouter>
  )
}