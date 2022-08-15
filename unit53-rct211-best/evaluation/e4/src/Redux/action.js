// import * as types from "./actionTypes";
// import axios from "axios";


// const getData = ( params) => (dispatch) => {

//     // dispatch(getDataRequest());
//     dispatch({ type: types.GET_COUNTRIES_REQUEST });
  
//     axios
//       .get("/countries", params)
//       .then((r) => {
//         console.log("r.data--", r.data);
//         return dispatch({ type: types.GET_COUNTRIES_SUCCESS, payload:r.data });
//       })
//       .catch((e) => {
//         console.log("e", e);
//         return dispatch({ type: types.GET_COUNTRIES_FAILURE });
//       });
//   };

//   export {getData}




import * as types from "./actionTypes";
import axios from "axios";


const getData = ( ) => (dispatch) => {

    // dispatch(getDataRequest());
    dispatch({ type: types.GET_COUNTRIES_REQUEST });
    // console.log("--", );

  
    axios
      .get("/countries" )
      .then((r) => {
        console.log("r.data--", r.data);
        return dispatch({ type: types.GET_COUNTRIES_SUCCESS, payload:r.data });
      })
      .catch((e) => {
        console.log("e", e);
        return dispatch({ type: types.GET_COUNTRIES_FAILURE });
      });
  };

  export {getData}