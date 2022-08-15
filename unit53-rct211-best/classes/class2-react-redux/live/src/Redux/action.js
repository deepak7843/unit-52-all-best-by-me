// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";

// const addCount = (payload) => {
//   return {
//     type: INCREMENT_COUNTER,
//     payload
//   };
// };

// const substractCount = (payload) => {
//   return {
//     type: DECREMENT_COUNTER,
//     payload
//   };
// };

// export { addCount, substractCount };

// ********************************************************************************************************************************************************************************************************************************************************

import * as types from "./actionTypes";

const addCount = (payload) => {
  return {
    type: types.ADD_COUNT,
    payload,
  };
};

const substractCount = (payload) => {
  return {
    type: types.SUBSTRACT_COUNT,
    payload,
  };
};

const getTodoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};

const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};

const getTodoFailure = (error) => {
  return { type: types.GET_TODO_FAILURE, payload: error };
};

// *******************

const addTodoRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
}

const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODO_SUCCESS, payload };
};

const addTodoFailure = (error) => {
  return { type: types.ADD_TODO_FAILURE, payload: error };
}

export {
  addCount,
  substractCount,
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure
}
