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

import Alert from "./pages/components/molecules/alert/alert";
import Breadcrumb from "./pages/components/molecules/breadcrumb/breadcrumb";
import Card from "./pages/components/molecules/card/card";

import Accordeon from "./pages/components/organismes/accordeon/accordeon";
import Carousel from "./pages/components/organismes/carousel/carousel";
import Modal from "./pages/components/organismes/modal/modal";
import Tabs from "./pages/components/organismes/tabs/tabs";
import Tableau from "./pages/components/organismes/tableau/tableau";

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

        <Route path="/molecules/alert" element={<Alert />} />
        <Route path="/molecules/breadcrumb" element={<Breadcrumb />} />
        <Route path="/molecules/card" element={<Card />} />

        <Route path="/organismes/accordeon" element={<Accordeon />} />
        <Route path="/organismes/carousel" element={<Carousel />} />
        <Route path="/organismes/modal" element={<Modal />} />
        <Route path="/organismes/tabs" element={<Tabs />} />
        <Route path="/organismes/tableau" element={<Tableau />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
