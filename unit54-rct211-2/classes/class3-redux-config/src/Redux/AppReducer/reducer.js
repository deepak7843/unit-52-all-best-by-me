// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";
// import * as types from "./action";

import * as types from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";

const initialState = {
  // counter: 0,
  counter: loadData("counter") || 3,
  // todos: { id: 1, title: "Buy Milk", status: false }
  todos: [],
  isLoading: false,
  isError: false,
};

// console.log("...state.todos---", ...initialState.todos);

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case INCREMENT_COUNTER:
    case types.INCREMENT_COUNTER:
      let newCount = state.counter + payload;
      saveData("counter", newCount);
      return {
        ...state,
        // counter: state.counter + payload,
        counter: newCount,
        // todos: { ...state.todos }
      };

    // case DECREMENT_COUNTER:
    case types.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - payload };

      //////// ************************************/////



      case types.GET_TODO_LISTS_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.GET_TODO_LISTS_SUCCESS:
        return {
          ...state,
          todos: payload,
          isLoading: false,
          isError: false,
        };
  
      case types.GET_TODO_LISTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      //////// ************************************/////
  
      case types.ADD_TODO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.ADD_TODO_SUCCESS:
        let newTodos = [...state.todos, payload];
        return {
          ...state,
          todos: newTodos,
          isLoading: false,
          isError: false,
        };
  
      case types.ADD_TODO_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      //////// ************************************/////

    default:
      return state;
  }
};

export  {reducer};
