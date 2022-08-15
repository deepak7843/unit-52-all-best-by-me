// import { store } from "../Redux/store";
// import { incrementCounter } from "../Redux/action";
// import { useState } from "react";
// const Counter = () => {
//   const [local, setLocal] = useState(0);
//   const { counter } = store.getState();
//   console.log(counter);
//   const { dispatch } = store;
//   const handleIncrement = () => {
//     dispatch(incrementCounter(10));
//     setLocal((prev) => prev + 1);
//   };
//   return (
//     <>
//       <h1>Count {counter}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button>Decrement</button>
//     </>
//   );
// };

// export { Counter };

// ********************************************************************************************************************************************************

import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../Redux/action";

const Counter = () => {
  // const counter = useSelector((store) =>  store.counter);

  const counter = useSelector((store) => {
    console.log("store--", store);

    return store.counter;
  });

  console.log(counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter(10));
  
  };

  
/////////**************************** 47 to 62 not in class1 ****************************************************

  // const handleIncrement = () => {
  //   dispatch(incrementCounter(10));
  //   // const actionObject = incrementCounter(10);
  //   // dispatch(actionObject);
  // };

  const handleDecrement = () => {
    // dispatch(incrementCounter(10));
    const actionObject = decrementCounter(10);
    dispatch(actionObject);
  };

  
/////////********************************************************************************

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

// export { Counter };
export default Counter;
