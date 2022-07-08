import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";

const SingleBook = () => {
  // const params = useParams();
  // console.log("params--", params);
  const { id } = useParams();

  const dispatch = useDispatch();
  const books = useSelector((state) => state.AppReducer.books);
  console.log("books--", books);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    if (books?.length === 0) {
      dispatch(getBooks());
    }
  }, [books?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = books?.find((book) => book.id === Number(id));
      temp && setCurrentBook(temp);
      // setCurrentBook(temp);
    }
  }, [books, id]);

  console.log("currentBook--", currentBook);

  return (
    <div>
      <h2>{currentBook?.book_name} </h2>
      <h2>{currentBook?.category} </h2>
      <h2>{currentBook?.release_year} </h2>

      <button>
        <Link to={`/books/${currentBook.id}/edit`}>Edit</Link>
      </button>
    </div>
  );
};

export default SingleBook;
