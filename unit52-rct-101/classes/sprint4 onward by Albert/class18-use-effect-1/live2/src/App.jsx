// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;


///********************************************************************************** */



// // import React from "react";


// import { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";
// import Github from "./components/Github/Github";

// function App() {
//   const [click, setClick] = useState(0);
//   const [count, setCount] = useState(0);


//   useEffect(() => {}, [click]);

//   // console.log("******");

//   // console.log(2);

//   return (
//     <div className="App">
//       <h1>class18-use-effect-1---Albert sir</h1>
//       <Github />

//       {/* <h3>click: {click} </h3>
//       <button
//         onClick={() => {
//           setClick(click + 1);
//         }}
//       >
//         {" "}
//         click me{" "}
//       </button> */}
//     </div>
//   );
// }

// export default App;




//////////////////************************************************************************************************************************************************************************************************************** */


import { useEffect, useState } from "react";
// import Chat from "./Components/Chat";
// import Counter from "./Components/Counter";
import Github from "./components/Github/Github";
// import "./styles.css";
import "./App.css";
import Counter from "./components/Github/Counter";
import Chat from "./components/Github/Chat";


export default function App() {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);


  // useEffect
  useEffect(() => {}, [click]);
  return (
    <div className="App">
       <h1>class18-use-effect-1---Albert sir</h1>

      {/* <button onClick={() => setShow(!show)}>TOGGLE</button> */}

      {/* {show && <Chat />} */}

        {/* <Chat/> */}


      {/* <Counter initialTime={10} /> */}
      {/* <Counter /> */}

      {/* <Github /> */}
      {/* <h1>{click}</h1>

      <button onClick={() => setClick(click + 1)}>CLICK ME</button>

      <h1>COUNT DOES NOT UPDATE TITLE {count}</h1>

      <button onClick={() => setCount(count + 1)}>CLICK ME</button> */}
    </div>
  );
}



// 1. useEffect with only callback
// useEffect(callback)
// after each render, the useEffect is called
// generally never want to use
// 2. useEffect with no dependencies, or only once
// useEffect(callback,[])


