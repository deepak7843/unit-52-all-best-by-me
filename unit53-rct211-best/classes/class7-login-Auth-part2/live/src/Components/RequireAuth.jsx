/////// this file start at 2-6-29

import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {

  console.log("children--", children);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  console.log("isAuth--", isAuth);

  const location = useLocation(); /// 2-13-42
  console.log("inside Required Auth", location);
  // console.log("location--", location);

  if (!isAuth) {
    //// 2-8-20
    // return <Navigate to="/login" />;

    // return <Navigate to="/login" state={{ from: location}}  />
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace //// 2-14-1
      />
    );
  }
  return children;
};

export default RequireAuth;
