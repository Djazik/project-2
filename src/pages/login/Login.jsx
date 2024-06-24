import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../context/authApi";
import "./login.css";
import {  toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    let user = {
      username,
      password,
    };
    
    axios
      .post("auth/login", user)
      .then((res) => {
        console.log(res)
        toast.success("Welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin")
      })
      .catch((err) => {
        console.log(err)
        toast.error("username or password is incorrect")
      })
      .finally(()=> setLoading(false))
  };
  return (
    <div className="login__body">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>{loading? "...Loading" : "Log in"}</button>
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

