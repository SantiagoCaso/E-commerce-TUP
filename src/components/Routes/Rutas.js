import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../loginForm/LoginForm.js";
import ProductItem from "../productItems/ProductItem.js";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/products" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
