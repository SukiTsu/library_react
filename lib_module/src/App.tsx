// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from './components/atoms/input/InputForm.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route pour le formulaire d'entrée */}
          <Route path="/input" element={<InputForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
