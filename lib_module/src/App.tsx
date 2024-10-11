import React from "react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import InputPage from "./pages/components/atoms/input/inputPage";
import CheckboxPage from "./pages/components/atoms/checkbox/checkboxPage";
import SelectPage from "./pages/components/atoms/select/selectPage";
import RadioPage from "./pages/components/atoms/radio/radioPage";
import TogglePage from "./pages/components/atoms/toggle/togglePage";
import ButtonPage from "./pages/components/atoms/button/buttonPage";
import LoaderPage from "./pages/components/atoms/loader/loaderPage";

import AlertPage from "./pages/components/molecules/alert/alertPage";
import BreadcrumbPage from "./pages/components/molecules/breadcrumb/breadcrumbPage";
import CardPage from "./pages/components/molecules/card/cardPage";

import AccordeonPage from "./pages/components/organismes/accordeon/accordeonPage";
import CarouselPage from "./pages/components/organismes/carousel/carouselPage";
import ModalPage from "./pages/components/organismes/modal/modalPage";
import TabsPage from "./pages/components/organismes/tabs/tabsPage";
import TableauPage from "./pages/components/organismes/tableau/tableauPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atoms/input" element={<InputPage />} />
        <Route path="/atoms/checkbox" element={<CheckboxPage />} />
        <Route path="/atoms/select" element={<SelectPage />} />
        <Route path="/atoms/radio" element={<RadioPage />} />
        <Route path="/atoms/toggle" element={<TogglePage />} />
        <Route path="/atoms/button" element={<ButtonPage />} />
        <Route path="/atoms/loader" element={<LoaderPage />} />

        <Route path="/molecules/alert" element={<AlertPage />} />
        <Route path="/molecules/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/molecules/card" element={<CardPage />} />

        <Route path="/organismes/accordeon" element={<AccordeonPage />} />
        <Route path="/organismes/carousel" element={<CarouselPage />} />
        <Route path="/organismes/modal" element={<ModalPage />} />
        <Route path="/organismes/tabs" element={<TabsPage />} />
        <Route path="/organismes/tableau" element={<TableauPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
