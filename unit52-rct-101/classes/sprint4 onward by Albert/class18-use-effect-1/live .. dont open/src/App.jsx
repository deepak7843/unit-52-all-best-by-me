// import { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [click, setClick] = useState(0);

//   useEffect(() => {
//     console.log(1);

//     setTimeout(() => {
//       document.title = `clicked ${click} times`;
//     }, 1000);
//   });

//   console.log("******");

//   console.log(2);

//   return (
//     <div className="App">
//       <h1>class18-use-effect-1---Albert sir</h1>

//       <h3>click: {click} </h3>
//       <button
//         onClick={() => {
//           setClick(click + 1);
//         }}
//       >
//         {" "}
//         click me{" "}
//       </button>
//     </div>
//   );
// }

// export default App;

//////////////////************************************************************************************************************************************************************************************************************** */

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";
// import Github from "./components/Github";

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














import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Github from "./components/Github/Github";

function App() {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(0);


  useEffect(() => {}, [click]);

  // console.log("******");

  // console.log(2);

  return (
    <div className="App">
      <h1>class18-use-effect-1---Albert sir</h1>
      <Github />

      {/* <h3>click: {click} </h3>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        {" "}
        click me{" "}
      </button> */}
    </div>
  );
}

export default App;

