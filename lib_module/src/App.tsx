import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/atoms/loaders/Loader'
import { loaderConfig } from './components/atoms/loaders/LoaderConfig'



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/loader" element={<Loader {...loaderConfig} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
