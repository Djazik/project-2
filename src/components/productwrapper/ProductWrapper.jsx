import { memo, useState } from "react";
import "./index.css";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDeleteProductMutation } from "../../context/api/ProductApi";
import ProductEditModal from "../productEditModal/ProductEditModal";

export const ProductWrapper = ({ products, isAdmin }) => {
  const [editProduct, setEditProduct] = useState(null)

  let [deleteProduct, { isLoading }] = useDeleteProductMutation();



  let productItem = products?.map((product) => (
    <div key={product.id} className="product__cart">
      <div className="product__img">
        <img src={product.avatar} alt={product.title} />
      </div>
      <div className="product__title">
        <h2 className="pr__title">{product.title}</h2>
        <p>{product.price}$</p>
      </div>
      <p className="pr__text">There are many things are needed to start the Fast Food Business.</p>
      <div className="product__btn">
        {isAdmin ? (
          <div className="pr__edit">
            <button className="product__edit" onClick={()=> setEditProduct(product)}>edit</button>
            <button className="product__edit" onClick={() => deleteProduct(product.id)}>
              delete
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="pr__icon">
        <button className="pr__btn_icon" ><IoCartOutline/></button>
        <button className="pr__btn_icon"><FaRegHeart/></button>
        </div>
      </div>
    </div>

  
  ));
  return (
    <div>
      <section className="container">
        <div className="menu__wrapper">
          <div className="menu">
            <h2 className="menu__title">Menu</h2>
            <h3 className="menu__text">Food Full of treaty Love</h3>
            <p className="menu_long__text">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers,
            </p>
          </div>
          <div className="pr__cart">{productItem}</div>
        </div>
      </section>
     {editProduct ? <ProductEditModal data={editProduct} setData={setEditProduct} /> : <></>}
    </div>
  );
};

export default memo(ProductWrapper);
