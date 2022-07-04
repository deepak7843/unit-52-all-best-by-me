import React from "react";

const Filters = ({ filters, currentFilteredBy, updateFilter }) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>

      <div className="restaurant-options">
        {/* {filters.values(value => ( */}
        {/* above line is wrong */}

        {/* {Object.entries(filters).map(([key, value]) => 
           (
            <div
              key={key}
              className=" restaurant-option"
              onClick={() => updateFilter(key)}
            >
              {value}
            </div>
          )
          )} */}
          {/* ******************************************************************************* */}

          {filters.map((value, key) => 
           (
            <div
              key={key}

            //   className=" restaurant-option"

            className= { `restaurant-option ${   
                currentFilteredBy === value ? "underline" : ""
            }` }

            // 2--7--28


              onClick={() => updateFilter(value)}
            >
              {value}
            </div>
          )
          )}






{/* 
        {Object.entries(filters).map(([key, value]) => {
          console.log(key, value);
          return (
            <div
              key={key}
              className=" restaurant-option"
              onChange={() => updateFilter(key)}
            >
              {value}
            </div>
          );
        })} */}

        {/* 
                <div className="restaurant-option">
                    Cost Low to High
                </div>
                <div className="restaurant-option">
                    Ratings
                </div>
                <div className="restaurant-option">
                    Delivery Time
                </div>
                <div className="restaurant-option">
                    Relevance
                </div> */}
      </div>
    </div>
  );
};

export default Filters;
