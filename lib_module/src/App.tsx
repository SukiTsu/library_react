import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccordionPage from './components/AccordionPage.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/counter' element={<div>Counter component here</div>} />
        <Route path='/accordeon' element={<AccordionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
