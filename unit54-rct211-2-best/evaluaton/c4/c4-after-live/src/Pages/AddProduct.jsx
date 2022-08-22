import React, { useEffect, useState } from "react";
import { addProducts, getProducts } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [title,setTitle]= useState("")
  const [category,setCategory]= useState("")
  const [image,setImage]= useState("")
  const [price,setPrice]= useState("")

  console.log(title, category,price,image);

  const handleAdd = ()=>{

  const payload = {
     "title": title,
     "imageSrc": image,
     "price": price,
     "category": category,

  }
  dispatch(getProducts())
  dispatch(addProducts(payload))
  navigate("/")
}

// useEffect(() => {
//   dispatch(addProducts)
// })
  
  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <div>
          <label>Product title</label>
          <input data-cy="add-product-title" type="text" />
        </div>
        <div onChange={(e)=> setCategory(e.target.value)} >
          <label>Product Category</label>
          <select data-cy="add-product-category">
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
            onChange={(el)=> setImage(el.target.value)}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input data-cy="add-product-price" type="text" onChange={(e)=> setPrice(e.target.value)} />
        </div>
        <div>
          <button data-cy="add-product-button"  onClick={handleAdd} >Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
