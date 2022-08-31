// import logo from './logo.svg'
import { useEffect, useState } from "react";

import "./App.css";
import { Todos } from "./components/Todos";
import { Hello } from "./components/Hello";


function App() {
  return (

    <div className="App">
 <h1> class5-useEffect-1 </h1> 
       <Todos />

    </div>
  );
}

export default App;



// ***************** 1--52--1 *************************************************************************************************************************************************************



// function App() {
//   console.log("0    *************************************");

//   const [counter, setCounter] = useState(0)
//   const [age, setAge] = useState(12)

//   console.log("1st");

//   useEffect( () => {
//     console.log("always** Inside effect 1");
//   } )

//   useEffect( () => {
//     console.log("once** Inside effect ");
//   } , [] )

//   useEffect( () => {
//     console.log(" counter** Inside effect 2");
//   }, [counter] )

//   useEffect( () => {
//     console.log("age** Inside effect 3");
//   } , [age] )   //// 1--52--18     // callback function runs only when age changes

//   // /////// *************************
//   // useEffect( () => {
//   //   console.log("Inside effect 2");
//   // } , [age, counter, any-whatever-state ] )
//    /////// *************************

//    console.log("3rd return ");
//     return (
//     <div className="App">
//         <h1> class5-useEffect-1 </h1>
//      <h3> Counter: {counter}  </h3>

//      <h2> age:{age} </h2>

//       <button onClick={ () => {
//         setCounter(counter+1)
//       } }
//       >
//       Add 1
//      </button>

//     <button onClick={ () => {
//         setAge(age+2)
//       } }  > change age </button> 

//     </div>
//   );
// }

// export default App;






// ***************** 1--13--11 *************************************************************************************************************************************************************






// function App() {
//   const [todos, setTodos] = useState([]);

//   const [counter, setCounter] = useState(0)  ////1--46--39


//   // fetch("http://localhost:8090/todos").then(d => d.json()).then(console.log())     //1--13--11


//   // ****** line 14 ki jagah 18 to 23 ***********
//   console.log("1st");


//   // fetch("http://localhost:8090/todos")
//   //   .then((d) => d.json())
//   //   .then((data) => {
//   //     console.log("2nd fetch");
//   //     console.log("Todos:", data);
      
//   //     // setTodos(data)  // 1-17-35 ---> infinite loop
//   //   });



//   // ******* line 18 to 23 ki jagah 28 to 36 ****************

  
  
//   // useEffect( () => {
//   //     ////1--19--27
//   //   fetch("http://localhost:8090/todos")
//   //   .then(d => d.json())
//   //   .then(  (data) => {
//   //     // console.log("Todos:", data);
//   //       setTodos(data)
//   //   }  )

//   // } , []    )


//   // ******* line  28 to 36 ki jagah 41 to 51  ****************

//  ////  synchronous function  1-23-30


//   // useEffect(  () => {
//   //   async function getData() {
//   //    const data= await fetch("http://localhost:8090/todos")
//   //     .then( (d) => d.json() )

//   //     setTodos(data)

//   //   }
//   //   getData();

//   // }  , []    );




//   //////// *********************************

//   useEffect(  () => {
//     console.log("inside Effect 1");
// } )

// useEffect(  () => {
//   console.log("inside Effect 2");
// } )

//   // useEffect(  () => {
//   //      console.log("inside Effect");
//   // }  , []    )


//    console.log("3rd return ");

//   return (
//     <div className="App">
//         <h1> class5-useEffect-1 </h1>
//      <h3> Counter: {counter}  </h3>

//       <button onClick={ () => {
//         setCounter(counter+1)  ////1--46--53
//       } }
//       >
//       Add 1
//      </button>

//     </div>
//   );


//   ////// *********************************

//   // console.log("3rd return ");

//   // return (
//   //   <div className="App">
//   //     <h1> class5-useEffect-1 </h1>
//   //     {/* hello dsd */}
     
//   //    console.log("return");
//   //     {todos.map((todo) => (
//   //       <div>
//   //         {/* {todo.title} */}
//   //         {todo.id} .{todo.title}
//   //         {/* {todo.id} . {todo.title}{" "} */}
//   //       </div>
//   //     ))}
      
//   //   </div>
//   // );





// }

// export default App;






// ******************************************************************************************************************************************************************************






// function App() {
//   const [show, setShow] = useState(true);

//   // const [age, setAge] = useState(10)  //51--53

//   console.log("Before");

//   useEffect(() => {
//     console.log("Inside effect 1");
//   });

//   useEffect(() => {
//     console.log("Inside effect 2"); //53-53
//   });

//   console.log("after");

//   // *******************************
//   // return <h1>suno</h1>;

//   // *******************************
//   // return (
//   //   <div>
//   //     <h1>demo</h1>

//   //     <p>hello</p>
//   //   </div>
//   // );

//   // *******************************

//   return (
//     <div className="App">
//       {show ?
//        <Hello /> : null }

//       <button onClick={ () => {
//         setShow(!show)
//       } } >  Toggle component   </button>

//     </div>
//   );
// }

// export default App;

// // ******************************************************************************************************************************************************************************

// function App() {
//    const [show, setShow] = useState(true)
//   return (
//     <div className="App">
//       {show ?
//        <Hello /> : null }
//       <button onClick={ () => {
//         setShow(!show)
//       } } >Toggle component </button>
//     </div>
//   );
// }

// export default App;

// ******************************************************************************************************************************************************************************

// function App() {

//   return (
//     <div className="App">
//        <Hello />
//        <Hello />
//     </div>
//   )
// }

// export default App
