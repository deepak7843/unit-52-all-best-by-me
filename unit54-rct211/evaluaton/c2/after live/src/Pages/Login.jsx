import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); ////  
  const location = useLocation(); //// 
  console.log("location--", location);

  const comingfrom = location.state?.from?.pathname || "/"; 

  console.log("inside login page", location);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password })) /////
        ////
        .then((r) => {
        
          console.log("r--", r);
          if (r.type === "LOGIN_SUCCESS") {
   
            navigate(comingfrom, { replace: true });
          }
        });
    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
