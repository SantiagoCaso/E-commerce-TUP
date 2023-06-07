import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "./ProductForm.css";

const BookForm = ({ onBookAdded, onHideForm }) => {
  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Check form");
      setFormValid(productName && size && color);
    }, 500);

    return () => {
      console.log("Cleanup");
      clearTimeout(timer);
    };
  }, [productName, size, color]);

  const changeTitleHandler = (event) => {
    setProductName(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setSize(event.target.value);
  };

  const changePageCountHandler = (event) => {
    setColor(event.target.value);
  };

  const addBookHandler = (event) => {
    event.preventDefault();
    const newBook = {
      id: Math.random(),
      productName,
      size,
      color,
    };
    onBookAdded(newBook);
  };

  //   const hideFormHandler = (event) => {
  //     event.preventDefault();
  //     onHideForm();
  //   };

  return (
    <form>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Nombre del producto</label>
          <input
            onChange={changeTitleHandler}
            type="text"
            className="input-control"
          />
        </div>
        <div className="new-book-control">
          <label>Color</label>
          <input
            onChange={changeAuthorHandler}
            type="text"
            className="input-control"
          />
        </div>
        <div className="new-book-control">
          <label>Talle</label>
          <input
            onChange={changePageCountHandler}
            type="number"
            className="input-control"
            min="1"
            step="1"
          />
        </div>
      </div>
      <div className="new-book-actions">
        {/* <button onClick={hideFormHandler}>Cancelar</button> */}
        <Button disabled={!formValid} onClick={addBookHandler}>
          Agregar Producto
        </Button>
      </div>
    </form>
  );
};

export default BookForm;
