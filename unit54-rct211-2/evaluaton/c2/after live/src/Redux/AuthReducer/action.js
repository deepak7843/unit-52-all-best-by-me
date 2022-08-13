//Write the ActionCreator functions here

import axios from "axios";
import * as types from "./actionTypes";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

     return axios({  ///// 2-2-1 explain why use return -->
          method: "post",   //// 1-59-24
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
