// const initialState = {
//   products: [],
//   isLoading: false,
//   isError: false,
// };

// export const reducer = (state = initialState) => {
//   return state;
// };


////////////  *****************    self *************************************************************************************************************************************************************************************************





import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};



const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.GET_PRODUCTS_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: payload,
          isLoading: false,
          isError: false,
        };
  
      case types.GET_PRODUCTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

    default:
        return state;
    }
  };

  export {reducer}
