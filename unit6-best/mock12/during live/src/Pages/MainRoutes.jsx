import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Homepage from "./Homepage";
import ReqAuth from "../Components/ReqAuth";
import { Stack } from "@chakra-ui/react";
import Signup from "./Signup";
import AddStudent from "./AddStudent";
import MainPage from "./MainPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/teacher/signup"
        element={
         <Signup />
        }
      />

      <Route path="/teacher/login" element={<Login />} />
      <Route path="/teacher/add" element={<AddStudent />} />
      <Route path="/mainPage" element={<MainPage />} />

      <Route path="*" element={<h1> page not found </h1>} />
    </Routes>
  );
};

export default MainRoutes;
