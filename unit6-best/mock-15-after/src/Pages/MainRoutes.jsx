import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import { Stack } from "@chakra-ui/react";

import table from "./Table"
import Dashboard from "./Dashboard";
import Playzone from "./Playzone"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/playzone" element={<Playzone />} />
      <Route path="/dashboard" element={<Dashboard />} />
    

      <Route path="*" element={<h1> page not found </h1>} />
    </Routes>
  );
};

export default MainRoutes;
