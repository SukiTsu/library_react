import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accordion from './components/organismes/accordion/Accordion';
import accordionConfig from './components/organismes/accordion/accordionConfig';
import ButtonContainer from './components/atoms/button/ButtonContainer'
import Loader from './components/atoms/loaders/Loader'
import { loaderConfig } from './components/atoms/loaders/LoaderConfig'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/accordion" element={<Accordion {...accordionConfig} />} />
                <Route path="/button" element={<ButtonContainer />} />
                <Route path="/loader" element={<Loader {...loaderConfig} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;