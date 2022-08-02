import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoListsFailure,
  getTodoListsRequest,
  getTodoListsSuccess,
} from "../Redux/action";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoLists from "./TodoLists";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const getTodos = () => {
    dispatch(getTodoListsRequest());
    axios
      .get("/todos")
      .then((r) => {
        console.log("r---", r);
        dispatch(getTodoListsSuccess(r.data));
      })
      .catch((e) => dispatch(getTodoListsFailure(e)));
  };

  useEffect(() => {
    if (todos?.length === 0) {
      getTodos();
    }
  }, []);

  console.log("todos--", todos);

  console.log("************************************************");

  return (
    <div>
      <h3>Todos</h3>
      <AddTodo />
      <TodoLists todoLists={todos} />
    </div>
  );
};

export default Todos;
