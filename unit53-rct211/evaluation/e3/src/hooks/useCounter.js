import { useState } from "react";

export const useCounter = (init) => {
    // console.log("incCount--", incCount);
    // console.log("decCount--", decCount);
    console.log("init--", init);

  const [count, setCount] = useState(init.initialValue);
  const [max, setMax] = useState(init.maxValue);
  const [min, setMin] = useState(init.minValue);

  const incCount = (el) => {



    if ((count < 13 && el === 3) || (el === 1 && count < 15)) {
      return setCount(count + el);
    } else {
      return setMax(max);
    }
  };
  const decCount = (el) => {
    if ((count >= 7 && el === 2) || (count >= 9 && el === 4)

    // || (el === 1 && count >= 9) 
    
    // || (el === 4 && count >= 7)
     ) {
      return  setCount(count - el);
    } else {
      return setMin(min);
    }
  };

  return [count, incCount, decCount];
};
