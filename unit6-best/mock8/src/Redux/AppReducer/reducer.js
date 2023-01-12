import * as types from "./actionTypes";

const initialState = {
  hotels: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.GET_HOTELS_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.GET_HOTELS_SUCCESS:
        return {
          ...state,
          hotels: payload,
          isLoading: false,
          isError: false,
        };
  
      case types.GET_HOTELS_FAILURE:
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