import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accordion from './components/organismes/accordion/Accordion';
import accordionConfig from './components/organismes/accordion/accordionConfig';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/accordion" element={<Accordion {...accordionConfig} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;