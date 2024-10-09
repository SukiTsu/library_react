import "prismjs/themes/prism-tomorrow.css"; // Thème sombre
import "prismjs/plugins/line-numbers/prism-line-numbers.css"; // Numéros de ligne
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"; // Plugin de copier-coller

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
