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
  import { login } from "../Redux/AuthReducer/action";
  import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
  
  export default function UserLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  
    const loginHandler = () => {
  let obj= localStorage.getItem("userData")
  obj= JSON.parse(obj)

      if (obj.email===email && obj.password===password) {
        localStorage.setItem("userLogin", true);
        alert("Login successful");
        navigate("/user/hotel");
      } else {
        alert("Login failed");
      }
    };
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>User Login</Heading>
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
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  //   value={username}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
  
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
  
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
  
                {/* <Link to="/Admin.jsx" > */}
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={loginHandler}
                  isLoading={isLoading}
                >
                  Login
                </Button>
                {/* </Link> */}
              </Stack>
  
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?{" "}
                  <RouterLink to="/signup" color={"blue.400"}>
                    Signup
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  