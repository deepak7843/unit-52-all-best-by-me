import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Watches from "./Watches";
import SingleWatch from "./SingleWatch";
import RequireAuth from "../Components/RequireAuth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Watches />} />;
      <Route path="/login" element={<Login />} />
      <Route
        path="/watches/:id"
        element={
          <RequireAuth> 
            <SingleWatch />
          </RequireAuth>
        }
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
