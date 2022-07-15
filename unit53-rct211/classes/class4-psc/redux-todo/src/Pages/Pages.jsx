import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import SingleTodo from "./SingleTodo";
import EditTodo from "./EditTodo";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/todo/:id" element={<SingleTodo />} />
      <Route path="/todo/:id/edit" element={<EditTodo />} />

    </Routes>
  );
};

export default Pages;
