import { Box, Button, Flex, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Component/Card";
import Navbar from "../Component/Navbar";
import {
  filterPaginationAction,
  filterSortAction,
  filterType,
  getRestaurants,
  nextPageAction,
  prevPageAction,
  priceSortAsc,
  priceSortDesc,
  ratingSortAsc,
  ratingSortDesc,
} from "../Redux/App/action";

const Home = () => {
  const [type, setType] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { data, limit } = useSelector((state) => state.appReducer);
  // console.log("data", data, "limit", limit);

  
  const handleFilter = (e) => {
    const { value } = e.target;
    console.log("val**", value);

    setFilter(value);
    if (value === "") {
      dispatch(getRestaurants());
    } else {
      dispatch(filterType(value));
    }
  };

  const handleRatingSort = (e) => {
    const { value } = e.target;
    console.log("val**", value);

    if (value === "") {
      dispatch(getRestaurants());
    } else if (filter == "" && value === "asc") {
      dispatch(ratingSortAsc(value));
    } else if (filter == "" && value === "desc") {
      dispatch(ratingSortDesc(value));
    } else if (filter !== "" && value == "asc") {
      dispatch(filterSortAction(filter, value, "rating"));
    } else if (filter !== "" && value == "desc") {
      dispatch(filterSortAction(filter, value, "rating"));
    }
  };

  const handlePriceSort = (e) => {
    const { value } = e.target;
    console.log("val**", value);
    
    if (value === "") {
      dispatch(getRestaurants());
    } else if (filter == "" && value === "asc") {
      dispatch(priceSortAsc(value));
    } else if (filter == "" && value === "desc") {
      dispatch(priceSortDesc(value));
    } else if (filter !== "" && value == "asc") {
      dispatch(filterSortAction(filter, value, "price_starts_from"));
    } else if (filter !== "" && value == "desc") {
      dispatch(filterSortAction(filter, value, "price_starts_from"));
    }
  };

  const prevPage = () => {
    setPage(page - 1);
    if (filter === "") {
      dispatch(prevPageAction(page - 1));
    } else {
      dispatch(filterPaginationAction(filter, page - 1));
    }
  };

  const nextPage = () => {
    setPage(page + 1);
    if (filter === "") {
      dispatch(prevPageAction(page + 1));
    } else if (filter !== "") {
      dispatch(filterPaginationAction(filter, page + 1));
    }
  };

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);



  return (
    <>
      <Navbar />
      <Flex w={"70%"} m="auto" justify={"space-between"}>
        <Box>
          Filter by type:
          <Select placeholder="Select option" onChange={handleFilter}>
            <option value="fast_food">Fast Food</option>
            <option value="fine_dining">Fine Dining</option>
            <option value="ethnic">Ethnic</option>
            <option value="cafe">Cafe</option>
            <option value="casual_dining">Casual Dining</option>
          </Select>
        </Box>
        
        <Box>
          Sort By Rating:
          <Select placeholder="Select option" onChange={handleRatingSort}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Box>
        <Box>
          Sort By Price:
          <Select placeholder="Select option" onChange={handlePriceSort}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Box>
      </Flex>
      <Box className="container">
        {data.map((ele, i) => (
          <Card key={i} item={ele} />
        ))}
      </Box>

      

      <Flex justify={"center"} gap={2}>
        <Button disabled={page <= 1} onClick={prevPage}>
          Prev
        </Button>
        <Text>{page}</Text>
        <Button onClick={nextPage}>Next</Button>
      </Flex>
    </>
  );
};

export default Home;
