import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Select from './components/atoms/select/Select'; 
import { selectConfig } from './components/atoms/select/SelectConfig'; 
import './App.css'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route  path="/select"  element={ <div> <Select {...selectConfig} /></div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
