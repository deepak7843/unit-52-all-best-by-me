export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export { loginSuccess, loginFailure };
