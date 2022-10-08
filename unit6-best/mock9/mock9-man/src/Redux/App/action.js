import * as types from "./actionTypes";
import axios from "axios";

export const getRestaurants = (payload) => (dispatch) => {
  dispatch({ type: types.GET_RESTAURANTS_REQUEST });
  return axios
    .get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=20&page=1"
    )
    .then((res) => {
      // console.log(res)
      dispatch({ type: types.GET_RESTAURANTS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.GET_RESTAURANTS_FAILURE, payload: err })
    );
};

export const addToCart = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_CART_REQUEST });
  return axios
    .post("https://dsd-heroku.herokuapp.com/cart", payload)
    .then((res) => {
      dispatch({ type: types.ADD_CART_SUCCESS, payload: res });
      return { status: types.ADD_CART_SUCCESS, message: "Item added to cart" };
    })
    .catch((err) => dispatch({ type: types.ADD_CART_FAILURE, payload: err }));
};

export const getCartItems = (payload) => (dispatch) => {
  dispatch({ type: types.GET_CART_ITEMS_REQUEST });
  return axios
    .get("https://dsd-heroku.herokuapp.com/cart")
    .then((res) => {
      //   console.log(res);
      dispatch({ type: types.GET_CART_ITEMS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.GET_CART_ITEMS_FAILURE, payload: err })
    );
};

export const deleteCartItem = (id) => (dispatch) => {
  return axios
    .delete(`https://dsd-heroku.herokuapp.com/cart/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_CART_ITEM, payload: res });
      return {
        status: types.DELETE_CART_ITEM,
        message: "Item successfully deleted ",
      };
    });
};


export const filterType = (payload) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?filter=${payload}&limit=20&page=1`
    )
    .then((res) =>{
      console.log(res);
      dispatch({ type: types.FILTER_TYPE, payload: res.data })}
    
    )
    .catch((err) => console.log(err));
};

export const ratingSortAsc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?sort=rating&order=${order}&limit=20&page=1`
    )
    .then((res) => dispatch({ type: types.SORT_ASC_RATING, payload: res.data }))
    .catch((err) => console.log(err));
};

export const ratingSortDesc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-
      api.ap-south-1.amazonaws.com/mockapi/getrestaurants?sort=rating&order=${order}&limit=20&page=1`
    )
    .then((res) =>
      dispatch({ type: types.SORT_DESC_RATING, payload: res.data })
    )
    .catch((err) => console.log(err));
};

export const priceSortAsc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?sort=price_starts_from&order=${order}&limit=20&page=1`
    )
    .then((res) => dispatch({ type: types.SORT_ASC_PRICE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const priceSortDesc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?sort=price_starts_from&order=${order}&limit=20&page=1`
    )
    .then((res) => dispatch({ type: types.SORT_DESC_PRICE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const nextPageAction = (payload) => (dispatch) => {
  console.log(payload);
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${payload}&limit=20`
    )
    .then((res) => dispatch({ type: types.NEXT_PAGE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const prevPageAction = (page) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=20`
    )
    .then((res) => dispatch({ type: types.PREV_PAGE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const filterSortAction = (filter, sort, type) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=20&filter=${filter}&sort=${type}&order=${sort}`
    )
    .then((res) => dispatch({ type: types.FILTER_SORT, payload: res.data }))
    .catch((err) => console.log(err));
};

export const filterPaginationAction = (filter, page) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=20&filter=${filter}`
    )
    .then((res) => dispatch({ type: types.FILTER_PAGINATION, payload: res.data }))
    .catch((err) => console.log(err));
};
