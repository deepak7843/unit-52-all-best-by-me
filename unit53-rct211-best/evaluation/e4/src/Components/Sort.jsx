import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(urlSort || "");

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

  return (
    <div>
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

export default Sort;
