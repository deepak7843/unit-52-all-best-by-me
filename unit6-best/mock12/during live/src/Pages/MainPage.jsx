import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../Redux/AppReducer/action";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  // useColorModeValue,
} from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";

const Hotels = () => {
  const [hoteldata, setHoteldata] = useState([]);
  const [sortBy, setSortBy] = useState();

  const hotels = useSelector((state) => state.AppReducer.hotels);
  const dispatch = useDispatch();

  // console.log(hoteldata);


  useEffect(() => {
    console.log("sortBy--", sortBy);
    if (sortBy === "asc") {
      let sortedData= [...hoteldata]
       sortedData = sortedData.sort((a, b) => a.cost - b.cost);
      setHoteldata(sortedData);
      console.log(hoteldata);
    }
    if (sortBy === "desc") {
      var sortedData= [...hoteldata]

       sortedData = sortedData.sort((a, b) => b.cost - a.cost);
      setHoteldata(sortedData);
      console.log(hoteldata);

    }
  }, [sortBy]);

  const handleFilter = (e) => {
    // console.log("sortBy--", sortBy);

    console.log("e.target.value--", e.target.value);

    // if (e.target.value === "") {
    //   // getCountries();
    //   dispatch(getHotels());
    // } else {
      // fetch(`https://mock-url.herokuapp.com/hotels/${e.target.value}`, {
      //   method: "GET",
      // })
     axios
        .get(`https://mock-url.herokuapp.com/hotels/?category=${e.target.value}`) 
        .then((res) => {
          console.log(res);
          setHoteldata(res.data)
        })
        // .then((data) => setHoteldata(data));
    // }
  };

  // async function hot() {
  //   dispatch(getHotels());

  //   // setHoteldata( dispatch(getHotels()))
  // }

  const getHotel=()=>{
    axios
    .get(`https://mock-url.herokuapp.com/hotels`) 
    .then((res) => {
      console.log(res);
      setHoteldata(res.data)
    })
  }

  useEffect(() => {
      // hot()
      // axios
      // .get(`https://mock-url.herokuapp.com/hotels`) 
      // .then((res) => {
      //   console.log(res);
      //   setHoteldata(res.data)
      // })

      getHotel()
      
      // dispatch(getHotels());

      // setHoteldata( dispatch(getHotels()))
  },[] );

  return (

    <Stack width="100%" >


<div className="filt" >

<div>
  {" "}
  Filter According to category
  <br />
  <select onChange={handleFilter}>
    <option>  Filter According to category </option>
    <option value="family"> family </option>
    <option value="deluxe"> deluxe </option>
    <option value="suite"> suite </option>

  </select>
</div>

<div>
  Sort By age:
  <br />
  <select onChange={(e) => setSortBy(e.target.value)}>
    <option  > sort by price </option>
    <option value="asc"> Ascending </option>
    <option value="desc"> Descending </option>
  </select>
</div>

</div>


{/* ////////////////////////////////////// */}

    <Grid
    // mt="1000px"
    pt="120px"
    // border="10px solid red"
      templateColumns="repeat(2, 1fr)"
      gap={1}
      //  justifyContent='space-between'
    >
      {hoteldata?.length > 0 &&
        hoteldata.map((el) => {
          return (
            <Center py={2}>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "400px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                // bg={useColorModeValue('white', 'gray.900')}
                boxShadow={"xl"}
                padding={4}
              >
                <Flex flex={1} bg="blue.200">
                  <Image objectFit="cover" boxSize="100%" src={el.image_url} />
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  // p={1}
                  // pt={2}
                  border="1px solid"
                  width="10px"
                  // paddingleft="200px"
                  // marginLeft="200px"
                >
                  <Stack
                    // flex={1}
                    flexDirection="horizontal"
                    justifyContent="center"
                    alignItems="center"
                    // marginLeft="-100px"
                    width="10px"
                  >
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {el.category}
                    </Heading>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      marginBottom={"10px"}
                      //  border={"1px solid black"}
                      paddingBottom={"10px"}
                      paddingLeft={"10px"}
                      // style={margin-bottom= "3px"}
                    >
                      Room
                    </Heading>
                  </Stack>

                  <hr />

                  <Stack
                    // flex={1}
                    flexDirection="horizontal"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading fontSize={"xl"} fontFamily={"body"} color={"blue"}>
                      Adults:
                    </Heading>
                    <Heading
                      fontSize={"xl"}
                      fontFamily={"body"}
                      // marginBottom={"10px"}
                      //  border={"1px solid black"}
                      // paddingBottom={"10px"}
                      paddingLeft={"10px"}
                      color={"red"}
                      // style={margin-bottom= "3px"}
                    >
                      {el.no_of_persons}
                    </Heading>
                  </Stack>

                  <Stack
                    // flex={1}
                    flexDirection="horizontal"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading fontSize={"xl"} fontFamily={"body"} color={"blue"}>
                      Capacity:
                    </Heading>
                    <Heading
                      fontSize={"xl"}
                      fontFamily={"body"}
                      // marginBottom={"10px"}
                      //  border={"1px solid black"}
                      // paddingBottom={"10px"}
                      paddingLeft={"10px"}
                      color={"red"}
                      // style={margin-bottom= "3px"}
                    >
                      {el.capacity}
                    </Heading>
                  </Stack>

                  <Stack
                    // flex={1}
                    flexDirection="horizontal"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading fontSize={"xl"} fontFamily={"body"} color={"blue"}>
                      Facilities:
                    </Heading>
                    <Heading
                      fontSize={"xl"}
                      fontFamily={"body"}
                      // marginBottom={"10px"}
                      //  border={"1px solid black"}
                      // paddingBottom={"10px"}
                      paddingLeft={"10px"}
                      color={"red"}
                      // style={margin-bottom= "3px"}
                    >
                      {el.type_of_room}
                    </Heading>
                  </Stack>
                  <Stack
                    // flex={1}
                    flexDirection="horizontal"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading fontSize={"xl"} fontFamily={"body"} color={"blue"}>
                      Bed Type:
                    </Heading>
                    <Heading
                      fontSize={"xl"}
                      fontFamily={"body"}
                      // marginBottom={"10px"}
                      //  border={"1px solid black"}
                      // paddingBottom={"10px"}
                      paddingLeft={"10px"}
                      color={"red"}
                      // style={margin-bottom= "3px"}
                    >
                      {el.bed_type}
                    </Heading>
                  </Stack>
                  <Stack
                    // flex={1}
                    flexDirection="horizontal"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading fontSize={"xl"} fontFamily={"body"} color={"blue"}>
                      Price:
                    </Heading>
                    <Heading
                      fontSize={"xl"}
                      fontFamily={"body"}
                      // marginBottom={"10px"}
                      //  border={"1px solid black"}
                      // paddingBottom={"10px"}
                      paddingLeft={"10px"}
                      color={"red"}
                      // style={margin-bottom= "3px"}
                    >
                      {el.cost}
                    </Heading>
                  </Stack>

                  {/* <Button> Book Now</Button> */}
                </Stack>
              </Stack>
            </Center>
          );
        })}
      )
    </Grid>
   </Stack>
  );
};

export default Hotels;
