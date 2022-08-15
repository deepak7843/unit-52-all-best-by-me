import * as types from "./actionTypes";

const loginRequest = (payload) => {
  return {
    type: types.USER_LOGIN_REQUEST,
    payload
  };
};

const loginSuccess = (payload) => {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload
  };
};

const loginFailure = () => {
  return {
    type: types.USER_LOGIN_FAILURE
  };
};

export { loginSuccess, loginFailure,loginRequest };
