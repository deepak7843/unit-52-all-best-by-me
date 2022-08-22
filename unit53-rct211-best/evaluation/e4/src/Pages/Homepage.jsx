import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Sort from "../Components/Sort";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import axios from "axios";

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(urlSort || "");
  // console.log("state--", state);

  console.log("countries--", countries);

  // console.log("getData--", getData);
  
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (sortBy) {
      let params = {};
      // category && (params.category = category)
      // category && (params.dsd = category)
      //   category && (params.cat = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [dispatch, setSearchParams, sortBy]);

  useEffect(() => {
    // dispatch(getData());
    // console.log("countries.length--", countries.length);

    if (countries.length === 0) {
      dispatch(getData());
      // getData()
    }
  }, []);

  console.log("countries--", countries);

  const dodelete = (id) => {
    // return axios.delete(`http://localhost:8080/countries/${id}`).then(()=>{
    return axios.delete(`/countries/${id}`).then(() => {
      dispatch(getData());
    });
  };

  const doEdit = (id) => {
    // return axios.delete(`http://localhost:8080/countries/${id}`).then(()=>{
    return axios.patch(`/countries/${id}`).then(() => {
      dispatch(getData());
    });
  };

  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row" onChange={handleSort} >
            <Radio
              data-cy="asc"
              value="asc"
              name="sortBy"
              defaultChecked={sortBy === "asc"}
            >
              Ascending
            </Radio>

            {/* ////// */}
            {/* ////// */}
            <Radio
              data-cy="desc"
              value="desc"
              name="sortBy"
              defaultChecked={sortBy === "desc"}
            >
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}

            {countries.map((el) => {
              return (
                <Tr key={el.id}>
                  {/* <Tr  > */}
                  <Th>{el.country}</Th>
                  <Th>{el.city}</Th>
                  <Th>{el.population}</Th>
                  <Th>
                    {" "}
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={() => doEdit(el.id)}
                    >
                      Edit
                    </Button>{" "}
                  </Th>
                  <Th>
                    {" "}
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => dodelete(el.id)}
                    >
                      {" "}
                      Delete{" "}
                    </Button>{" "}
                  </Th>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
