import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import Wishlist from "./Wishlist";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const {buy} = useContext(CartContext)

  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) logout();
          else login("R", "Z");
        }}
      >
        {isAuthorized ? "Logout" : "Login"}
      </button>

      <button onClick={buy} > Buy </button>

       {isAuthorized &&  <Wishlist />
 }
    </div>
  );
};

export default Navbar;
