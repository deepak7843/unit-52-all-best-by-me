
import React,{ useState,useEffect } from 'react'

const useDebounce = (value,delay) => {
    const [dvalue,setDValue]= useState(value);

    useEffect(() => {
       let newDebounceId = setTimeout(() => {
        setDValue(value)
       },delay);
       return () =>{
        clearTimeout(newDebounceId)
       }
    
    }, [delay,value])
  return dvalue
}

export default useDebounce