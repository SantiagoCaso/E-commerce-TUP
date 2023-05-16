import "./ProductItem.css";

const ProductItem = () => {
  return (
    <div className="product">
      <img className="img-products" alt="imagen-del-producto"></img>
      <h3>Nombre del producto</h3>
      <p>Descripción</p>
      <p>Precio</p>
      <p>Stok</p>
    </div>
  );
};

export default ProductItem;
