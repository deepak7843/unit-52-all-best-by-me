import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import ReqAuth from "../Components/ReqAuth";
import Sidebar from "../Components/Sidebar";
import { Stack } from "@chakra-ui/react";
import Editpage from "./Editpage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Stack direction="row">
              <Sidebar />
              <Homepage />
            </Stack>
          </ReqAuth>
        }
      />

      <Route
        path="/task/:id"
        element={
          <ReqAuth>
            <Stack direction="row">
              <Sidebar />
              <Editpage />
            </Stack>
          </ReqAuth>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<h1> page not found </h1>} />

    </Routes>
  );
};

export default MainRoutes;
