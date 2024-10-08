import './App.css';
import Carousel from './components/organismes/Carousel';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const images = [
    '../public/10.png',
    '../public/20.png',
    '../public/30.png',
  ];
  return (
    <BrowserRouter>
      <Routes>
        {/* Rediriger la racine vers /carousel */}
        <Route path="/" element={<Navigate to="/carousel" replace />} />
        
        {/* Route pour le carousel */}
      <Route path='/carousel' element={<Carousel images={images}/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
