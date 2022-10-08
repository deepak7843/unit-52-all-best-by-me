import * as types from "./actionTypes";
import axios from "axios";

export const getWord = (payload) => (dispatch) => {
  dispatch({ type: types.GET_WORD_REQUEST });
  return axios
    .get(`https://api.api-ninjas.com/v1/randomword`)
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_WORD_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.GET_WORD_FAILURE, payload: err })
    );
};
