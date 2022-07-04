// import "./App.css";
// import { useState } from "react";
// import React from "react";

// function App() {
//   let [state, setState] = useState(false);
//   // const [state, setState] = React.useState(false);

//     let [value, setValue] = React.useState(0);


//   //  let value= 0
//   return (
//     <div className="App">
//       <h2>class17-react-state-management -- Albert sir</h2>

//       <h1> Fan: {state ? "ON" : "OF"} </h1>
//       <button
//         onClick={() => {
//           setState(!state);
//         }}
//       >
//         switch
//       </button>

//       <div>
//          <h3> {value} </h3>
//          <button onClick={() => {
//           //  value++
//           // setValue(value++)
//           console.log(value);

//           // setValue(value+1)
//           // setValue(value+8)
//           setValue(previous=> previous+1)
//           console.log(2, value);
//           setValue(previous=> previous+1)
//           console.log(3, value);

//           setValue(previous=> previous+1)
//           console.log(4, value);

//           setValue(previous=> previous+8)



//          } } >
//            Increment 4 times
//          </button>
//       </div>

//     </div>
//   );
// }

// export default App;



//////////////////******************************************************************************************************************************************************************************************************************************************************************** */

import "./App.css";

import React from 'react'
import Example from './components/Example';

const App = () => {
    // const [state, setState] = React.useState(false);

    // let [value, setValue] = React.useState(0);

    

  return (
    <div className='App' >
       <h2>class17-react-state-management -- Albert sir</h2>

       <Example/>

    </div>
  )
}

export default App