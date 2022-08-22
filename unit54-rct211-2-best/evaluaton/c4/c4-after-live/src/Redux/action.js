//Write the action creator functions here


import * as types from "./actionTypes";
import axios from "axios";


const getProducts = ( ) => (dispatch) => {

    // dispatch(getDataRequest());
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    // console.log("--", );

  
    axios
      .get("/products" )
      .then((r) => {
        console.log("r.data--", r.data);
        return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload:r.data });
      })
      .catch((e) => {
        console.log("e", e);
        return dispatch({ type: types.GET_PRODUCTS_FAILURE });
      });
  };


  const addProducts = ( ) => (dispatch) => {

    // dispatch(getDataRequest());
    dispatch({ type: types.ADD_PRODUCT_REQUEST });
    // console.log("--", );

  
    axios
      .post("/products" )
      .then((r) => {
        console.log("r.data--", r.data);
        return dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload:r.data });
      })
      .catch((e) => {
        console.log("e", e);
        return dispatch({ type: types.ADD_PRODUCT_FAILURE });
      });
  };
  export {getProducts, addProducts}