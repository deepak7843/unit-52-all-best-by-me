// import "./App.css";
// import { Image } from "./Components/Image";
// import { Input } from "./Components/Input";
// import { useCounter } from "./hooks/useCounter";

// function App() {
//   /*
//   1. Implement only the hook functionality inside hooks/useCounter.js
//   2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
//   3. The application should function properly after the implimentation of hooks and Custom components
//   */
//   const { countValue, incCount, decCount } = useCounter({
//     initialValue: 10,
//     minValue: 5,
//     maxValue: 15,
//   });
//   return (
//     <div className="App">
//       {/* DO NOT CHANGE the 5 lines below   */}
//       <h1>c3</h1>
//       <h3>Value: {countValue}</h3>
//       <button onClick={() => incCount()}>Increment</button>
//       <button onClick={() => incCount(3)}>Increment 3</button>
//       <button onClick={() => decCount(2)}>Decrement 2</button>
//       <button onClick={() => decCount(4)}>Decrement 4</button>

//       <br />
//       {/* You can pass the required props as mentioned in the questions to
//       check if the components are working properly */}
//       <Image />
//       <br />
//       <Input />
//     </div>
//   );
// }

// export default App;

////////////  *****************    self *************************************************************************************************************************************************************************************************

import { useState } from "react";
import "./App.css";
import { Image } from "./Components/Image";
import { Input } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";

function App() {
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */

  const [value, setValue]= useState(0)
  console.log(value);
  const handleChange=(myvalue)=>{
    setValue(myvalue)
  }

  const { countValue, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });



  // console.log(countValue);
  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {countValue}</h3>
      <button onClick={() => incCount()}>Increment</button>
      <button onClick={() => incCount(3)}>Increment 3</button>
      <button onClick={() => decCount(2)}>Decrement 2</button>
      <button onClick={() => decCount(4)}>Decrement 4</button>

      <br />
      {/* <br /> */}
      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Image
        // style={{ borderRadius: "600px", width: "250px", height: "300px" }}
        src={"https://bit.ly/dan-abramov"}
        alt={"image"}
        // borderRadius={"50px"}
        borderRadius={"40"}
        width={"200"}
        height={"300px"}
        fit={"cover"}
      />
      <br />
      <Input
        // type={"text"}
        type={"number"}
        size={"lg"}
        // size="lg"
        // size="xs"
        variant={"outline"}
        // value
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
