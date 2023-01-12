import { getLocalData, saveLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token:  "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
    // console.log("action-----dsd345", action);
  const { type, payload } = action;
  switch (type) {


    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
        localStorage.setItem("isAuth", true)
        localStorage.setItem("token", payload.token)

    //   saveLocalData("token", payload )
      return {
        ...state,
        token: payload,
        isLoading: false,
        isAuth: true,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };

      

    default:
      return state;
  }
};
export { reducer };
