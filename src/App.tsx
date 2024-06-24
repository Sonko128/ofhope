import React from 'react';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Photos from './components/photos/Phtotos';
import Videos from './components/video/Video';
import Donate from './components/donate/Donate';

function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/photos' element={<Photos />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/donate' element={<Donate />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App; 
