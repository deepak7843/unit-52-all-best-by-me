import axios from "axios";
import * as types from "./actionTypes";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });

     return axios({  ///// 2-2-1 explain why use return --> look login.jsx line27 
          method: "post",   //// 1-59-24
          url: "api/login",
          baseURL: "https://reqres.in",
          data: payload,
      })

//   axios
//     .post("/api/login")

    .then((r) => dispatch({ type: types.USER_LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.USER_LOGIN_FAILURE }));
};

export { login };




/////below are from Login.jsx
///
///
///

// const handleSubmit = (e) => {
//     e.preventDefault();

//     if (email && password) {
//       dispatch(login({ email, password })) /////
//         ////
//         .then((r) => {
    /////
    /////
    /////
//           ///// 2-2-11 ----> only you can use .then if you have used return axios in action.js(in AuthReducer)
////
////
////
////
//           console.log("r--", r);
//           if (r.type === "USER_LOGIN_SUCCESS") {
//             // navigate("/");
//             // navigate(comingfrom);
//             navigate(comingfrom, { replace: true }); ///// 2-17-15
//           }
//         });
//     }
//   };