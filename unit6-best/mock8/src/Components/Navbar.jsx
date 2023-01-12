import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div  className='nav' >
       <Link to='/admin/login' > 
       <Button className="btn" > Admin </Button>
       </Link>
        
       <Link to='/Register' > <Button className="btn"> User </Button></Link>


       {/* <Link to='/Login' > <Button > Login </Button></Link> */}


    </div>
  )
}

export default Navbar