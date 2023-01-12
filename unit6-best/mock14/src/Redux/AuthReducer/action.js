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


export { login };

