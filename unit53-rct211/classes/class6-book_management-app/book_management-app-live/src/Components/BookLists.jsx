import React from "react";
import BookCard from "./BookCard";
import styled from "styled-components";

const BookLists = ({ books }) => {
  // console.log("books--", books);
  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
        //   console.log("singleBook--", singleBook);
          return (
            <BookCardWrapper key={singleBook.id}>
              <BookCard bookData={singleBook} />
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
