// import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";

// const reducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case INCREMENT_COUNTER:
//       return { ...state, counter: state.counter + payload };

//     case DECREMENT_COUNTER:
//       return { ...state, counter: state.counter - payload };
//     default:
//       return state;
//   }
// };

// export default reducer;

// ********************************************************************************************************************************************************************************************************************************************************

import * as types from "./actionTypes";

// const initialState= {
//    count: 0,
//    todos: [],
//    isLoading: false,
//    isError: false
// }

const initialState = {
  count: 0,
  data: {
    todos: [],
    isLoading: false,
    isError: false,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_COUNT:
      return { ...state, count: state.count + payload };

    case types.SUBSTRACT_COUNT:
      return { ...state, count: state.count - payload };

    //  case types.GET_TODO_REQUEST:
    //   return {...state, isLoading: true};

    //  case types.GET_TODO_SUCCESS:
    //   return {...state, todos: [...state.todos, ...payload ] ,
    //     //////***   imp  */
    //     isLoading: false, isError:false };

    //  case types.GET_TODO_FAILURE:
    //   return {...state, isLoading: false, isError: payload };

    case types.GET_TODO_REQUEST:
      return { ...state, data: { ...state.data, isLoading: true } };

    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          // todos: [...state.data.todos, ...payload],
          todos: payload,
          isLoading: false,
          isError: false,
        },
      };

    case types.GET_TODO_FAILURE:
      return {
        ...state,
        data: {
          ...state.data,

          isLoading: false,
          isError: payload,
        },
      };

    case types.ADD_TODO_REQUEST:
      return {
        ...state,
        data: { ...state.data, isLoading: true, isError: false },
      };

    case types.ADD_TODO_SUCCESS:
      return { ...state, data: { ...state.data, isLoading: false } };

    case types.ADD_TODO_FAILURE:
      return {
        ...state,
        data: { ...state.data, isLoading: false, isError: true },
      };

    default:
      return state;
  }
};

export default reducer;
