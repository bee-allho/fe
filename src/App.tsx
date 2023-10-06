// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import Footer from 'components/footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from 'components/about/About';

const redirectToMainPage = () => {
  if (false) {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/" />;
  }
};

function App() {
  return (
    <>
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={redirectToMainPage()} />
      <Route path="/*" element={<Router />} />
    </Routes>
    </BrowserRouter>
    </>
    <>
    </>
    </>
  );
}

export default App;


