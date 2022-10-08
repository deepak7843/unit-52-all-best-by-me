import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Component/CartItem";
import Navbar from "../Component/Navbar";
import { getCartItems } from "../Redux/App/action";

const Cart = () => {
  const dispatach = useDispatch();

  const { cartData } = useSelector((state) => state.appReducer);
  console.log(cartData);

  useEffect(() => {
    dispatach(getCartItems());
  }, []);
  return (
    <>
      <Navbar />
      <Heading textAlign={"center"}>Cart Item</Heading>
      <Box className="tableContainer container">
        {cartData.map((ele, i) => (
          <CartItem key={i} item={ele} />
        ))}
      </Box>
    </>
  );
};

export default Cart;
