import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";

const SingleBook = () => {
  // const params = useParams();
  // console.log("params--", params); //// 1-7-30
  // console.log("useParams()-----", useParams());
  const { id } = useParams();

  const dispatch = useDispatch();
  const books = useSelector((state) => state.AppReducer.books);
  // console.log("books--", books);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {  //////// 1-13-18
    //// 1-23-47  -------->>>> 
    //// For  --> on refresh , or on a new tab, if we don,t have the books data in our redux store
    if (books?.length === 0) {
      dispatch(getBooks());
    }
  }, [books?.length, dispatch]);

  useEffect(() => {
    if (id) {
      // console.log(id);
      const temp = books?.find((book) => book.id === Number(id));
      // console.log("temp--", temp);
      temp && setCurrentBook(temp); /////// 1-9-17
      // setCurrentBook(temp);
    }
  }, [books, id]);

  // console.log("currentBook--", currentBook);

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
