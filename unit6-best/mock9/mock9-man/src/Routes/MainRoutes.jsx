import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../HOC/Auth";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Order from "../Pages/Order";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Auth>
            <Home />
          </Auth>
        }
      />
      <Route
        path="/cart"
        element={
          <Auth>
            <Cart />
          </Auth>
        }
      />
      <Route
        path="/order"
        element={
          <Auth>
            <Order />
          </Auth>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
