import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accordion from './components/organismes/accordion/Accordion';
import accordionConfig from './components/organismes/accordion/accordionConfig';
import ButtonContainer from './components/atoms/button/ButtonContainer'


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/accordion" element={<Accordion {...accordionConfig} />} />
                <Route path="/button" element={<ButtonContainer />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;