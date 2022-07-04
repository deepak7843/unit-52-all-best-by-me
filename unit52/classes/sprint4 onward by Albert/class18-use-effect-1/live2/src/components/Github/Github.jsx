// import React from 'react'

// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'

// // const Github = () => {

//   function Github() {

//   const [loading, setLoading] = useState(true)
//   const [data, setData] = useState(null)
//   const [error, setError] = useState(false)

//  useEffect( () => {
//      getUsers("masai")
//  }, [] )

// //  console.log(data);

//  const getUsers = function ({ query = "masai" })  {
//    setLoading(true);

//    return axios({
//         url: "https://api.github.com/search/users",
//         params: {
//             q: query,
//         }
//     })

//      .then((res) => {
//         console.log(res);
//         setData(res.data.items)
//         setLoading(false)
//      } )
//      .catch((err) => {
//         setError(true)
//         setLoading(false)

//      })
//  }
//    if(loading) {
//      return <div> Loading </div>
//    }
//    if(error) {
//      return <div> Something went wrong </div>
//    }

//   return (
//     <div>
//       {
//         data.map((item) =>(
//             <div>
//                 <h3> {item.login} </h3>
//                 <img alt={item.login} src={item.avatar_url}  />
//             </div>
//         ))
//       }

//     </div>
//   )
// }

// export default Github

// //////////////////************************************************************************************************************************************************************************************************************** */

import axios from "axios";
import { useEffect, useState } from "react";

function Github() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const [parameters, setParameters] = useState({
    query: "masai",
    page: 1,
    perPage: 4,
  });

  const [text, setText] = useState("");

  useEffect(() => {
    getUsers(parameters);

    // getUsers(parameters).then(() => {

      
    //   ////// ******** DOUBT
    //   alert("success");
    // } );
  }, [parameters]);

  console.log("data--", data);

  // useEffect(() => {
  //   getUsers({ query = "masai" });
  // }, []);

  const getUsers = (args) => {
    console.log("args--*--", args);
    //  console.log(1);  //// 41--1

    const { query = "masai", page, perPage } = args;
         //   ////// ******** DOUBT
    // const getUsers = function ({ query = "masai" }) {

    setLoading(true);

    return axios({
      url: "https://api.github.com/search/users",
      params: {
        q: query,
        page: page,
        per_page: perPage,
      },
    })
      .then((res) => {
        console.log("res--", res);
        setData(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });

    // setData([])  ////// //// 41--1
  };

  // getUsers() //////// 41--1

  const handleClick = () => {
    setParameters({
      ...parameters,
      query: text,
    });
  };

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="username"
        />
        <button onClick={handleClick}>Search</button>
      </div>

      <div>
        <button
          disabled={parameters.page === 1}
          onClick={() =>
            setParameters({ ...parameters, page: parameters.page - 1 })
          }
        >
          prev
        </button>
        <button
          onClick={() =>
            setParameters({ ...parameters, page: parameters.page + 1 })
          }
        >
          next
        </button>
      </div>


      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.login}</h3>
          <img width="50px" alt={item.login} src={item.avatar_url} />
        </div>
      ))}

    </div>
  );
}

export default Github;
