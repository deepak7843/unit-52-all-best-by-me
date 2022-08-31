// import { useEffect, useState, axios } from "react";
import { useEffect, useState } from "react";


export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);



// useEffect(() => {
//     //   async function getData() {
//     //  const data= await fetch("http://localhost:8090/todos")
//     //   .then( (d) => d.json() )
//     //   setTodos(data)
//     // }
//     getData();
//   }, []);

   
////// *********************************

//   useEffect(() => {
    useEffect( function dsd (){


    //   async function getData() {
    //  const data= await fetch("http://localhost:8090/todos")
    //   .then( (d) => d.json() )
    //   setTodos(data)
    // }

    console.log("mounted todos");
    getData();

    // curried function ////40--58

    // return  () =>
    return function cleanUp () 
    {
      ////// after component is unmounted
    //   console.log("unmounting todos done");
      console.log("todos is unmounted ");

    };  

  }, [page]);



////// *********************************


  //    line 10 to 14 ko useEffect ke outside bhi likh sakte hai ( line 22 to 26 )
  const getData = async () => {
    const data = await fetch(
      `http://localhost:8091/todos?_page=${page}&_limit=5`  
       //// 12--21
    ).then((d) => d.json());

    setTodos(data);
    setLoading(false);
  };

  return loading ? (
    "Loading....."
  ) : (
    
    // return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="enter todo"
      />

      <button
        onClick={() => {

          const payload = {
            title: text,
            status: false,
          };

          fetch("http://localhost:8091/todos", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getData();
          });

          // line 41 to 47 is equivalent to 51

          // axios.post("http://localhost:8090/todos", payload )
        }}
      >
        
        add todo

      </button>

      {/*     t---> todo    */}
      {todos.map((t) => (
        <div>
          {" "}
          {t.id}. {t.title}{" "}
        </div>
      ))}


      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        prev
      </button>


      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
};

// ******************************************************************************************************************************************************************************

// export const Todos = () => {
//     const [todos, setTodos] = useState([])
//     const [text, setText] = useState("")

//    useEffect(() => {

//     //   async function getData() {
//     //  const data= await fetch("http://localhost:8090/todos")
//     //   .then( (d) => d.json() )
//     //   setTodos(data)
//     // }
//     getData();

//    }, [] )

// //    line 10 to 14 ko useEffect ke outside bhi likh sakte hai ( line 22 to 26 )
//    const getData =  async () => {
//     const data= await fetch("http://localhost:8090/todos")
//      .then( (d) => d.json() )
//      setTodos(data)
//    }

//     return (
//          <div>

//         <input  onChange={e => setText(e.target.value) }

//         type="text" placeholder="enter todo" />

//         <button  onClick={ () => {
//             const payload = {
//                 title: text,
//                 status: false
//             };

//         fetch( "http://localhost:8090/todos", {
//             method: "POST",
//             headers: {
//                 "content-type" : "application/json"
//             },
//             body: JSON.stringify(payload)
//         } ).then(() => {
//             getData();
//         } );

//       // line 41 to 47 is equivalent to 51

//         // axios.post("http://localhost:8090/todos", payload )

//         }}  > add todo </button>
//         {/*     t---> todo    */}
//        { todos.map( (t) => (
//         <div> {t.title} </div> ) ) }

//       </div>
//     )
// }
