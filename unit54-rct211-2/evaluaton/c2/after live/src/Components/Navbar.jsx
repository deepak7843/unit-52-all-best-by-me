import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      data-testid="navbar"
      className="nav"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-testid="navbar-login-button" 
        className="login"
         >
          <Link to={`/login`} 
           className="login"
 >LOGIN</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
