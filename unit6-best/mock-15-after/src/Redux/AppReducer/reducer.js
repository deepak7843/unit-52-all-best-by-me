import * as types from "./actionTypes";

const initialState = {
  word: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("line14", payload);
  switch (type) {

    case types.GET_WORD_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.GET_WORD_SUCCESS:
        return {
          ...state,
          word: payload.word,
          isLoading: false,
          isError: false,
        };
  
      case types.GET_WORD_FAILURE:
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