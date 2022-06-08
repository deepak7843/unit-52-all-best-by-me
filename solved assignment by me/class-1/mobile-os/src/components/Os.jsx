import React from 'react'

import '../App.css'

const Os = () => {

  const ar= [
     { name: "Android" , style: "disc" },
     { name: "blackberry" , style: "disc" },
     { name: "iPhone" , style: "disc" },
     { name: "Windows Phone" , style: "disc" },
  ]

  return (
    <div className="App">
      
      <h1> Mobile Operating System </h1>
   
   <ul> 
        {ar.map((el) => (
          <li className= {el.style} > {el.name} </li>
        ) ) }

</ul>

    </div>
  )
}

export default Os