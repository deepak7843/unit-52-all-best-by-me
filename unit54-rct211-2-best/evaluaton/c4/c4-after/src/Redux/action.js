//Write the action creator functions here

import * as types from "./actionTypes";
import axios from "axios";

const getProducts = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  axios
    .get("/products", params)
    .then((r) => {
      console.log("r.data--", r.data);
      return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      console.log("e", e);
      return dispatch({ type: types.GET_PRODUCTS_FAILURE });
    });
};

const addProducts = (payload) => (dispatch) => {
  // dispatch(getDataRequest());
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  // console.log("--", );

  axios
    .post("/products", payload)
    .then((r) => {
      console.log("r.data--", r.data);
      return dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      console.log("e", e);
      return dispatch({ type: types.ADD_PRODUCT_FAILURE });
    });
};

const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });

  axios
    .delete(`/products/${id}`)
    .then((r) => dispatch({ type: types.DELETE_PRODUCT_SUCCESS }))
    .catch((e) => dispatch({ type: types.DELETE_PRODUCT_FAILURE }));
};

const updateProduct = (id, payload) => (dispatch) => {
  dispatch({ type: types.EDIT_PRODUCT_REQUEST });

  return axios
    .patch(`/products/${id}`, payload, {
      headers: { "Access-Control-Allow-Methods": "PATCH" },
    })
    .then((r) => dispatch({ type: types.EDIT_PRODUCT_SUCCESS }))
    .catch((e) => dispatch({ type: types.EDIT_PRODUCT_FAILURE }));
};

const getProductSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

const sortAscending = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  axios
    .get(`/products`, params)
    .then((r) => dispatch(getProductSuccess(r.data.sort((a,b)=> a.price-b.price))))
    .catch((e)=>dispatch({type: types.GET_PRODUCTS_FAILURE}))
};

const sortDescending = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  axios
    .get(`/products`, params)
    .then((r) => dispatch(getProductSuccess(r.data.sort((a,b)=>b.price- a.price))))
    .catch((e)=>dispatch({type: types.GET_PRODUCTS_FAILURE}))
};

export { getProducts, addProducts, deleteProduct, updateProduct ,sortAscending,sortDescending};
