import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";
import { useCallback } from "react";

const initialState = [
  { id: 1, status: false, title: "Task1" },
  { id: 2, status: false, title: "Task2" },
  { id: 3, status: false, title: "Task3" },
];

const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  const [currentTodo, setCurrentTodo] = useState("");

  const todoHandler = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTask = () => {
    const payload = { id: uuid(), status: false, title: currentTodo };
    setTodos([...todos, payload]);
    setCurrentTodo("");
  };

  //   const handleToggle = useCallback(
  //     (id) => {
  //       let newTodoList = todos.map((item) =>
  //         item.id === id ? { ...item, status: !item.status } : item
  //       );
  //       setTodos(newTodoList);
  //     },
  //     [todos]
  //   );

    const handleToggle = useCallback((id) => {
      setTodos((prev) => {
        prev.map((item) =>
          item.id === id ? { ...item, status: !item.status } : item
        );
      });
    }, []);

//   const handleToggle = (id) => {
//     setTodos ((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, status: !item.status } : item
//       )
//     );
//   };

  ///////////////////////////////////**************************************************

  //   const handleDelete = useCallback(
  //     (id) => {
  //       let newTodoList = todos.filter((item) => item.id !== id);
  //       setTodos(newTodoList);
  //     },
  //     [todos]
  //   );



  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);


// const handleDelete = (id) => {
//     setTodos((prev) => prev.filter((item) => item.id !== id));
//   };

  return (
    <div>
      <h1>Todo</h1>
      <input value={currentTodo} onChange={todoHandler} />
      <button onClick={handleAddTask}>ADD</button>
      {todos.length &&
        todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            toggleStatus={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Todo;
