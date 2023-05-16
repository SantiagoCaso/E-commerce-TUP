import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar/NavBar";
import ProductItem from "./components/productItems/ProductItem";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <div id="products-container">
      <ProductItem />
    </div>
  </>
);
//productItems
//addProduct
//NavBard