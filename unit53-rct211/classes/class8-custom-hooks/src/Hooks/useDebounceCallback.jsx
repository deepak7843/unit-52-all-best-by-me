import React, { useEffect } from "react";

const useDebounceCallback = (func, delay) => { 
  // const debounceId=useRef();   

  useEffect(() => {   
    console.log("getting called");
    let newdebounceId = setTimeout(() => {
      func();
    }, delay);

    /////
    /////
    return () => {
        console.log("inside the cleanup function");
      clearTimeout(newdebounceId);
    };
  }, [delay, func]);

  //   return (
  //     <div>useDebounceCallback</div>
  //   )
};

export default useDebounceCallback;
