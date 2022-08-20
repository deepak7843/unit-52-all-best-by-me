// /*
// 1. Complete the useCounter hook functionality here
// 2. Feel free to change any boilerplate logic present inside this custom hook
// 3. DO NOT CHANGE the name `useCounter` of this custom hook
// */
// export const useCounter = () => {
//   const countValue = "";
//   const incCount = () => {};
//   const decCount = () => {};
//   return {
//     countValue,
//     incCount,
//     decCount,
//   };
// };

import { useState } from "react";

////////////  *****************    self *************************************************************************************************************************************************************************************************

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = (init) => {
  const initialValue = init.initialValue;
  const min = init.minValue;
  const max = init.maxValue;
  // const countValue = "";
  const [countValue, setCountValue] = useState(initialValue);

  const incCount = (e) => {
    // console.log(typeof(e));
    if (
      (e === 3 && countValue <= 12) ||
      (e === 2 && countValue <= 13) ||
      (e === 4 && countValue <= 11) ||
      (e === 5 && countValue <= 10)
    )  {
      setCountValue(countValue + e);
    }

    else if(e=== undefined && countValue<=14 ){
      setCountValue(countValue + 1);
    }
    // else{
    //   setCountValue(countValue + 1);

    // }
  };

  const decCount = (e) => {
    if (
      (e === 3 && countValue >= 8) ||
      (e === 2 && countValue >= 7) ||
      (e === 4 && countValue >= 9) ||
      (e === 5 && countValue >= 10)
    ) {
      setCountValue(countValue - e);
    }

    else if(e=== undefined && countValue>=6 ){
      setCountValue(countValue - 1);
    }
    // else{
    //   setCountValue(countValue - 1);

    // }
  }; 
   return {
    countValue,
    incCount,
    decCount,
  };
};
