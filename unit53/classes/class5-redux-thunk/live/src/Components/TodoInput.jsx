import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
} from "../Redux/action";
// import { getTodos } from "../Redux/action";
import axios from "axios";

// const TodoInput = ({getTodos}) => {

  const TodoInput = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
    };

    dispatch(addTodosRequest());
    axios
      .post("/todos", payload)
      .then((r) => dispatch(addTodosSuccess()))
      // .then(()=>  getTodos(dispatch))
      // .then(()=>   dispatch(getTodos()) )

      .catch((e) => dispatch(addTodosFailure(e)));
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}> ADD </button>
    </div>
  );
};

export default TodoInput;
