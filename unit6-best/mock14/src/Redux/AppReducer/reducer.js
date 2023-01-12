import * as types from "./actionTypes";

const initialState = {
  loading: false,
  quiz: [],
  question:[],
  limit:1,
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload.data);
  switch (type) {

    case types.SET_QUIZ_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.SET_QUIZ_SUCCESS:
        return {
          ...state,
          quiz: [...payload],
          isLoading: false,
          isError: false,
        };
  
      case types.SET_QUIZ_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

        case types.GET_QUIZ_REQUEST:
          return {
            ...state,
            isLoading: true,
            isError: false,
          };
    
        case types.GET_QUIZ_SUCCESS:
          return {
            ...state,
            quiz: [...payload],
            isLoading: false,
            isError: false,
          };
    
        case types.GET_QUIZ_FAILURE:
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
 ////////////////////////////
 ////////////////////////////
          case types.GET_QUESTIONS_REQUEST:
          return {
            ...state,
            isLoading: true,
            isError: false,
          };
    
        case types.GET_QUESTIONS_SUCCESS:
          return {
            ...state,
            questions: [...payload],
            isLoading: false,
            isError: false,
          };
    
        case types.GET_QUESTIONS_FAILURE:
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