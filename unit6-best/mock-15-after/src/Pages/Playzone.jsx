import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
import React from "react";

import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getWord } from "../Redux/AppReducer/action";
import Vir_Keyboard from "../Components/Vir_Keyboard";
import styles from "./Playzone.module.css";
import axios from "axios";

const Playzone = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let difficulty = localStorage.getItem("difficulty");
  console.log("difficulty--", difficulty);
  const [count, setCount] = useState(location.state.data);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [level] = useState(location.state.data);
  const [flag, setFlag] = useState(false);
  let name = localStorage.getItem("name");
  let typedword = localStorage.getItem("word");
  const word = useSelector((state) => state.AppReducer.word);

  console.log("result--", result);
  console.log("typedword--", typedword);

  useEffect(() => {
    console.log("result--", result, result.length);
    console.log("word--", word, word.length);

    if (word.length > 0 && result.length === word.length) {
      if (result === word) {
        setScore(score + word.length);
      } else {
        setScore(score - word.length);
      }

      dispatch(getWord());
      setResult(typedword);
    }
  }, [result]);

  const handledashboard = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    //   if (count >= 0)
    //    {
    var interval = setInterval(() => {
      setCount((previous) => previous - 1);
    }, 1000);
    //   }
    setTimeout(() => {
      clearInterval(interval);
      setFlag(true);
    }, level * 1000);
  }, []);

  //   useEffect(() => {
  //     if (count > 0) {
  //       setTimeout(() => setCount(count - 1), 1000);
  //     }
  //   }, [count]);

  useEffect(() => {
    dispatch(getWord());
  }, []);

  useEffect(() => {
    if (flag === true) {
      axios
        .post("https://dsd-heroku.herokuapp.com/user", {
          name: name,
          score: score,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
    }
  }, [flag]);

  return (
    <Container className={styles.main}>
      {count > 0 ? (
        <Box>
          {" "}
          <Heading> Timer-- {count} </Heading>
        </Box>
      ) : (
        <Heading> Game End</Heading>
      )}

      {/* <Box>
        {" "}
        <Heading> Timer-- {count} </Heading>
      </Box> */}

      {/* <Box> </Box> */}

      <Box fontSize={"xl"}> random word ---- {word} </Box>

      <Input
        value={result}
        placeholder="type the same word"
        onChange={(e) => setResult(e.target.value)}
      />

      {/* <Box className={styles.mybox}> Typed Word is: {result} </Box> */}
      <Box color={"blue"} className={styles.mybox}>
        {" "}
        Score of Game is: {score}{" "}
      </Box>

      <hr />
      <hr />
      <hr />
      {/* <h1>keyboard</h1> */}

      <Vir_Keyboard />

      <Button
        marginTop={"10px"}
        colorScheme="blue"
        marginBottom="25px"
        onClick={handledashboard}
      >
        {" "}
        Dashboard{" "}
      </Button>
    </Container>
  );
};

export default Playzone;
