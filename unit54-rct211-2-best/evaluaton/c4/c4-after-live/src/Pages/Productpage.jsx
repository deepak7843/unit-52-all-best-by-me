import React from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import {getProducts} from "../Redux/action"
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Productpage = () => {


const products= useSelector((state)=> state.products)
const dispatch = useDispatch();
const [searchParams] = useSearchParams();


const location = useLocation(); 
console.log("location--", location);

console.log("products--", products);

useEffect(
  () => {
    if (products.length === 0 || location.search) {
      const sortBy = searchParams.get("sortBy"); 
      let getProductsParams = {
        params: {
          // category: searchParams.getAll("category"),
          category: searchParams.getAll("cat"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      console.log("getProductsParams--", getProductsParams); ///// 49-45

      dispatch(getProducts(getProductsParams));
    }
  },
  //  [products.length, dispatch, location.search, searchParams]
  [location.search]
);

  return (
    <div style={{ width: "100%" }}>
      <div className="productlist" >
      {products.length > 0 &&
        products.map((singleProduct) => {
          //   console.log("singleBook--", singleBook);
          return (
            <ProductCardWrapper key={singleProduct.id}  >
              {/* <Link to={`/products/${singleProduct.id}`}> */}
                <ProductCard item={singleProduct} />{" "}
              {/* </Link> */}
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
  border: 1px solid blue;
  padding: 5px;
  width: 310px;
  display: flex;
`;