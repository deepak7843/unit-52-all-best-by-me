// import logo from './logo.svg'
// import { useEffect, useState } from 'react';

import "./App.css";
import { Todos } from "./components/Todos";
import { useState } from "react";
import { Counter } from "./components/Counter";
// import {Hello} from "./components/Hello"

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1> class6-use-effect-2 </h1>

      {/* ************************************************** */}

      {/* <Todos /> */}

      {/* {show ? <Todos /> : null} */}

      {/* <h3> Counter: {0} </h3> */}

      {/* <button> add 1 </button> */}

      {/* <button onClick={() => {}}> add 1 </button> */}

      {/* {show ? <Counter /> : null} */}

      {/* <Counter /> */}

      {/* <button> { show ? "Hide" : "Show" } Todos </button> */}

      {/* ///////////////////////////////////////////////////////// */}


      {show ? <Counter /> : null}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"} Todos
      </button>
    </div>
  );
}

export default App;

// ******************************************************************************************************************************************************************************

// function App() {

//   const [counter, setCounter] = useState(0)
//   const [age, setAge] = useState(12)

//   useEffect( () => {
//     console.log("Inside effect 1");
//   } )

//   useEffect( () => {
//     console.log("Inside effect 2");
//   } , [age] )  // callback function runs only when age changes

//     return (
//     <div className="App">
//      <h3> Counter: {counter}  </h3>

//       <button onClick={ () => {
//         setCounter(counter+1)
//       } }
//       >
//       Add 1
//      </button>

//     <button onClick={ () => {
//         setAge(age+2)
//       } }  > change age </button>

//     </div>
//   );
// }

// export default App;

// ******************************************************************************************************************************************************************************

// function App() {
//   // const [todos, setTodos] = useState([])

//   const [counter, setCounter] = useState(0)

//   // fetch("http://localhost:8090/todos").then(d => d.json()).then(console.log())

//   // ****** line 14 ki jagah 18 to 23 ***********

//   // fetch("http://localhost:8090/todos")
//   // .then(d => d.json())
//   // .then((data) =>{
//   //   // console.log("Todos:", data);
//   //     // setTodos(data)  // 1-17-35 ---> infinite loop
//   // } )

//   // ******* line 18 to 23 ki jagah 28 to 36 ****************

//  //synchronous function  1-23-50
//   // useEffect( () => {

//   //   fetch("http://localhost:8090/todos")
//   //   .then(d => d.json())
//   //   .then(  (data) => {
//   //     // console.log("Todos:", data);
//   //       setTodos(data)
//   //   }  )

//   // } , []    )

//   // ******* line  28 to 36 ki jagah 41 to 51  ****************

//   // useEffect(  () => {

//   //   async function getData() {
//   //    const data= await fetch("http://localhost:8090/todos")
//   //     .then( (d) => d.json() )

//   //     setTodos(data)

//   //   }
//   //   getData();

//   // }  , []    )

//   useEffect(  () => {

//        console.log("inside Effect");

//   }  , []    )

//   return (
//     <div className="App">
//      <h3> Counter: {counter}  </h3>

//       <button onClick={ () => {
//         setCounter(counter+1)
//       } }
//       >
//       Add 1
//      </button>

//     </div>
//   );

//   // return (
//   //   <div className="App">
//   //    {/* hello dsd */}
//   //      { todos.map( (todo) => (
//   //      <div>{todo.id} . {todo.title} </div> ) ) }
//   //   </div>
//   // );

// }

// export default App;

// ******************************************************************************************************************************************************************************

// function App() {
//   const [show, setShow] = useState(true)

//   // const [age, setAge] = useState(10)

//   console.log("Before");

//   useEffect( () => {
//     console.log("Inside effect 1");
//   } )

//   // useEffect( () => {
//   //   console.log("Inside effect 2"); //53-53
//   // } )

//   console.log("after");

//   return (
//     <div className="App">
//       {show ?
//        <Hello /> : null }

//       <button onClick={ () => {
//         setShow(!show)
//       } } >  Toggle component   </button>

//     </div>
//   );
// }

// export default App;

// // ******************************************************************************************************************************************************************************

// function App() {
//    const [show, setShow] = useState(true)
//   return (
//     <div className="App">
//       {show ?
//        <Hello /> : null }
//       <button onClick={ () => {
//         setShow(!show)
//       } } >Toggle component </button>
//     </div>
//   );
// }

// export default App;

// ******************************************************************************************************************************************************************************

// function App() {

//   return (
//     <div className="App">
//        <Hello />
//        <Hello />
//     </div>
//   )
// }

// export default App
