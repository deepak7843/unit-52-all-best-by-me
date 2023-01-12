import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLocalData } from '../utils/localStorage'
import "./Navbar.css"

const Navbar = () => {
  const token = localStorage.getItem("token");
  // const token = useSelector((state) => state.AuthReducer.token);


  // const token= getLocalData("token")
  return (
    <div  className='nav' >
       <Link to='/restaurant' > 
       <Button className="btn" > Restaurant </Button>
       </Link>
        


       <Link to='/Login' > <Button className="btn"> Login </Button></Link>

       <Text pt={"10px"} fontSize={"xl"} >Token: {token}</Text>

    </div>
  )
}

export default Navbar