import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline ,IoPersonOutline} from "react-icons/io5";

import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/615px-Food_Network_New_Logo 2.svg";
import SearchSection from "./SearchSection";
import { useGetSearchProductsQuery } from "../../context/apii/ProductsApii";

const Navbar = () => {
  // const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState("")
  let {data}  = useGetSearchProductsQuery({q: value})
  console.log(data)
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__item">
          <NavLink className="navbar__logo" to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
          {/* <NavLink to={"/admin/productcreate"}>
         <span>Createproduct</span>
        </NavLink>
        <NavLink to={"/admin/productmanage"}>
         <span>Manageproduct</span>
        </NavLink>
        <NavLink to={"/admin/usercreate"}>
         <span>Createuser</span>
        </NavLink>
        <NavLink to={"/admin/usermanage"}>
         <span>Manageuser</span>
        </NavLink> */}
        </div>
        <div className="navbar__search">
          <input 
          // onFocus={()=> setShowSearch(true)}
          // onBlur={()=> setShowSearch(false)}
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text" 
          placeholder="Search..." />
          <button>Search</button>
          {
            // showSearch
             value.trim() ?
            <SearchSection data={data?.products}/>
            : <></>
          }
        </div>
        <div className="navbar__carts">
          <NavLink to={"/wishlist"}>
            <FaRegHeart />
          </NavLink>
          <NavLink to={"/cart"}>
            <IoCartOutline />
          </NavLink>

          <NavLink to={"/login"}>
            <span><IoPersonOutline /></span>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
