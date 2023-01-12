import { Button, Container, HStack, useToast } from "@chakra-ui/react";
import React from "react";
import styles from "./Quiz_question.module.css";

export const QuizQuestion = ({ ind, data }) => {
  const modal = useToast();
//   console.log(data, ind);
  const handleOption = (Data) => {
    var resData = JSON.parse(localStorage.getItem("resData")) || {};

    if (Data === data.correct_answer) {
      modal({
        title: `correct answer`,
        status: "success",
        duration: 1000,
        position: "center",
      });

    //   if (resData[ind] === undefined) {
    //     resData[ind] = true;
    //   } else {
    //     resData[ind] = true;
    //   }

    resData[ind] = true;

    } else {
      modal({
        title: `wrong answer`,
        status: "error",
        duration: 1000,
        position: "center",
      });

    //   if (resData[ind] === undefined) {
    //     resData[ind] = false;
    //   } else {
    //     resData[ind] = false;
    //   }

    resData[ind] = false;

    }
    localStorage.setItem("resData", JSON.stringify(resData));
  };

  return (
    <Container className={styles.main}>
      <HStack gap={"3px"}>
        <h2 className={styles.no}>{ind}. </h2>
        <h2> {data.question}</h2>
      </HStack>
      <Button
        variant="outline"
        onClick={() => handleOption(data.correct_answer)}
      >
        {data.correct_answer}
      </Button>

      <Button
        variant="outline"
        onClick={() => handleOption(data.incorrect_answers[0])}
      >
        {data.incorrect_answers[0]}
      </Button>
      <Button
        variant="outline"
        onClick={() => handleOption(data.incorrect_answers[1])}
      >
        {" "}
        {data.incorrect_answers[1]}{" "}
      </Button>

      <Button
        variant="outline"
        onClick={() => handleOption(data.incorrect_answers[2])}
      >
        {data.incorrect_answers[2]}
      </Button>
    </Container>
  );
};
