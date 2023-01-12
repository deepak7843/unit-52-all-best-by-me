import * as types from "./actionTypes";
import axios from "axios";


const getHotels = ( params) => (dispatch) => {

    dispatch({ type: types.GET_HOTELS_REQUEST });
  
    axios
      .get("/hotels", params)
      .then((r) => {
        console.log("r.data--", r.data);
        return dispatch({ type: types.GET_HOTELS_SUCCESS, payload:r.data });
      })
      .catch((e) => {
        // console.log("e", e);
        return dispatch({ type: types.GET_HOTELS_FAILURE });
      });
  };


    /////*** */
  /////*** */
  /////*** */

  const updateHotelRecord= (id,payload) => (dispatch)=> {
    dispatch({ type: types.UPDATE_HOTEL_RECORD_REQUEST})

    return axios
      .patch(`/hotels/${id}`, payload)
      .then((r)=> dispatch({ type: types.UPDATE_HOTEL_RECORD_SUCCESS}))
      .catch((e)=> dispatch({ type: types.UPDATE_HOTEL_RECORD_FAILURE}))
  }


  export {getHotels, updateHotelRecord }
