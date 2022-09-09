// import { useState , useId } from "react"

import { useState } from "react";
import { TodoInput } from "./TodoInput";

import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

function Todo() {
  //   const [todosList, setTodosList ] = useState(["Learn React", "Learn Redux"])

  const [todosList, setTodosList] = useState([]);

  const getData = (todo) => {
    console.log("Received", todo);

    const payload = {
      title: todo,
      status: true,
      id: nanoid(5),
    };

    // setTodosList([...todosList, todo])    //1--40--3

    setTodosList([...todosList, payload]);
  };

  //     setTodosList([...todosList, payload])

  ////////
  ////////
  ////////
  ////////
  //     //     let numberStore = [0, 1, 2];
  //     // let newNumber = 12;
  //     // numberStore = [...numberStore, newNumber];
  //     // console.log(numberStore)  //  [0, 1, 2, 12]

  // }
  ////////
  ////////
  ////////
  ////////

  const handleStatus = (id) => {
    console.log("id:", id);

    // find this id from todosList
    // toggle it's status
    // get new Array, set it again  //1--59--38

    // setTodosList([
    //   ...todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)), //// 2-3-25
    // ]);

    // line 39  ki jagah --- line 44(without spread in starting)

    // don't need to spread because map is going to return a new array
    setTodosList(
      todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };

  // line 45 to 69 ki jagah --- line 80 to 96

  // const handleStatus = (id) => {
  //     console.log("id:", id);

  //     const newarr = todosList.map((e) => {
  //         if (e.id === id) {

  //             return {
  //                 ...e,
  //                 status: !e.status,
  //             };
  //         }
  //         return e;

  //     });

  //     setTodosList(newarr);
  // }

  return (
    <div >
      {/* <TodoInput /> */}

      <TodoInput getData={getData} />

      {/* { Todos list} */}

      {todosList.map((e) => (
        // 1--32--45
        //    <div> {e} </div>

        // <TodoItem todo={e} > </TodoItem>

        <TodoItem key={e.id} handleStatus={handleStatus} todo={e}>
          {" "}
        </TodoItem>
      ))}
    </div>
  );
}

export { Todo };
