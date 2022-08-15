// import React from "react";

// const delay = (ms) => {
//   const start = Date.now();
//   while (Date.now() - start < ms) {   ///// 59-1
//     continue;
//   }
//   return true;
// };

// const TodoItem = ({ status, id, title}) => {

//   const isDelayed =   delay(200) ///// 58-26

//   console.log("Todo is rendering", id);
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
//     >
//       <div>{title} </div>
//       <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"} </div>

//     </div>
//   );
// };

// export default TodoItem;

/////////
/////////
/////////
/////////
/////////

/////////***************  1-13-1 to        using memoization for delays **************************************************************************************************************************************************************************************************
/////////
/////////
/////////
/////////

// import React from "react";

// const delay = (ms) => {
//   const start = Date.now();
//   while (Date.now() - start < ms) {
//     ///// 59-1
//     continue;
//   }
//   return true;
// };

// const TodoItem = ({ status, id, title}) => {
//   const isDelayed = delay(200); ///// 58-26
//   ///// synchronous delays 1-23-0

//   console.log("Todo is rendering", id);
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
//     >
//       <div>{title} </div>
//       <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"} </div>
//     </div>
//   );
// };

// export default React.memo(TodoItem); //// 1-12-20

/////////
/////////
/////////
/////////
/////////
/////////

/////////***************  1-26-10 to       toggle delete start **************************************************************************************************************************************************************************************************

/////////
/////////
/////////
/////////

// import React from "react";

// const delay = (ms) => {
//   const start = Date.now();
//   while (Date.now() - start < ms) {
//     ///// 59-1
//     continue;
//   }
//   return true;
// };

// const TodoItem = ({ status, id, title, toggleStatus, handleDelete }) => {
//   const isDelayed = delay(200); // synchronous delays 1-23-0
//   ///// 58-26

//   console.log("Todo is rendering", id);
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
//     >
//       <div>{title} </div>
//       <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"} </div>
//       {/* ////// */}
//       <button onClick={() => toggleStatus(id)}>Toggle</button>
//       <button onClick={() => handleDelete(id)}>Delete</button>
//     </div>
//   );
// };

// export default React.memo(TodoItem); //// 1-12-20

// /////////
// /////////
// /////////
// /////////
// /////////
// /////////

// /////////***************  1-49-5 to    React.memo(TodoItem, areEqual)  *******  areEqual  ************************************************************************************************************************************************************************************************

// /////////
// /////////
// /////////
// /////////

// import React from "react";
// import { useMemo } from "react";

// const delay = (ms) => {
//   const start = Date.now();
//   while (Date.now() - start < ms) {
//     ///// 59-1
//     continue;
//   }
//   return true;
// };

// const TodoItem = ({ status, id, title, toggleStatus, handleDelete }) => {
//   const isDelayed = delay(200); // synchronous delays 1-23-0
//   ///// 58-26
//   // const isDelayed =  useMemo(()=>     (200)  ,[])  ;

//   console.log("Todo is rendering", id);
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
//     >
//       <div>{title} </div>
//       <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"} </div>
//       {/* ////// */}
//       <button onClick={() => toggleStatus(id)}>Toggle</button>
//       <button onClick={() => handleDelete(id)}>Delete</button>
//     </div>
//   );
// };

// function areEqual(prevProps, nextProps) {  
//   console.log("prevProps--", prevProps);
//   console.log("nextProps--", nextProps);

//   if (prevProps.id === nextProps.id && prevProps.status === nextProps.status) {
//     return true;
//   }
//   return false;
// }

// // export default TodoItem;

// // export default React.memo(TodoItem); //// 1-12-20

// export default React.memo(TodoItem, areEqual);



// /////////
// /////////
// /////////
// /////////
// /////////
// /////////

// /////////***************  1-52-50 to      removed areEqual and memoized by useCallback **************************************************************************************************************************************************************************************************

// /////////
// /////////
// /////////
// /////////

// import React from "react";
// import { useMemo } from "react";

// const delay = (ms) => {
//   const start = Date.now();
//   while (Date.now() - start < ms) {
//     ///// 59-1
//     continue;
//   }
//   return true;
// };

// const TodoItem = ({ status, id, title, toggleStatus, handleDelete }) => {
//   const isDelayed = delay(200); // synchronous delays 1-23-0
//   ///// 58-26
//   // const isDelayed =  useMemo(()=>  delay(200)  ,[])  ;

//   console.log("Todo is rendering", id);
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
//     >
//       <div>{title} </div>
//       <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"} </div>
//       {/* ////// */}
//       <button onClick={() => toggleStatus(id)}>Toggle</button>
//       <button onClick={() => handleDelete(id)}>Delete</button>
//     </div>
//   );
// };

// // function areEqual(prevProps, nextProps) {  
// //   console.log("prevProps--", prevProps);
// //   console.log("nextProps--", nextProps);

// //   if (prevProps.id === nextProps.id && prevProps.status === nextProps.status) {
// //     return true;
// //   }
// //   return false;
// // }

// // export default TodoItem;

// export default React.memo(TodoItem); //// 1-12-20

// // export default React.memo(TodoItem, areEqual);





/////////
/////////
/////////
/////////
/////////
/////////

/////////***************  2-14-17  to      removed areEqual and React.memo ,,,, and memoized by useMemo **************************************************************************************************************************************************************************************************

/////////
/////////
/////////
/////////

import React from "react";
import { useMemo } from "react";

const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    ///// 59-1
    continue;
  }
  return true;
};

const TodoItem = ({ status, id, title, toggleStatus, handleDelete }) => {
  // const isDelayed = delay(200); // synchronous delays 1-23-0
  ///// 58-26
  const isDelayed =  useMemo(()=>  delay(200)  ,[])  ; ///// 2-17-13

  console.log("Todo is rendering", id);   
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
    >
      <div>{title} </div>
      <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"} </div>
      {/* ////// */}
      <button onClick={() => toggleStatus(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

// function areEqual(prevProps, nextProps) {  
//   console.log("prevProps--", prevProps);
//   console.log("nextProps--", nextProps);

//   if (prevProps.id === nextProps.id && prevProps.status === nextProps.status) {
//     return true;
//   }
//   return false;
// }

export default TodoItem;

// export default React.memo(TodoItem); //// 1-12-20

// export default React.memo(TodoItem, areEqual);
