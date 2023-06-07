import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar/NavBar";
import ProductItem from "./components/productItems/ProductItem";
import "./index.css";
import LoginForm from "./components/forms/loginForm/LoginForm";
import Rutas from "./components/Routes/Rutas.js";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ProductForm from "./components/forms/productForm/ProductForm.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <Rutas />
    <ProductForm />
  </>
);
//productItems
//addProduct
//NavBard
