import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Input from "./pages/components/atoms/input/input";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atoms/input" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
