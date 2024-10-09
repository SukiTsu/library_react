import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Carousel
import {images, interval, showcontrols} from './components/organismes/carousel/Carousel_data';
import Carousel from './components/organismes/carousel/Carousel';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Rediriger la racine vers /carousel */}
        <Route path="/" element={<Navigate to="/carousel" replace />} />
        
        {/* Route pour le carousel */}
        <Route path='/carousel' element={<Carousel images={images} interval={interval} showControls={showcontrols} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
