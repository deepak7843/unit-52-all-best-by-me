import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSort = searchParams.get("sortBy");

  const [sortBy, setSortBy] = useState(urlSort || "");

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if ( sortBy) {
      let params = {};
  
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [ dispatch, setSearchParams, sortBy]);

  return (
    <div style={{ minWidth: "250px" , border: "1px solid green" }}>
      <h3>Sort By</h3>
      <div>
        <div onChange={handleSort} >
          <input type="radio" data-cy="asc" value="asc" 
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label >Ascending</label>
        </div>
        <div onChange={handleSort}>
          <input type="radio" data-cy="desc" value="desc"
            name="sortBy"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
