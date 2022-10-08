import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const token = localStorage.getItem("token");
  // console.log(token)
  return (
    <Box className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/order"}>Order</Link>
      <Text>Token: {token}</Text>
    </Box>
  );
};

export default Navbar;
