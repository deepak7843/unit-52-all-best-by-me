import * as types from "./action";

const initialState = {
  isAuth: false,
  token: ""
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: ""
      };
    default:
      return state;
  }
};

export { reducer };
