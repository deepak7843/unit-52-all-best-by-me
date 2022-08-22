import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProducts, getProducts } from "../Redux/action";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const

  const dodelete = (id) => {
    // return axios.delete(`http://localhost:8080/countries/${id}`).then(()=>{
    return axios.delete(`/products/${id}`).then(() => {
      dispatch(getProducts());
    });
  };

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{item.title}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div>
        <img
          data-cy="product-card-image"
          src={item.imageSrc}
          alt="Product"
          width="100%"
        />
      </div>
      <div data-cy="product-card-price">€ {item.price}</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button data-cy="delete-button" onClick={() => dodelete(item.id)}>
          Delete Product
        </button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        {/* <Link to={`/products/${singleProduct.id}`}> */}
        <Link to={`/edit/${item.id}`}>
          <button data-cy="edit-button" onClick={() => dispatch(addProducts)} >Edit Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
