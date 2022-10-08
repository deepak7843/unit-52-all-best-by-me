import * as types from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
  isLoading: false,
  error: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case types.LOGIN_SUCCESS: {
      localStorage.setItem("isAuth", true)
      localStorage.setItem("token", payload)
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      }
    }

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      }
    }
    default: {
      return state;
    }
  }
};
