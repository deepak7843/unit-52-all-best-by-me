import * as types from "./actionTypes";
import axios from "axios";

export const login = (payload) => (dispatch) => {
  // console.log(payload)
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
      return { status: types.LOGIN_SUCCESS, message: "Login Successful" };
    })
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE, payload: err }));
};
