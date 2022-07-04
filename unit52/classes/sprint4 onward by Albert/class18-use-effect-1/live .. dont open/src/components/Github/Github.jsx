

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'

// const Github = () => {
//   const [loading, setLoading] = useState(true)
//   const [data, setData] = useState(null)
//   const [error, setError] = useState(false)

//  useEffect( () => {
//      getUsers("masai")
//  }, [] )

//  console.log(data);
//  const getUsers = function ({ query = "masai" })  {
//    setLoading(true); 

//      axios({
//         url: "https://api.github.com/search/users",
//         params: {
//             q: query
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













import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

// const Github = () => {

  function Github() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

 useEffect( () => {
     getUsers("masai")
 }, [] )

//  console.log(data);


 const getUsers = function ({ query = "masai" })  {
   setLoading(true); 

   return axios({
        url: "https://api.github.com/search/users",
        params: {
            q: query,
        }
    })

     .then((res) => {
        console.log(res);
        setData(res.data.items)
        setLoading(false)
     } )
     .catch((err) => {
        setError(true)
        setLoading(false)


     })
 }
   if(loading) {
     return <div> Loading </div>
   }
   if(error) {
     return <div> Something went wrong </div>
   }

  return (
    <div>
      {
        data.map((item) =>(
            <div>
                <h3> {item.login} </h3>
                <img alt={item.login} src={item.avatar_url}  />
            </div>
        ))
      }

    </div>
  )
}

export default Github


