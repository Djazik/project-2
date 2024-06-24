import React, { useEffect, useState } from "react";
import { usePostProductMutation } from "../../../context/api/ProductApi";
import "./createProduct.css"
const initialState = {
  title: "",
  price: "",
};

const CreateProduct = () => {
  const [createProduct, { isLoading, isSuccess }] = usePostProductMutation();

  const [newProduct, setNewProduct] = useState(initialState);

  useEffect(() => {
    if (isSuccess) {
      setNewProduct(initialState);
    }
  }, [isSuccess]);
  const handleCreateProduct = (e) => {
    e.preventDefault();
    createProduct(newProduct);
  };
  return (
    <div className="pr__body">
      <div className="product__wrapper">
      <h2>Create Product</h2>
      <form className="create__form" onSubmit={handleCreateProduct} action="">
        <input 
        className="create__input"
          type="text"
          value={newProduct.title}
          placeholder="Title"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
        className="create__input"

          type="number"
          value={newProduct.price}
          placeholder="Price"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: e.target.value }))
          }
        />
        <button className="create__btn" type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>

 
    </div>
    </div>
  );
};

export default CreateProduct;
