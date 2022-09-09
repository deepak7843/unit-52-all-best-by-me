import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({breedName}) => {
    // console.log(breedName);
    const navigate= useNavigate()

const HandleClick=() => {
  navigate('/Puppy' , {state:{name:breedName} } )
}


  return (
    <div className={styles.card} onClick={HandleClick} >

     <h2>{breedName}</h2>

    </div>
  )
}

export default Card