import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import TodoInput from "./TodoInput";

// console.log("todos.jsx");

const Todos = () => {
  console.log("todos.jsx inside");

  const dispatch = useDispatch();
  //   const todos = useSelector((store) => store.todos);

  const todos = useSelector((state) => {
    console.log("state---", state);

    return state.todos;
  });

  // const getTodos = () => {
  //   dispatch(getTodosRequest());
  //   axios
  //     .get("/todos")
  //     .then((r) => {
  //       console.log("r.data--", r.data);
  //       return dispatch(getTodosSuccess(r.data));
  //     })
  //     .catch((e) => {
  //       console.log("e", e);
  //       return dispatch(getTodosFailure(e));
  //     });
  // };

  useEffect(() => {
    if (todos?.length === 0) {
      // getTodos(dispatch);
      dispatch(getTodos());    ////// -----> in thunk
    }
  }, []);

  // console.log("todos--", todos);
  return (
    <div>
      <h2>Todos</h2>
      {/* <TodoInput getTodos={getTodos} /> */}
      <TodoInput />
      {todos?.map((item) => {
        return <div key={item.id}> {item.title} </div>;
      })}
    </div>
  );
};

export default Todos;
