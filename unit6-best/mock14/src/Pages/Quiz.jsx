import { Button, HStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QuizQuestion } from "../Components/Quiz_question";
import { getQuestions, getQuiz } from "../Redux/AppReducer/action";

const Quiz = () => {
  const [page, setPage] = useState(0);
//   const [flag, setFlag] = useState(false);

  const questions = useSelector((state) => state.AppReducer.questions);

//   console.log("questions--", questions);
  // console.log(quiz[quiz.length-1]);

  const navigate = useNavigate();
//   const dispatch = useDispatch();

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < questions.length - 1) {
      setPage(page + 1);
    }
  };
  const handleClick = () => {
    navigate("/results")
  };

 

  return (
    <div>
      <QuizQuestion data={questions[page]} ind={page + 1} />

      <HStack justifyContent="center" gap="10px">

      <Button onClick={handlePrev}>Previous</Button>

      {page === questions.length - 1 ? (
        <Button onClick={handleClick}> Submit </Button>
      ) : (
        <Button onClick={handleNext}>Next</Button>
      )}
      </HStack>
    </div>
  );
};

export default Quiz;
