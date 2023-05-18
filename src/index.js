import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar/NavBar";
import ProductItem from "./components/productItems/ProductItem";
import "./index.css";
import LoginForm from "./components/loginForm/LoginForm";
import Rutas from "./components/Routes/Rutas.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <Rutas />
  </>
);
//productItems
//addProduct
//NavBard
