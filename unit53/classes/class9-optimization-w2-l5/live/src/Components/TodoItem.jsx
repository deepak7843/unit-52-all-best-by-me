import React from "react";
import { useMemo } from "react";

const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    continue;
  }
  return true;
};

const TodoItem = ({ status, id, title, toggleStatus, handleDelete }) => {
  // const isDelayed = delay(200); // synchronous delays 1-23-0

  const isDelayed =  useMemo(()=>  delay(200)  ,[])  ;

  console.log("Todo is rendering", id);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
    >
      <div>{title} </div>
      <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"} </div>
      <button onClick={() => toggleStatus(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};


// function areEqual(prevProps, nextProps) {
//   console.log("prevProps--", prevProps);
//   console.log("nextProps--", nextProps);

//   if(prevProps.id=== nextProps.id && prevProps.status === nextProps.status  )  {
//     return true;
//   }
//   return false
// }

export default TodoItem;

// export default React.memo(TodoItem);

// export default React.memo(TodoItem, areEqual);
