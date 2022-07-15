import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/action";

const SingleTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate= useNavigate()

  console.log("todos-----", todos);

  //// not understood currentTodo
  //   const [currentTodo] = useState(() => {
  //     return todos.find((item) => item.id === Number(id)) || {};
  //   });

  const [currentTodo, setCurrentTodo] = useState({});

  console.log("currentTodo--", currentTodo);

  const toggleStatus = (id, newStatus) => {
    dispatch(toggleTodoRequest());
    axios
      .patch(`/todos/${id}`, { status: newStatus })
      .then((r) => dispatch(toggleTodoSuccess(r.data)))
      .catch((e) => dispatch(toggleTodoFailure(e)));
  };

  const removeTodo= (id)=> {
    dispatch(removeTodoRequest())
    axios
      .delete(`/todos/${id}`)
      .then((r)=> {
        dispatch(removeTodoSuccess(id));
        navigate("/")
      })
      .catch((e) => dispatch(removeTodoFailure(e)) )
  };

  useEffect(() => {
    let currentTodo = todos.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  }, [todos, id]);

  console.log("todos-below----", todos);

  return (
    <div>
      <h3>
        {" "}
        {currentTodo?.title} {currentTodo?.status ? "True" : "False"}{" "}
      </h3>

      <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>
        {" "}
        Toggle{" "}
      </button>

      <button onClick={()=> removeTodo(currentTodo.id)} >Remove</button>

      <Link  to={`/todo/${currentTodo.id}/edit`} >
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default SingleTodo;
