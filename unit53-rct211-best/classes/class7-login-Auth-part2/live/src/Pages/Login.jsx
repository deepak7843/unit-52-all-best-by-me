import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); ////  2-1-48
  const location = useLocation(); //// 2-14-28
  // console.log("location--", location);

  console.log("location---inside login page", location);

  const comingfrom = location.state?.from?.pathname || "/";  //// 2-16-55


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password })) /////
        ////
        .then((r) => {
          ///// 2-2-11 ----> only you can use .then if you have used return axios in action.js(in AuthReducer)
          console.log("r--", r);
          if (r.type === "USER_LOGIN_SUCCESS") {
            // navigate("/");
            // navigate(comingfrom);
            ///
            ///
            ///
            navigate(comingfrom, { replace: true }); ///// 2-17-15
            // navigate(-1, { replace: true }); ///// 2-39-15
          }
        });
    }
  };
  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
          />
        </div>

        <div>
          <label>User Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
          />
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
