import React, { useState } from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { getProducts } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Productpage = () => {
  const [searchParams] = useSearchParams();
  const urlSort = searchParams.get("sortBy");
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log("urlSort--", urlSort);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // let newProducts =
  console.log("products--", products);

  return (
    <div style={{ width: "100%" }}>
      <div className="productlist">
        {/* if(urlSort&&urlSort==="asc")
        {products.sort(function (a, b) {
          return a.price - b.price;
        })}
        else if(urlSort&&urlSort==="desc")
        {products.sort(function (a, b) {
          return b.price - a.price ;
        })} */}
        {products.map((singleProduct) => {
          return (
            <ProductCardWrapper key={singleProduct.id}>
              <ProductCard item={singleProduct} />{" "}
            </ProductCardWrapper>
          );
        })}
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        ////
        ////
        ////
        ////
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
      </div>
    </div>
  );
};

export default Productpage;

const ProductCardWrapper = styled.div`
  border: 1px solid red;
  padding: 5px;
  width: 310px;
  display: flex;
`;
