// import { useEffect, useState } from "react";


// const useTimeout= ()=>{

//     const [ready, setReady] = useState(false);

//     useEffect(() => {
//       let timer = setTimeout(() => {
//         setReady(true);
//       }, 3000);
  
//       return () => {
//         clearTimeout(timer);
//       };
//     }, []);

//     return ready
// }

//  export {useTimeout}

 ////////////**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


import { useEffect, useState } from "react";


const useTimeout= (delay)=>{

    const [ready, setReady] = useState(false);

    useEffect(() => {
      let timer = setTimeout(() => {
        setReady(true);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [delay]);

    return ready
}

 export {useTimeout}