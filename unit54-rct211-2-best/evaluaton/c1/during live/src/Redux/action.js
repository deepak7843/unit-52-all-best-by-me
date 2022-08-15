// Write the action object creators in this file
import * as types from "./actionTypes";


const getProfileDetailRequest = () => {
    return { type: types.GET_PROFILE_DETAILS_REQUEST };
  };
  
  const getProfileDetailSuccess = (payload) => {
    return { type: types.GET_PROFILE_DETAILS_SUCCESS, payload };
  };
  
  const getProfileDetailFailure = (error) => {
    return { type: types.GET_PROFILE_DETAILS_FAILURE, payload: error };
  };

  export{
    getProfileDetailRequest,
    getProfileDetailSuccess,
    getProfileDetailFailure
  }
