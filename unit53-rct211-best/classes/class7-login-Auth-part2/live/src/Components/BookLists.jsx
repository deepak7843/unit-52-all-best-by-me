import React from "react";
import BookCard from "./BookCard";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";

// const BookLists = ({ books }) => {
// console.log("books--", books);

const BookLists = () => {
  const books = useSelector((state) => state.AppReducer.books);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  
  const location = useLocation(); /// 29-37
  console.log("location--", location);

  // console.log("books--", books);
  useEffect(
    () => {
      // if (books.length === 0 ) {
      if (books.length === 0 || location.search) {
        const sortBy = searchParams.get("sortBy"); //// 27-33
        // const getBooksParams = {
        let getBooksParams = {
          params: {
            // category: searchParams.getAll("category"),
            category: searchParams.getAll("cat"),
            _sort: sortBy && "release_year",
            _order: sortBy,
          },
        };
        console.log("getBooksParams--", getBooksParams); ///// 49-45

        dispatch(getBooks(getBooksParams));
      }
    },
    //  [books.length, dispatch, location.search, searchParams]
    [location.search]
  );

  // console.log(location);

  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
          //   console.log("singleBook--", singleBook);
          return (
            <BookCardWrapper key={singleBook.id}>
              <Link to={`/books/${singleBook.id}`}>
                <BookCard bookData={singleBook} />{" "}
              </Link>
            </BookCardWrapper>
          );
        })}
    </>
  );
};

export default BookLists;

const BookCardWrapper = styled.div`
  border: 1px solid blue;
  padding: 5px;
  width: 310px;
`;
