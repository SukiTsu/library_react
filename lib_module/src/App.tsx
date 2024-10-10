import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ButtonContainer from './components/atoms/button/ButtonContainer'
import React from 'react'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/button" element={<ButtonContainer />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
