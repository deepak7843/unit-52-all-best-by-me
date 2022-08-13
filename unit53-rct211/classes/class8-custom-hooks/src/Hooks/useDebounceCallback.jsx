
import React,{useEffect} from 'react'

const useDebounceCallback = (func,delay) => {
    // const debounceId=useRef();


    useEffect(()=>{
      let    newdebounceId= setTimeout(()=>{
            func()
        },delay);
        return  ()=>{
            clearTimeout(newdebounceId)
        }
    },[delay,func])

//   return (
//     <div>useDebounceCallback</div>
//   )
}

export default useDebounceCallback