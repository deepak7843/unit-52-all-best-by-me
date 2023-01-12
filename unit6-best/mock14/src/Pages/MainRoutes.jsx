import React from "react";
import { Route, Routes } from "react-router-dom";

// import Login from "./Login";
import Homepage from "./Homepage";
import Quiz from "./Quiz";
import Result from "./Result";
// import Restaurant from "./Restaurant";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Result />} />

      

      <Route path="*" element={<h1> page not found </h1>} />
    </Routes>
  );
};

export default MainRoutes;
