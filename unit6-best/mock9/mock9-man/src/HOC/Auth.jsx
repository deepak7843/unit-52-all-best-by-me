import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = ({ children }) => {
  let location = useLocation();
  let isAuth = localStorage.getItem("isAuth")
  // console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else return children;
};

export default Auth;
