import * as types from "./actionTypes";
import axios from "axios";



// export const getStudent = (payload) => (dispatch) => {
//   dispatch({ type: types.GET_STUDENTS_REQUEST });
//   return axios
//     .get(
//       "https://dsd-heroku.herokuapp.com/student"
//     )
//     .then((res) => {
//       // console.log(res)
//       dispatch({ type: types.GET_STUDENTS_SUCCESS, payload: res.data });
//     })
//     .catch((err) =>
//       dispatch({ type: types.GET_STUDENTS_FAILURE, payload: err })
//     );
// };

   const addStudent = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_STUDENT_REQUEST });
    return axios
      .post("https://dsd-heroku.herokuapp.com/student", payload)
      .then((res) => {
        console.log(res)
        dispatch({ type: types.ADD_STUDENT_SUCCESS, payload: res });
        return { status: types.ADD_STUDENT_SUCCESS, message: "student added " };
      })
      .catch((err) => dispatch({ type: types.ADD_STUDENT_FAILURE, payload: err }));
  };

  
export const filterType = (payload) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getSTUDENTS?filter=${payload}&limit=20&page=1`
    )
    .then((res) => dispatch({ type: types.FILTER_TYPE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const ratingSortAsc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getSTUDENTS?sort=rating&order=${order}&limit=20&page=1`
    )
    .then((res) => dispatch({ type: types.SORT_ASC_RATING, payload: res.data }))
    .catch((err) => console.log(err));
};

export const ratingSortDesc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getSTUDENTS?sort=rating&order=${order}&limit=20&page=1`
    )
    .then((res) =>
      dispatch({ type: types.SORT_DESC_RATING, payload: res.data })
    )
    .catch((err) => console.log(err));
};

export const priceSortAsc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getSTUDENTS?sort=price_starts_from&order=${order}&limit=20&page=1`
    )
    .then((res) => dispatch({ type: types.SORT_ASC_PRICE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const priceSortDesc = (order) => (dispatch) => {
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getSTUDENTS?sort=price_starts_from&order=${order}&limit=20&page=1`
    )
    .then((res) => dispatch({ type: types.SORT_DESC_PRICE, payload: res.data }))
    .catch((err) => console.log(err));
};


  export const filterSortAction = (filter, sort, type) => (dispatch) => {
    return axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getSTUDENTS?page=1&limit=20&filter=${filter}&sort=${type}&order=${sort}`
      )
      .then((res) => dispatch({ type: types.FILTER_SORT, payload: res.data }))
      .catch((err) => console.log(err));
  };



  export {  addStudent }
