//Write the ActionCreator functions here



// import axios from "axios";

// import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType";


// const getWatches = ( params) => (dispatch) => {

//     dispatch({ type: GET_WATCHES_DATA_REQUEST });
  
//     axios
//     //   .get("/watches", params)
//       .get("http://localhost:8080/watches", params)
//       .then((r) => {
//         // console.log("r.data--", r.data);
//         return dispatch({ type: GET_WATCHES_DATA_SUCCESS, payload:r.data });
//       })
//       .catch((e) => {
//         // console.log("e", e);
//         return dispatch({ type: GET_WATCHES_DATA_FAILURE });
//       });
//   };


// export {getWatches}

/////////*****************************************************************************************************************************************************************************************************************


import * as types from "./actionType";

import axios from "axios";


const getWatches = ( params) => (dispatch) => {

    dispatch({ type: types.GET_WATCHES_DATA_REQUEST });
  
    axios
      .get("/watches", params)
      .then((r) => {
        // console.log("r.data--", r.data);
        return dispatch({ type: types.GET_WATCHES_DATA_SUCCESS, payload:r.data });
      })
      .catch((e) => {
        // console.log("e", e);
        return dispatch({ type: types.GET_WATCHES_DATA_FAILURE });
      });
  };


  export {getWatches}