import React from "react";
import { Route, Routes } from "react-router-dom";
import Hotels from "./Hotels";
// import Singlehotel from "./Singlehotel";
import EditHotel from "./EditHotel";
// import RequireAuth from "../Components/RequireAuth";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import Admin from "./Admin";
import User from "./Hotels";
import Hotel from "./Hotels";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hotels />} />
      <Route path="/user/hotel" element={<Hotel/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/Register" element={<UserRegister />} />
      {/* <Route path="/hotels/:id" element={<Singlehotel />} /> */}

      {/* <Route path="/hotels/:id/edit" element={<Edithotel />} /> */}


      <Route
        path="/hotels/:id/edit"
        element={
          ////
          // <RequireAuth>
            <EditHotel />
          // </RequireAuth>
        }
      />

      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="*" element={<h1> page not found </h1>} />
    </Routes>
  );
};

export default MainRoutes;
