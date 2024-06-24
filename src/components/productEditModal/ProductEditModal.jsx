import React, { useEffect } from "react";
import { usePutProductMutation } from "../../context/api/ProductApi";
import "./index.css"
const ProductEditModal = ({ data, setData }) => {
  let [updateProduct, { isLoading, isSuccess }] = usePutProductMutation();
 
useEffect(()=>{
    if(isSuccess){
        setData(null)
    }
},[isSuccess])

  const handleUpdateProduct = e => {
    e.preventDefault()
    let product = {
        title:data.title,
        price: data.price
    }
    updateProduct({id:data.id, body:product})
  }

  return (
    <>
      <div onClick={()=> setData(null)} className="edit__overlay"></div>
      <form onSubmit={handleUpdateProduct} className="edit__wrapper">
        <h2>Update Product</h2>
        <input
          value={data.title}
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
        />
        <input
          value={data.price}
          onChange={(e) =>
            setData((prev) => ({ ...prev, price: e.target.value }))
          }
          type="number"
        />
        <button disabled={isLoading}>{isLoading? "...Loading":"Save"}</button>
        <button  type="button" onClick={()=> setData(null)}>Cencel</button>
      </form>
    </>
  );
};

export default ProductEditModal;
