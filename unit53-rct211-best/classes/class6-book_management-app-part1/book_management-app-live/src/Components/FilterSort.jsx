import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/action";

const FilterSort = () => {
  
  // // let bok=""
  const dispatch = useDispatch();  //// 2-14-10
  // console.log("useSearchParams--", useSearchParams);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.getAll("category");


  const urlSort = searchParams.get("sortBy");
  console.log("urlCategory--", urlCategory);
      //// 2-8-43
    console.log("urlSort--", urlSort);
    console.log( "type--", typeof(urlSort));

  // const [category, setCategory] = useState([]);
  const [category, setCategory] = useState(urlCategory || []);

  // const [sortBy, setSortBy] = useState("");
  const [sortBy, setSortBy] = useState(urlSort || "");

  // console.log("category--", category);


  const handleCheckbox = (e) => {
    // console.log("e--", e);
    const option = e.target.value; ////1-26-47
    // console.log(option);
    /////if the option is already present then remove it, else add it
    let newCategory = [...category];
    if (category.includes(option)) {
      ///// remove the option from the category
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category) {
        // setSearchParams({ ctgry: category }); ////1-46-49
      setSearchParams({ category });
      dispatch(getBooks({ params: { category } })); //////  2-14-36
    }
  }, [category, dispatch, setSearchParams]);

  useEffect(() => {
    if (sortBy) {

      const params = {  ///// explain at 1-51-5
        category: searchParams.getAll("category"),
        sortBy,
      };


      const getBooksParams = { 
        params: {
          category: searchParams.getAll("category"),
          _sort: "release_year",
          _order: sortBy,
        },
      };
        console.log("getBooksParams--", getBooksParams);

        // setSearchParams({sortBy})  ////// 1-39-51
      setSearchParams(params);
      dispatch(getBooks(getBooksParams));
    }
  }, 
  // []
  //  [sortBy,searchParams,  setSearchParams, ]
  [sortBy, dispatch, setSearchParams, searchParams]
  );

  // console.log("category--", category);
    // console.log("searchParams--", searchParams);
    // console.log("sortBy--", sortBy);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Novel"
            defaultChecked={category.includes("Novel")}
          />
          <label> Novel </label>
        </div>

        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Science_Fiction"
            defaultChecked={category.includes("Science_Fiction")}
          />
          <label> Science_Fiction </label>
        </div>

        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
          />
          <label> Motivational </label>
        </div>

        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
          />
          <label> Thriller </label>
        </div>
      </div>



      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        // checked={sortBy === "asc"}
        />{" "}
        Ascending
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}  /////1-42-50 explain it
        />{" "}
        Descending
      </div>
    </div>
  );
};

export default FilterSort;
