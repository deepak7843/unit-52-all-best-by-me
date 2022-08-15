
// NOTE: DO NOT MODIFY the intial state structure in this file.
import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType";
// import * as types from "./actionTypes";

const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WATCHES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case  GET_WATCHES_DATA_SUCCESS:
      return {
        ...state,
        watches: payload,
        isLoading: false,
        isError: false,
      };

    case GET_WATCHES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };













// // NOTE: DO NOT MODIFY the intial state structure in this file.
// import * as types from "./actionTypes";

// const initialState = {
//   watches: [],
//   isLoading: false,
//   isError: false,
// };

// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case types.GET_WATCHES_REQUEST:
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };

//     case types.GET_WATCHES_SUCCESS:
//       return {
//         ...state,
//         watches: payload,
//         isLoading: false,
//         isError: false,
//       };

//     case types.GET_WATCHES_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };

//     default:
//       return state;
//   }
// };

// export { reducer };
