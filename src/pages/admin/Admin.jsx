import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./admin.css";

const Admin = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    navigate("/login");
  };

  return (
    <div className='admin container'>
      <div className="admin__sidebar">
        <ul>
          <li><Link to="usercreate">Create User</Link></li>
          <li><Link to="usermanage">Manage User</Link></li>
          <li><Link to="productcreate">Create Product</Link></li>
          <li><Link to="productmanage">Manage Product</Link></li>
        </ul>
      </div>
      <div className="admin__content">
        <Outlet/>
        <button className='admin__btn' onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Admin;
