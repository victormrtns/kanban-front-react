import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import Boards from '../pages/Boards';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/boards" element={<Boards />} />
      </Routes>
    </BrowserRouter>
  )
}