import * as types from "./actionTypes";
import axios from "axios";




export const getQuestions = (ob) => (dispatch) => {
  console.log("ob--",ob);
  localStorage.setItem("resData", JSON.stringify({}))
  dispatch({ type: types.GET_QUESTIONS_REQUEST });
  return axios
    .get(
     `https://opentdb.com/api.php?amount=${ob.no_of_questions}&category=${ob.category}&difficulty=${ob.difficulty}&type=multiple`
    )
    .then((res) => {
      console.log(res.data)
      dispatch({ type: types.GET_QUESTIONS_SUCCESS, payload: res.data.results });
    })
    .catch((err) =>
      dispatch({ type: types.GET_QUESTIONS_FAILURE, payload: err })
    );
};



   const setQuiz = (payload) => (dispatch) => {
    dispatch({ type: types.SET_QUIZ_REQUEST });
    return axios
      .post("https://dsd-heroku.herokuapp.com/quiz", payload)
      .then((res) => {
        // console.log(res);
        dispatch({ type: types.SET_QUIZ_SUCCESS, payload: res.data });
        return { status: types.SET_QUIZ_SUCCESS, message: "quiz is set" };
      })
      .catch((err) => dispatch({ type: types.SET_QUIZ_FAILURE, payload: err }));
  };

  const getQuiz = (payload) => (dispatch) => {
    dispatch({ type: types.GET_QUIZ_REQUEST });
    return axios
      .get("https://dsd-heroku.herokuapp.com/quiz")
      .then((res) => {
        //   console.log(res);
        dispatch({ type: types.GET_QUIZ_SUCCESS, payload: res.data });
      })
      .catch((err) =>
        dispatch({ type: types.GET_QUIZ_FAILURE, payload: err })
      );
  };

  

  export {  setQuiz,getQuiz }
