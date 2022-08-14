// import "./App.css";
// // import { useEffect, useState } from "react";
// import { useTimeout } from "./Hooks/useTimeout"; //// 48-16

// function App() {
//   const ready = useTimeout(); //// 48-16
// // //
// // //
// // //42-54
// // //
// //   // const [ready, setReady] = useState();
// //   const [ready, setReady] = useState(false);
// //   useEffect(() => {
// //     let timer = setTimeout(() => {
// //       setReady(true);
// //     }, 3000);

// //     return () => {
// //       clearTimeout(timer);
// //     };
// //   }, []);

//   return (
//     <div className="App">
//       <h3> Timeout </h3>
//       <div> {ready ? "Ready" : "Not-Ready"} </div>
//     </div>
//   );
// }

// export default App;

////////////*****************************************************************************************************************************************************************************************************************

// import "./App.css";
// import { useEffect, useState } from "react";
// import { useTimeout } from "./Hooks/useTimeout";
// import TestComponent from "./Component/TestComponent";

// function App() {
//   const ready1 = useTimeout(2000);
//   const ready2 = useTimeout(4000);

//   // const [state1, setState1]= useState(0)  ////// 1-1-30
//   // const [state2, setState2]= useState(10)

//   return (
//     <div className="App">
//       <h3> Timeout </h3>
//       {/* {state1}
//       <br />
//       {state2} */}

//       <div> {ready1 ? "Ready1" : "Not-Ready1"} </div>
//       <div> {ready2 ? "Ready2" : "Not-Ready2"} </div>

//       <TestComponent />
//       {/* /// 1-9-48  */}
//     </div>
//   );
// }

// export default App;

////////////  *****************    1-16-4 ************************************************************************************************************************************************************************************************

// import "./App.css";
// import { useEffect, useState } from "react";
// // import { useTimeout } from "./Hooks/useTimeout";
// import useFetch from "./Hooks/useFetch";

// function App() {
//   ///////
//   ///////
//   ///////
//   // const [data, setData] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(false);

//   // const fetchData = () => {
//   //   fetch("https://api.github.com/search/users?q=masai")
//   //     .then((r) => r.json())

//   //     .then((r) => {
//   //       console.log("r--", r);
//   //       setData(r.items);
//   //       setLoading(false);
//   //     })
//   //     .catch((e) => {
//   //       setError(true);
//   //       setLoading(false);
//   //     });
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);
// ///////
// ///////
// ///////
// ///////
//  //////// ************************************************************ b
// ///////
// ///////
// ///////

// //  let ans= useFetch("https://api.github.com/search/users?q=masai")
// //  console.log("ans--", ans);
// //  const { data, loading, error}= ans
// ///////
// ///////
// ///////
// ///////

//  const { data, loading, error}= useFetch("https://api.github.com/search/users?q=masai")

//   return (
//     <div className="App">
//       {loading && "Loading"}
//       {data?.length > 0 &&
//         data.map((item) => {
//           return <div key={item.id}>{item.login}</div>;
//         })}
//     </div>
//   );
// }

// export default App;

////////////  *****************    2-2-10 to 2-9-45     simple scrolling no debouncing, no throttling *************************************************************************************************************************************************************************************************
///////
///////
///////
///////

// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleScrollEvent = () => {
//     setCount((prev) => prev + 1);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScrollEvent);

//     return () => {
//       //// returning a cleanup function

//       window.removeEventListener("scroll", handleScrollEvent);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <div style={{ position: "sticky", top: "20px" }}>
//         <h3>Scroll count:{count}</h3>
//       </div>{" "}
//     </div>
//   );
// }

// export default App;

//////
//////
//////
//////

// ////////////  *****************    2-9-45 just below are debouncing without custom Hook *************************************************************************************************************************************************************************************************
// ///////
// ///////
// ///////
// ///////

// import "./App.css";
// import { useEffect, useState } from "react";
// // import useDebounce from "./Hooks/useDebounce";
// // import useDebounceCallback from "./Hooks/useDebounceCallback";

// function App() {
//   const [count, setCount] = useState(0);

//   function debouncer(callback, delay) {
//     let debounceId;
//     return function () {
//       console.log("debounceId--", debounceId);

//       debounceId && clearTimeout(debounceId);
//       //////
//       //////
//       debounceId = setTimeout(() => {
//         console.log("setting Timeout--");
//         callback();
//       }, delay);
//       //////
//       //////
//       console.log("debounceId after setTimeout--", debounceId);
//     };
//   }

//   const handleScrollEvent = () => {
//     setCount((prev) => prev + 1);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", debouncer(handleScrollEvent, 1000));
//     // window.addEventListener("scroll", handleScrollEvent);

//     ///////
//     ///////
//     ///////
//     //// returning a cleanup function
//     return () => {
//       window.removeEventListener("scroll", debouncer(handleScrollEvent, 1000));
//       // window.removeEventListener("scroll", handleScrollEvent);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <div style={{ position: "sticky", top: "20px" }}>
//         <h3>Scroll count:{count}</h3>
//       </div>{" "}
//     </div>
//   );
// }

// export default App;



// ////////////  *****************    2-9-45 just below are debouncing with custom Hook *************************************************************************************************************************************************************************************************
// ///////
// ///////
// ///////
// ///////

// import "./App.css";
// import { useEffect, useState } from "react";
// // import useDebounce from "./Hooks/useDebounce";
// // import useThrottle from "./Hooks/useThrottle";
// import useDebounceCallback from "./Hooks/useDebounceCallback";

// function App() {
//   const [count, setCount] = useState(0);

//   // function debouncer(callback, delay) {
//   //   let debounceId;
//   //   return function () {
//   //     console.log("debounceId--", debounceId);

//   //     debounceId && clearTimeout(debounceId);
//   //     //////
//   //     //////
//   //     debounceId = setTimeout(() => {
//   //       console.log("setting Timeout--");
//   //       callback();
//   //     }, delay);
//   //     //////
//   //     //////
//   //     console.log("debounceId after setTimeout--", debounceId);
//   //   };
//   // }

//   const handleScrollEvent = () => {
//     setCount((prev) => prev + 1);
//   };

//   // const dvalue = useDebounce(count, 1000);
//   //////
//   //////
//   useDebounceCallback(() => {
//     console.log(count);
//   }, 1000);

//   // useThrottle(() =>{
//   //   console.log(count);
//   // },1000)

//   useEffect(() => {
//     // window.addEventListener("scroll", debouncer(handleScrollEvent, 1000));
//     window.addEventListener("scroll", handleScrollEvent);

//     ///////
//     ///////
//     ///////
//     //// returning a cleanup function
//     return () => {
//       // window.removeEventListener("scroll", debouncer(handleScrollEvent, 1000));
//       window.removeEventListener("scroll", handleScrollEvent);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <div style={{ position: "sticky", top: "20px" }}>
//         <h3>Scroll count:{count}</h3>
//         {/* <h3>Scroll count:{dvalue}</h3>    */}
//       </div>{" "}
//     </div>
//   );
// }

// export default App;

////////////  *****************    2-28-10  throttling *************************************************************************************************************************************************************************************************
///////
///////
///////
///////

import "./App.css";
import { useEffect, useState } from "react";
// import useDebounce from "./Hooks/useDebounce";
import useThrottle from "./Hooks/useThrottle";

function App() {
  const [count, setCount] = useState(0);

  const handleScrollEvent = () => {
    setCount((prev) => prev + 1);
  };

  // const dvalue = useDebounce(count, 1000);
  //////
  //////
  // useDebounce(() => {
  //   console.log(count);
  // }, 1000);

  useThrottle(() => {
    console.log(count);
  }, 1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    ///////
    ///////
    ///////
    //// returning a cleanup function
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="App">
      <div style={{ position: "sticky", top: "20px" }}>
        <h3>Scroll count:{count}</h3>
      </div>{" "}
    </div>
  );
}

export default App;
