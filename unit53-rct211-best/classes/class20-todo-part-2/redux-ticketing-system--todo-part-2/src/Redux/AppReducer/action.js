import * as types from "./actionTypes";
import axios from "axios";

const getTasks = () => (dispatch) => {
  dispatch({ type: types.GET_TASKS_REQUEST });

  return axios
    .get("http://localhost:5002/tasks")
    .then((r) => {
      // console.log("r.data--", r.data);

      // return dispatch({
      dispatch({
        type: types.GET_TASKS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {  //// 11-1
      // console.log("e", e);
      // return dispatch({
      dispatch({
        type: types.GET_TASKS_FAILURE,
        payload: e,
      });
    });
};


const updateSubtasksList = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_SUBTASKS_REQUEST });

  return axios
    .patch(`http://localhost:5002/tasks/${id}`, payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((r) => dispatch({ type: types.UPDATE_SUBTASKS_SUCCESS, payload: r }))
    .catch((e) => {
      dispatch({ type: types.UPDATE_SUBTASKS_FAILURE, payload: e });
    });
};

export { getTasks, updateSubtasksList };
