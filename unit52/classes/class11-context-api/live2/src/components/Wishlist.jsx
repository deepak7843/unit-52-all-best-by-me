import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Wishlist = () => {
    // const {count, setCount}= useContext(CartContext)
    const {count}= useContext(CartContext)

  return <div>Wishlist : {count} </div>;
};  

export default Wishlist;
