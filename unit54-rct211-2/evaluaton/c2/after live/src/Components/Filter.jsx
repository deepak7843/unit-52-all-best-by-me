// import React from "react";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.getAll("cat");
    console.log("urlCategory--", urlCategory);
  //   console.log("urlSort--", urlSort);

  const [category, setCategory] = useState(urlCategory || []);

  const handleCheckbox = (e) => {
    // console.log("e--", e);
    const option = e.target.value; ////1-26-47
// console.log(option);
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.cat = category);
      setSearchParams(params);
    }
  }, [category, dispatch, setSearchParams]);

  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Analog"
            defaultChecked={category.includes("Analog")}
          />
          <label>Analog</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Digital"
            defaultChecked={category.includes("Digital")}
          />
          <label>Digital</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Chronograph"
            defaultChecked={category.includes("Chronograph")}
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
