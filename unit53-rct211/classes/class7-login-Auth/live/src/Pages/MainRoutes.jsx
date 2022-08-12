import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "./Books";
import SingleBook from "./SingleBook";
import EditBook from "./EditBook";
import Login from "./Login";
import RequireAuth from "../Components/RequireAuth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />

      {/* <Route path="/books/:id/edit" element={<EditBook />} /> */}

      <Route
        path="/books/:id/edit"
        element={
          ////
          //// 2-8-44
          <RequireAuth>
            <EditBook />
          </RequireAuth>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1> page not found </h1>} />
    </Routes>
  );
};

export default MainRoutes;
