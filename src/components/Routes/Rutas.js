import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../forms/loginForm/LoginForm.js";
import ShoppingCart from "../shoppingCart/ShoppingCart.js";
import ProductCard from "../productCard/ProductCard.js";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/products" element={<ProductCard />} />
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
