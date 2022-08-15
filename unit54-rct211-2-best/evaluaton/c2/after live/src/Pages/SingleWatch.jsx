import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getWatches } from "../Redux/AppReducer/action";
const SingleWatch = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const watches = useSelector((state) => state.AppReducer.watches);
  // console.log("books--", books);
  const [currentWatch, setCurrentWatch] = useState({});

  useEffect(() => {  //////// 1-13-18
    //// 1-23-47  -------->>>> 
    //// For  --> on refresh , or on a new tab, if we don,t have the books data in our redux store
    if (watches?.length === 0) {
      dispatch(getWatches());
    }
  }, [watches?.length, dispatch]);

  useEffect(() => {
    if (id) {
      // console.log(id);
      const temp = watches?.find((watch) => watch.id === Number(id));
      // console.log("temp--", temp);
      temp && setCurrentWatch(temp); /////// 1-9-17
      // setCurrentBook(temp);
    }
  }, [watches, id]);


  return (
    <div>
      <h2> {currentWatch.name} </h2>
      <div>
        <img src={currentWatch.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentWatch.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
