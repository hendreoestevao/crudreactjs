import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home/Home";
import Detalhes from "./pages/Detalhes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
    </Routes>
  </BrowserRouter>
);
