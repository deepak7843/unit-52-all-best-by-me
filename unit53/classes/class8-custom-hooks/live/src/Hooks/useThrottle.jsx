
import React,{useEffect, useRef} from 'react'

const useThrottle = (func, delay) => {
     const throttleId= useRef(false);


     useEffect(() => {
       if(!throttleId.current)
       {
          throttleId.current= true;
          setTimeout(() =>{
            throttleId.current= false;
            func();
          },delay)
       }
     }, [delay,func])

//   return (
//     <div>useThrottle</div>
//   )
}

export default useThrottle