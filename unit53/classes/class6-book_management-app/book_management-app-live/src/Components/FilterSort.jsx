import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/action";

const FilterSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.get("sortBy");
//   console.log("urlCategory--", urlCategory);
//   console.log("urlSort--", urlSort);

  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSort || "");

  const handleCheckbox = (e) => {
    console.log("e--", e);
    const option = e.target.value; ////1-26-47

    let newCategory = [...category];
    if (category.includes(option)) {
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
      //   setSearchParams({ ctgry: category }); ////1-46-49
      setSearchParams({ category });
      dispatch(getBooks({ params: { category } }));
    }
  }, [category, dispatch, setSearchParams]);

  useEffect(() => {
    if (sortBy) {
      const params = {
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
    //   console.log("getBooksParams--", getBooksParams);

      //   setSearchParams({sortBy})
      setSearchParams(params);
      dispatch(getBooks(getBooksParams))
    }
  }, [sortBy,dispatch, setSearchParams, searchParams]);

  // console.log("category--", category);
  //   console.log("searchParams--", searchParams);
//   console.log("sortBy--", sortBy);

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
        />{" "}
        Ascending
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />{" "}
        Descending
      </div>
    </div>
  );
};

export default FilterSort;
