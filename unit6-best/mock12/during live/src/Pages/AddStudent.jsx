import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink, Navigate, useNavigate } from "react-router-dom";
import { addStudent } from "../Redux/AppReducer/action";
import { add } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

export default function AddStudent() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [mark, setMark] = useState("");
  const [date, setDate] = useState("");
  const [repeat, setRepeat] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);

  function handleUserRegister() {
    let userData = {
      name: username,
      gender: gender,
      age: age,
      subject: subject,
      mark: mark,
      date: date,
    };

    dispatch(addStudent(userData));

    //    if(age=== repeat){
    //     alert("register successful");
    //     localStorage.setItem("userData", JSON.stringify(userData));
    //     navigate(`/teacher/add`)
    //    }
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Add Student Data</Heading>
          {/* <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
            </Text> */}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              {/* <FormLabel>Name</FormLabel> */}
              <Input
                type="text"
                //   value={username}
                placeholder="Enter name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl id="gender">
              {/* <FormLabel>Gender</FormLabel> */}
              <Input
                type="text"
                //   value={username}
                placeholder="Enter gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </FormControl>

            <FormControl id="age">
              {/* <FormLabel>Age</FormLabel> */}
              <Input
                type="number"
                // value={age}
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>


{/* ////////////////////////////////////////////////// */}
            {/* <Heading> Test Data </Heading> */}
            <h3> Test Data</h3>

            <FormControl id="age">
              {/* <FormLabel>Age</FormLabel> */}
              <Input
                type="text"
                // value={age}
                placeholder="Enter Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </FormControl>
            <FormControl id="age">
              {/* <FormLabel>Age</FormLabel> */}
              <Input
                type="number"
                // value={age}
                placeholder="Enter marks"
                onChange={(e) => setMark(e.target.value)}
              />
            </FormControl>
            <FormControl id="age">
              {/* <FormLabel>Age</FormLabel> */}
              <Input
                type="date"
                // value={age}
                placeholder="Enter date"
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>

            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleUserRegister}
                isLoading={isLoading}
              >
                Add
              </Button>
            </Stack>

            {/* <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?{" "}
                  <RouterLink to="/signup" color={"blue.400"}>
                    Signup
                  </RouterLink>
                </Text>
              </Stack> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
