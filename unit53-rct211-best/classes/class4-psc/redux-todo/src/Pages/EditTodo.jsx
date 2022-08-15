// import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { editTodoFailure, editTodoRequest, editTodoSuccess } from "../Redux/action";

// const EditTodo = () => {
//   const dispatch = useDispatch()
//   const { id } = useParams();

//   const [todo, setTodo] = useState("");

//   const editTodo = (payload) => {
//     dispatch(editTodoRequest());

//     axios
//      .patch(`/todos/${id}`, payload)
//      .then ((r)=> {
//        console.log("r---", r);
//       dispatch(editTodoSuccess(r.data)) 
//      }
     
//      )
//      .catch((e) => dispatch(editTodoFailure(e)))
//   };

//   const handleUPdate = () => {
//     if(todo){
//       const payload= {title:todo, status:false }
//       editTodo(id,payload)
//       setTodo("")
//   }
//   };

//   return (
//     <div>
//       {/* EditTodo */}

      // <input
      //   placeholder="edit task to update todos..."
      //   type="text"
      //   value={todo}
      //   onChange={(e) => setTodo(e.target.value)}
      // />
      // <button onClick={handleUPdate}>update</button>
//     </div>
//   );
// };

// export default EditTodo;


// ********************************************************************************************************************************************************************************************************************************************************



import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditTodo = () => {
  const [task, setTask]= useState("")
  const {id}= useParams()

const handleUPdate= () => {
  axios.patch(`/todos/${id}` , {title: task} )
}

  return (
    <div>
      <h1>EditTodo</h1>


      <input
        placeholder="edit task to update todos..."
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <Link to={`/`} > 
      <button onClick={handleUPdate}>update</button>
      </Link>

    </div>
  )
}

export default EditTodo