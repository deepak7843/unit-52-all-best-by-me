import * as types from "./actionTypes";
import axios from "axios";

console.log("types--", types);

//action object creators

const getTodosRequest = () => {
  return { type: types.GET_TODOS_REQUEST };
};

const getTodosSuccess = (payload) => {
  return { type: types.GET_TODOS_SUCCESS, payload };
};

const getTodosFailure = () => {
  return { type: types.GET_TODOS_FAILURE };
};

// const getTodos = (dispatch) => {
  // function getTodos(dispatch) {

  const getTodos = payload => (dispatch) => {

  // dispatch(getTodosRequest());
  dispatch({ type: types.GET_TODOS_REQUEST });

  axios
    .get("/todos")
    .then((r) => {
      console.log("r.data--", r.data);
      return dispatch(getTodosSuccess(r.data));
    })
    .catch((e) => {
      console.log("e", e);
      return dispatch(getTodosFailure(e));
    });
};

//////////**********  23 to 36 is same as 40 to 55 *********************************///////////***** */
  ///// 1-49-15
// const getTodos = (payload) => {
//   function innerFunction(dispatch) {
//     dispatch(getTodosRequest());
//     axios
//       .get("/todos")
//       .then((r) => {
//         console.log("r.data--", r.data);
//         return dispatch(getTodosSuccess(r.data));
//       })
//       .catch((e) => {
//         console.log("e", e);
//         return dispatch(getTodosFailure(e));
//       });
//   }
//   return innerFunction;
// };

//// ***********************/////

const addTodosRequest = () => {
  return { type: types.ADD_TODOS_REQUEST };
};

const addTodosSuccess = (payload) => {
  return { type: types.ADD_TODOS_SUCCESS, payload };
};

const addTodosFailure = () => {
  return { type: types.ADD_TODOS_FAILURE };
};
//// ***********************/////

export {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  getTodos,
  addTodosRequest,
  addTodosFailure,
  addTodosSuccess,
};
