import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CreateUser from "./pages/admin/create-user/CreateUser";
import ManageUser from "./pages/admin/manage-user/ManageUser";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="usercreate" element={<CreateUser />} />
          <Route path="usermanage" element={<ManageUser />} />
          <Route path="productcreate" element={<CreateProduct />} />
          <Route path="productmanage" element={<ManageProduct />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
