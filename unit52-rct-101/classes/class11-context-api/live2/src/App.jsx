// import React, {useState} from "react";
// import './App.css';

// function App() {
//   const [counter , setCounter] = useState({})

//     // const [counter , setCounter] = useState({value: ""})

//   const handleOnChange = (e) => {
//      setCounter( { value: e.target.value } )
//   }
//   return (
//     <div className="App">

//       {/*  React is controlling input element  ----> uncontrolled */}
//       {/* <input type="text" value={counter.value} onChange={handleOnChange} /> */}

//       {/* ************************************************ */}
//       {/* when I remove the value( value={counter.value} ) from input element    11---21 */}

//       {/* then Deepak is controlling input element ---> controlled */}

//       <input type="text" onChange={handleOnChange} />
//     </div>
//   );
// }

// export default App;

// ////////*************  19--2 ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

// import React, { useReducer } from "react";
// import "./App.css";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment": {
//       return { ...state, counter: state.counter + 1 };
//     }
//     case "decrement": {
//       return { ...state, counter: state.counter - 1 };

// }
//     default: {
//       return state;
//     }
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, { counter: 0 });

//   return (
//     <div className="App">
//       counter: {state.counter}
//       <div>
//         <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//         <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       </div>
//     </div>
//   );
// }

/////// **************************************************

// should use state inplace of counter

// const reducer = (counter, action) => {
//   switch (action.type) {
//     case "increment": {
//       // return counter + 1;
//       return counter + action.payload;

//     }
//     case "decrement": {
//       return counter - 1;
//       // return counter - action.payload;

//     }

//     default: {
//       console.log("Type incorrect--" , action.type);
//       return counter;
//     }
//   }
// };

/////// **************************************************

// const reducer = (state, {type, payload}) => {
//   switch (type) {
//     case "increment": {
//       // return state + 1;
//       return state + payload;

//     }
//     case "decrement": {
//       return state - 1;
//       // return state - payload;

//     }

//     default: {
//       console.log("Type incorrect--" , type);
//       return state;
//     }
//   }
// };

// function App() {
//   const [counter, dispatch] = useReducer(reducer, 0);

//   ///// need a state variable with initial value = 0;
//   ///// need a single place where this state changes can be monitored

//   console.log("dispatch---------------" , dispatch);

//   return (
//     <div className="App">
//       counter: {counter}
//       <div>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>

//         {/* <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>-</button>   */}

//         <button onClick={() => dispatch({ type: "increment" , payload: 100  })}>+</button>

//       </div>
//     </div>
//   );
// }

// export default App;

// ////////*************       1--4--26     ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
