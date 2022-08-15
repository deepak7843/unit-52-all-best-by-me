import React from "react";
import "./Button.css";

const Button = ({ children, variant, colorScheme, clickHandler }) => {
  return (
    <button
    
      data-testid="cButton"
      // className={`btn ${colorScheme || "red"}`}

      className={`btn ${colorScheme || "red"} ${variant || "ghost"}` }

      // {variant || "ghost"}
      // onClick={onClick}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
