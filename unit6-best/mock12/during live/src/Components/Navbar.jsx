import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div  className='nav' >
       <Link to='/teacher/login' > 
       <Button className="btn" > Login </Button>
       </Link>
        
       <Link to='/teacher/signup' >
         <Button className="btn"> Signup </Button>
       </Link>
      
       <Link to='/teacher/add' >
         <Button className="btn"> Add_Data </Button>
       </Link>


       {/* <Link to='/Login' > <Button > Login </Button></Link> */}


    </div>
  )
}

export default Navbar