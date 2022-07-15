import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const location = useLocation();
    console.log("inside Required Auth", location);

  if (!isAuth) {
    //// 2-8-20
    // return <Navigate to="/login" />;     

    // return <Navigate to="/login" state={{ from: location}}  />
    return <Navigate to="/login" state={{ from: location}} replace />

  }
  return children;
};

export default RequireAuth;
