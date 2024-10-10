import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Select from './components/atoms/select/Select'; 
import { selectConfig } from './components/atoms/select/SelectConfig'; 
import Accordion from './components/organismes/accordion/Accordion';
import accordionConfig from './components/organismes/accordion/accordionConfig';
import ButtonContainer from './components/atoms/button/ButtonContainer'
import Loader from './components/atoms/loaders/Loader'
import { loaderConfig } from './components/atoms/loaders/LoaderConfig'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
                <Route path="/accordion" element={<Accordion {...accordionConfig} />} />
                <Route path="/button" element={<ButtonContainer />} />
                <Route path="/loader" element={<Loader {...loaderConfig} />} />
                <Route  path="/select"  element={ <div> <Select {...selectConfig} /></div>} />


        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
