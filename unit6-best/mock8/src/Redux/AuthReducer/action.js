import axios from "axios";
import * as types from "./actionTypes";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

     return axios({  
          method: "post",   
          url: "api/login",
          baseURL: "https://reqres.in",
          data: payload,
      })

//   axios
//     .post("/api/login")

    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};


const register = (payload) => (dispatch) => {
    dispatch({ type: types.REGISTER_REQUEST });
  console.log("payload--", payload);
  
    return axios
      // .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
      // .post("http://localhost:8080/auth/register", payload)
      .post("https://mock-url.herokuapp.com/hotels" , payload  )
  
      .then((r) => {
        dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
        return types.REGISTER_SUCCESS;
      })
      .catch((e) => {
        dispatch({ type: types.REGISTER_FAILURE, payload: e });
        return types.REGISTER_FAILURE;
      });
  };

export { login, register };

