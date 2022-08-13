import React, { useEffect } from "react";
// import { reducer as AppReducer } from "./AppReducer/reducer";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";
import { getWatches } from "../Redux/AppReducer/action";

const Watches = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.AppReducer.watches);


  useEffect(() => {
    const urlCategory = searchParams.getAll("category");
    // if(watches?.length===0  && (!urlCategory) ){
    if(watches?.length===0 ){
      dispatch(getWatches())

    }

  },[] )
    console.log("watches--", watches);


  return (
    <div>
      <BookPageWrapper>

      <FilterSortWrapper>

      <Filter />
      </FilterSortWrapper>

      <BookListWrapper>

      <div>
{        watches.map((el)=>{
    return (
      <BookCardWrapper key={el.id}>

       <Link to={`/watches/${el.id}`}>
         <WatchCard key={el.id} id={el.id} data={el}/>
       </Link>
       </BookCardWrapper>

    )
})
}        {/* Map through the watch list here using WatchCard Component */}
      </div>
      </BookListWrapper>


      </BookPageWrapper>

    </div>
  );
};

export default Watches;



const BookCardWrapper = styled.div`
  border: 1px solid blue;
  padding: 5px;
  width: 310px;
`;

const BookPageWrapper = styled.div`
  display: flex;
`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 1px solid red;
`;

const BookListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));

  grid-gap: 16px;
  justify-content: center;
  padding: initial;

  border: 9px solid black;
`;