import './App.css';
import MonComposant from './components/organismes/MonComposant';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/counter' element={<MonComposant />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
