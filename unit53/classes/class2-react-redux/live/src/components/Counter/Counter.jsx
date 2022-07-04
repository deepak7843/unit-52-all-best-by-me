// import { store } from "../Redux/store";
// import { addCount, substractCount } from "../../Redux/action";
// import React, { useContext, useState } from "react";

// import{useSelector, useDispatch} from "react-redux"
// // import { AppContext } from "../Redux/AppContextProvider"; 

// const Counter = () => { 
 


//   // const [local, setLocal] = useState(0);

//   // const { counter } = store.getState();
//   // console.log("counter---" , counter);

//   // const { dispatch } = store;

//   const {getState} = React.useContext(AppContext)
//   const {counter} = getState()


//   const handleIncrement = () => {
//     // dispatch(incrementCounter(5));

//     // console.log("store.getState()----" , store.getState());
       
//     // setLocal((prev) => prev + 1);
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


// ********************************************************************************************************************************************************************************************************************************************************


import { addCount, substractCount } from "../../Redux/action";
import React, { useContext, useState } from "react";

import{useSelector, useDispatch} from "react-redux"

const Counter = () => { 
 
const count= useSelector((store)=> store.count ) 
const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addCount(1));
  };

  const handleSubstract = () => {
    dispatch(substractCount(1));
  };


  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleSubstract}  >substract</button>
    </>
  );

};

export { Counter };
// export default Counter;