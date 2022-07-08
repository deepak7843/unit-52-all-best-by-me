import React from "react";
import { useTimeout } from "../Hooks/useTimeout";

const TestComponent = () => {
    const ready3= useTimeout(5000);

  return (
    <div>
      <h3> TestComponent</h3>
      <div> {ready3 ? "Ready3" : "Not-Ready3"} </div>
    </div>
  );
};

export default TestComponent;
