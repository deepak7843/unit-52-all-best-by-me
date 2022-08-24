import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { getProducts, updateProduct } from "../Redux/action";


const Editpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
 const {id}= useParams(); 
 console.log("id--",id);
 const products = useSelector((state) => state.products)

 const [title, setTitle]= useState("")
 const [price, setPrice]= useState("")
 const [currentProduct, setCurrentProduct]= useState("")
 console.log("currentProduct--", currentProduct);

 const handleUpdate= (id) => {
    const payload = {
      /// title, price

      "title": title, "price": price
    }
    dispatch(updateProduct(id, payload))
    dispatch(getProducts())
    navigate("/", {replace: true})
 }

useEffect(()=>{
  if(products.length===0){
    dispatch(getProducts())
  }
})
useEffect(()=>{
 if(id){
   const currentProduct= products.find(el=> el.id==id)
   currentProduct && setCurrentProduct(currentProduct)
 }
}, [id, products])

  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" defaultValue={currentProduct.title} onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" 
        defaultValue={currentProduct.price} onChange={(e)=>setPrice(e.target.value)}
        />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick={handleUpdate} >Update</button>
      </div>
    </div>
  );
};

export default Editpage;
