import React, { useEffect } from "react";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
} from "../../Redux/action";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from "axios";

// const Todos = () => {
// //   const todos = useSelector((store) => store.todos);
// // const {todos} = useSelector((store) => store);
// const {todos,isLoading, isError} = useSelector((store) => {
//     // return{
//     //     todos: store.todos,
//     //     isLoading: store.isLoading,
//     //     isError: store.isError
//     // }

//     return{
//         todos: store.data.todos,
//         isLoading: store.data.isLoading,
//         isError: store.data.isError
//     }

// },shallowEqual );

const Todos = () => {
  const { todos, isError } = useSelector((store) => store.data);

   const isLoading = useSelector((store) => store.isLoading);

  //   const isError = useSelector((store) => store.isError);

  //   const store= useSelector((store)=> store )

  const dispatch = useDispatch();

  const handleAdd = (payload) => {
    addTodo(payload)
      .then(() => getTodos())
      .catch((error) => console.log(error));
  };

  const addTodo = (payload) => {
    const requestAction = addTodoRequest();
    dispatch(requestAction);

    return axios
      .post("http://localhost:8080/todos", payload)
      .then((res) => {
        console.log("addTodores--", res);
        const successAction = addTodoSuccess(res.data);
        console.log("addTodosuccessAction---", successAction);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = addTodoFailure(err);
        dispatch(errorAction);
      });
  };

  const getTodos = () => {
    const requestAction = getTodoRequest();
    dispatch(requestAction);

    return axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        console.log("res--", res);
        const successAction = getTodoSuccess(res.data);
        console.log("successAction---", successAction);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = getTodoFailure(err);
        dispatch(errorAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log("todos component rendering");

  console.log("todos---", todos);
  return (
    <div>
      <h1>Todo</h1>
      {/* <TodoInput onClick={addTodo}  /> */}
      <TodoInput onClick={handleAdd} />

      {todos.length &&
        todos.map((item) => {
          return <div key={item.id}> {item.title} </div>;
        })}
    </div>
  );
};

export default Todos;
