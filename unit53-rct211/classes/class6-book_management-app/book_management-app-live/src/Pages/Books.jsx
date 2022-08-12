import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookLists from "../Components/BookLists";
import FilterSort from "../Components/FilterSort";  
import { getBooks } from "../Redux/action";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    // dispatch(getBooks());
    console.log("books.length--", books.length);

    console.log(
      "books.length--",
      searchParams.getAll("category"),
      searchParams.get("sortBy")
    );
    ///////////////****************** */
    ///////**** */
    ///////**** */
    ///////**** */
    const urlCategory = searchParams.getAll("category");
    const urlSort = searchParams.get("sortBy");
    console.log("!urlCategory---", !urlCategory);

    // if (books.length === 0) {
    if (books.length === 0 && (!urlCategory || !urlSort)) { ////// 2-27-38
    
      dispatch(getBooks());
    }
  }, []);

  // console.log("books--", books);

  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
           <FilterSort />
        </FilterSortWrapper>

        <BookListWrapper>
          <BookLists books={books} />
        </BookListWrapper>
      </BookPageWrapper>
    </div>
  );
};

export default Books;

const BookPageWrapper = styled.div`
  display: flex;
  border: 5px solid blue;
`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 3px solid red;
`;

const BookListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax
    
    (310px, max-content));

  grid-gap: 16px;
  justify-content: center;
  padding: initial;

  border: 6px solid yellow;
`;
