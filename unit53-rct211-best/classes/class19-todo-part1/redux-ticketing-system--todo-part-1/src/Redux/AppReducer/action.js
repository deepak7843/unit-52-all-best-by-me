import * as types from "./actionTypes";
import axios from "axios";

const getTasks = () => (dispatch) => {
  dispatch({ type: types.GET_TASKS_REQUEST });

  return axios
    .get("http://localhost:5000/tasks")
    .then((r) => {
      // console.log("r.data--", r.data);

      // return dispatch({
      dispatch({
        type: types.GET_TASKS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      // console.log("e", e);
      // return dispatch({
      dispatch({
        type: types.GET_TASKS_FAILURE,
        payload: e,
      });
    });
};

export { getTasks };
