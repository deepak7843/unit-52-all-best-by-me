// import { useEffect, useState } from "react";

// /////47-10

// const useTimeout= ()=>{

//   console.log(useState);

//     const [ready, setReady] = useState(false);

//     useEffect(() => {
//       let timer = setTimeout(() => {
//         setReady(true);
//       }, 3000);

//       return () => {
//         clearTimeout(timer);
//       };
//     }, []);
//     // console.log(ready);

//     return ready
// }

//  export {useTimeout}

////////////*****************************  1-3-50 *********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

import { useEffect, useState } from "react";

const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   console.log("run");
    //   setReady(true);
    // }, delay);
    /////
    /////
    /////
    ////

    let timer = setTimeout(
      () => {
      setReady(true);
    }, delay);   

    // console.log(timer);

    return () => {
      clearTimeout(timer);
    };

    //////
    //////
  }, [delay]);

  return ready;
};

export { useTimeout };
