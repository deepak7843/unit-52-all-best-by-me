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
import {  setQuiz } from "../Redux/AppReducer/action";

export default function Homepage() {
  const [name, setName] = useState("");

  const [difficulty, setdifficulty] = useState("");

  const quiz = useSelector((state) => state.AppReducer.quiz);

  // console.log(quiz);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let ob = {
      name: name,
      difficulty: difficulty,
    };
    localStorage.setItem("difficulty", difficulty);
    localStorage.setItem("name", name);
    console.log(ob);
    // dispatch(setQuiz(ob))
    // alert("game set up done");

    // setTimeout(() => {
      navigate("/playzone" , {state:{data: difficulty}} );
    // }, 1000);
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
              Welcome to Masai Word Game
            </Heading>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <Text fontSize={"2xl"} color={"gray.600"}>
              Set up the Game
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
                  placeholder="Select Difficulty Level"
                  id="cars"
                  onChange={(e) => setdifficulty(e.target.value)}
                >
                  <option value="10">High </option>
                  <option value="30">Medium </option>
                  <option value="40">Low</option>
                </Select>
              </FormControl>

          

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
