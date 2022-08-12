import React, { useEffect } from "react";
// import { reducer as AppReducer } from "./AppReducer/reducer";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";
import { getWatches } from "../Redux/AppReducer/action";

const Watches = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.AppReducer.watches);


  const location = useLocation(); /// 29-37
  console.log("location--", location);

  // useEffect(() => {
  //   const urlCategory = searchParams.getAll("cat");
  //   // if(watches?.length===0  && (!urlCategory) ){
  //   if (watches?.length === 0) {
  //     dispatch(getWatches());
  //   }
  // }, []);




  useEffect(
    () => {
      // if (books.length === 0 ) {
      if (watches.length === 0 || location.search) {
        // const getBooksParams = {
        let getWatchesParams = {
          params: {
            category: searchParams.getAll("cat"),
         
          },
        };
        console.log("getWatchesParams--", getWatchesParams); ///// 49-45

        dispatch(getWatches(getWatchesParams));
      }
    },
    //  [books.length, dispatch, location.search, searchParams]
    [location.search]
  );




  console.log("watches--", watches);

  return (
    <div>
      <BookPageWrapper>
        <FilterSortWrapper>
          <Filter />
        </FilterSortWrapper>

        <BookListWrapper>
          <div  className="watchlist" >
          {/* <BookListWrapper> */}

            {watches.map((el) => {
              return (
                <BookCardWrapper key={el.id}>
                  <Link to={`/watches/${el.id}`}>
                    <WatchCard key={el.id} id={el.id} data={el} />
                  </Link>
                </BookCardWrapper>
              );
            })}{" "}
            {/* Map through the watch list here using WatchCard Component */}
            {/* </BookListWrapper> */}

          </div>
        </BookListWrapper>
      </BookPageWrapper>
    </div>
  );
};

export default Watches;

const BookCardWrapper = styled.div`
  border: 3px solid black;
  border-radius: 9px;
  padding: 5px;
  width: 310px;
  margin: 5px;
`;

const BookPageWrapper = styled.div`
  display: flex;
  // border: 3px solid orange;

`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 3px solid black;
  border-radius: 5px;
  margin-left: 10px;
`;

const BookListWrapper = styled.div`
  width: 100%;
  display: grid;
  // display: flex;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));

  grid-gap: 16px;
  justify-content: center;
  padding: initial;

  // border: 20px solid green;
`;
