import axios from "axios";
import * as types from "./actionTypes";

const register = (payload) => (dispatch) => {
    dispatch({ type: types.REGISTER_REQUEST });
  console.log("payload--", payload);
 return axios
     .post("https://dsd-heroku.herokuapp.com/teacher" , payload  )

     .then((r) => {
       dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
       return types.REGISTER_SUCCESS;
     })
     .catch((e) => {
       dispatch({ type: types.REGISTER_FAILURE, payload: e });
       return types.REGISTER_FAILURE;
     });




};

const login = (params) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
      return axios
      .post("https://reqres.in/api/login" , params  )
      .then((r)=>{
         dispatch({type: types.LOGIN_SUCCESS, payload: r.data.token })
      return types.LOGIN_SUCCESS
      })
  
      .catch((e) => {
        dispatch({ type: types.LOGIN_FAILURE, payload: e });
        return types.LOGIN_FAILURE;
      });
  };


export { login , register};

