import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  Alert,
} from "@chakra-ui/react";

import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { getQuestions, setQuiz } from "../Redux/AppReducer/action";

export default function Homepage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [difficulty, setdifficulty] = useState("");
  const [no, setno] = useState("");

  const quiz = useSelector((state) => state.AppReducer.quiz);

  // console.log(quiz);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupHandler = () => {
    let ob = {
      name: name,
      category: category,
      difficulty: difficulty,
      no_of_questions: no,
    };
    console.log(ob);
    console.log(category, difficulty, no);
    // dispatch(setQuiz(ob))
    dispatch(getQuestions(ob));
    alert("quiz set up done");

    setTimeout(() => {
      navigate("/quiz");
    }, 1000);
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          {/* <hr /> */}
          <Stack align={"center"}>
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Welcome to Masai Quiz App
            </Heading>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <Text fontSize={"2xl"} color={"gray.600"}>
              Set up your Quiz
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            {/* ////// */}
            <Stack spacing={4}>
              <Box>
                <FormControl id="mobile" isRequired>
                  {/* <FormLabel> max capacity </FormLabel> */}
                  <Input
                    type="text"
                    //   value={state.mobile}
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Box>

              <FormControl id="password" isRequired>
                {/* <FormLabel>Bed Type</FormLabel> */}

                <Select
                  name="cars"
                  id="cars"
                  placeholder="Select Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="9">General Knowledge </option>
                  <option value="21">Sports</option>
                  <option value="22">Geography</option>
                </Select>
              </FormControl>

              <FormControl id="password" isRequired>
                {/* <FormLabel>Bed Type</FormLabel> */}

                <Select
                  name="cars"
                  placeholder="Select Difficulty"
                  id="cars"
                  onChange={(e) => setdifficulty(e.target.value)}
                >
                  <option value="easy">Easy </option>
                  <option value="medium">Medium </option>
                  <option value="hard">Hard</option>
                </Select>
              </FormControl>

              <Box>
                <FormControl id="mobile" isRequired>
                  {/* <FormLabel>No of Adults</FormLabel> */}
                  <Input
                    type="number"
                    placeholder="Choose number of Question"
                    //   value={state.mobile}
                    onChange={(e) => setno(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={signupHandler}
                >
                  START QUIZ
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
