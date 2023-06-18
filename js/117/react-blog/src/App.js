import './App.css';
import React, { useState } from 'react'
import Header from './Header'
import BlogList from './BlogList';
import Blog from './Blog';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<BlogList />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace="true" />} />
      </Routes>

      <Outlet />
    </>
  )
}
