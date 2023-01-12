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
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { getHotels } from "../Redux/AppReducer/action";

export default function Admin() {
  const [category, setCategory] = useState("");
  const [image] = useState(
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
  );

  const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");
  const [adult, setAdult] = useState("");
  const [capacity, setCapacity] = useState("");
  const [cost, setCost] = useState("");

  const hotels = useSelector((state) => state.AppReducer.hotels);

  console.log(hotels);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("id", id);
    // hotels.splice(hotels.findIndex(a => a.id === id) , 1)

    return axios.delete(`/hotels/${id}`).then(() => {
      dispatch(getHotels());
      
    });
  };

  // useEffect(() => {});

  const signupHandler = () => {
    let ob = {
      category: category,
      image_url: image,
      type_of_room: room,
      bed_type: bed,
      no_of_persons: adult,
      capacity: capacity,
      cost: cost,
      booked: false,
    };

    // console.log("ob--", ob);

    axios
      .post(`https://mock-url.herokuapp.com/hotels`, ob)
      .then((res) => {
        console.log(res.data);
      })
      .then(()=> {
        dispatch(getHotels());

      })
      .catch((err) => {
        console.log(err.message);
      });



  };

  useEffect(() => {
    // if (hotels.length === 0) {
      dispatch(getHotels());
    // }
  },  );

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            {/* ////// */}
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Category</FormLabel>
                    <Select
                      name="cars"
                      id="cars"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setCategory(e.target.value);
                      }}
                    >
                      <option value="select">select</option>
                      <option value="family">family</option>
                      <option value="deluxe">deluxe</option>
                      <option value="suite">suite</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>Image</FormLabel>
                    <Input
                      type="text"
                      // value={state.username}
                      // onChange={(e) =>
                      //   setter({ type: "username", payload: e.target.value })
                      // }
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Type of Room</FormLabel>
                <div onChange={(e) => setRoom(e.target.value)}>
                  <input
                    type="radio"
                    value="AC"
                    name="sortBy"
                    //   defaultChecked={sortBy === "asc"}
                  />{" "}
                  AC
                  <br />
                  <input
                    type="radio"
                    value="non AC"
                    name="sortBy"
                    //   defaultChecked={sortBy === "desc"}
                  />{" "}
                  non AC
                </div>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Bed Type</FormLabel>

                <Select
                  name="cars"
                  id="cars"
                  onChange={(e) => setBed(e.target.value)}
                >
                  <option value="select">select </option>
                  <option value="single">single </option>
                  <option value="double">double</option>
                </Select>
              </FormControl>

              <Box>
                <FormControl id="mobile" isRequired>
                  <FormLabel>No of Adults</FormLabel>
                  <Input
                    type="number"
                    //   value={state.mobile}
                    onChange={(e) => setAdult(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="mobile" isRequired>
                  <FormLabel> max capacity </FormLabel>
                  <Input
                    type="number"
                    //   value={state.mobile}
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="mobile" isRequired>
                  <FormLabel>cost per night in Rs</FormLabel>
                  <Input
                    type="number"
                    //   value={state.mobile}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={signupHandler}
                >
                  Submit
                </Button>
              </Stack>
              <Stack pt={6}>
                {/* <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <TableContainer>
        <Table variant="simple">
          {/* <TableCaption>Room Data</TableCaption> */}
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Category</Th>
              <Th>Type of room</Th>
              <Th>Bed type</Th>
              <Th>No of persons</Th>
              <Th>Cost</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {hotels?.length > 0 &&
              hotels.map((el) => {
                return (
                  <Tr key={el.id}>
                    <Td>{el.id}</Td>
                    <Td>{el.category}</Td>
                    <Td> {el.type_of_room} </Td>
                    <Td>{el.bed_type}</Td>
                    <Td>{el.no_of_persons}</Td>
                    <Td>{el.cost}</Td>
                    <Td> not booked </Td>
                    <Td>
                      {" "}
                      <Button> Edit </Button>{" "}
                    </Td>
                    <Td>
                      {" "}
                      <Button onClick={() => handleDelete(el.id)}>
                        {" "}
                        Delete{" "}
                      </Button>{" "}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
