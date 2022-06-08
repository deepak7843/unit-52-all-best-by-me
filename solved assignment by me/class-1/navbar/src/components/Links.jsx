

import React from 'react'

const Links = ( props ) => {
   console.log("props--", props);
   
  return (
    <div className='navlink' >
        
      <a > {props.navbar_links} </a>

    </div>
  )
}

export default Links