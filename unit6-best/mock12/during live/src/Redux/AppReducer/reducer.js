import * as types from "./actionTypes";

const initialState = {
  teacher: [],
  student: [],
  tests:[],
  limit:1,
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload.data);
  switch (type) {

    case types.GET_STUDENT_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.GET_STUDENT_SUCCESS:
        return {
          ...state,
          student: [...payload],
          isLoading: false,
          isError: false,
        };
  
      case types.GET_STUDENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
 
        case types.ADD_STUDENT_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case types.ADD_STUDENT_SUCCESS:
        return {
          ...state,
          student: [...payload],
          isLoading: false,
          isError: false,
        };
  
      case types.ADD_STUDENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };


        case types.GET_TEACHER_REQUEST:
          return {
            ...state,
            isLoading: true,
            isError: false,
          };
    
        case types.GET_TEACHER_SUCCESS:
          return {
            ...state,
            teacher: [...payload],
            isLoading: false,
            isError: false,
          };
    
        case types.GET_TEACHER_FAILURE:
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