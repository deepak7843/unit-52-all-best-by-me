import React from 'react'
import { useState } from 'react'
import {useDispatch } from "react-redux"
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../Redux/action'
import axios from 'axios'

// dispatch(addTodoSuccess(r.data)) 

const AddTodo=() => {
   const dispatch = useDispatch();
   const [todo, setTodo] = useState("")

    const addTodo= (payload) => {
      dispatch(addTodoRequest());

      axios
       .post("/todos", payload)
       .then ((r)=> {
         console.log("r---", r);
        dispatch(addTodoSuccess(r.data)) 
       }
       
       )
       .catch((e) => dispatch(addTodoFailure(e)))
    }


const handleAdd= ()=> {
    if(todo){
        const payload= {title:todo, status:false }
        addTodo(payload)
        setTodo("")
    }
}

  return (
    <div>
       <h3>  Add Todo</h3>
       <input type="text"
        value={todo}
        onChange= {(e)=> setTodo(e.target.value)}
        placeholder="add todo here..."
       />

       <button onClick={handleAdd} > add </button>
    </div>
  )
}

export default AddTodo
