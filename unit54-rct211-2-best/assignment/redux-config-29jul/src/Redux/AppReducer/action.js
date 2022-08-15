import * as types from "./actionTypes";

const incrementCounter = (payload) => {
  return {
    type: types.INCREMENT_COUNTER,
    payload
  };
};

const decrementCounter = (payload) => {
  return {
    type: types.DECREMENT_COUNTER,
    payload
  };
};

// *******************


const getTodoRequest = () => {
  return { type: types.GET_TODO_LISTS_REQUEST };
};

const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_LISTS_SUCCESS, payload };
};

const getTodoFailure = (error) => {
  return { type: types.GET_TODO_LISTS_FAILURE, payload: error };
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


export { incrementCounter, decrementCounter,
  addTodoFailure,addTodoRequest,addTodoSuccess, getTodoFailure, getTodoSuccess, getTodoRequest

};
