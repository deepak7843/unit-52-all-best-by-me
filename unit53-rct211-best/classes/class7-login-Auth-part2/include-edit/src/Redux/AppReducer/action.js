import * as types from "./actionTypes";
import axios from "axios";

// console.log("types--", types);

//action object creators

// const getTodosRequest = () => {
//   return { type: types.GET_TODOS_REQUEST };
// };

// const getTodosSuccess = (payload) => {
//   return { type: types.GET_TODOS_SUCCESS, payload };
// };

// const getTodosFailure = () => {
//   return { type: types.GET_TODOS_FAILURE };
// };




// const getBooks = payload => (dispatch) => {
    const getBooks = ( params) => (dispatch) => {

    // dispatch(getbooksRequest());
    dispatch({ type: types.GET_BOOKS_REQUEST });
  
    axios
      .get("/books", params)
      .then((r) => {
        // console.log("r.data--", r.data);
        return dispatch({ type: types.GET_BOOKS_SUCCESS, payload:r.data });
      })
      .catch((e) => {
        // console.log("e", e);
        return dispatch({ type: types.GET_BOOKS_FAILURE });
      });
  };



  /////*** */
  /////*** */
  /////*** */

  const updateBookRecord= (id,payload) => (dispatch)=> {
    dispatch({ type: types.UPDATE_BOOK_RECORD_REQUEST})

    return axios
      .patch(`/books/${id}`, payload,{headers:{"Access-Control-Allow-Methods": "PATCH"}} )
      .then((r)=> dispatch({ type: types.UPDATE_BOOK_RECORD_SUCCESS}))
      .catch((e)=> dispatch({ type: types.UPDATE_BOOK_RECORD_FAILURE}))
  }

  // export {getBooks }
  export {getBooks , updateBookRecord}