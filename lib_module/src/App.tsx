import "prismjs/themes/prism-tomorrow.css"; // Thème sombre
import "prismjs/plugins/line-numbers/prism-line-numbers.css"; // Numéros de ligne
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"; // Plugin de copier-coller

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Input from "./pages/components/atoms/input/input";
import Checkbox from "./pages/components/atoms/checkbox/checkbox";
import Select from "./pages/components/atoms/select/select";
import Radio from "./pages/components/atoms/radio/radio";
import Toggle from "./pages/components/atoms/toggle/toggle";
import Button from "./pages/components/atoms/button/button";
import Loader from "./pages/components/atoms/loader/loader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atoms/input" element={<Input />} />
        <Route path="/atoms/checkbox" element={<Checkbox />} />
        <Route path="/atoms/select" element={<Select />} />
        <Route path="/atoms/radio" element={<Radio />} />
        <Route path="/atoms/toggle" element={<Toggle />} />
        <Route path="/atoms/button" element={<Button />} />
        <Route path="/atoms/loader" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
