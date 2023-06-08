import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const ProductItem = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    setProduct(data.result);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          name={p.name}
          color={p.color}
          size={p.size}
        />
      ))}
    </>
  );
};

// const ProductItem = () => {

// }

export default ProductItem;
